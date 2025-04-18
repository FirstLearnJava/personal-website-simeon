'use client';

import React, { useState } from 'react';
import * as Yup from 'yup';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Formik, Form, Field } from 'formik';
import { useTranslations } from 'next-intl';

const requiredSchema = Yup.object({
  email: Yup.string().email('Invalid email'),
  firstName: Yup.string(),
  lastName: Yup.string(),
});

function SubscribeForm() {
  const translation = useTranslations('Newsletter');
  const [status, setStatus] = useState<number | null>(null);
  const [message, setMessage] = useState<string>('');
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);
  //const [run, setRun] = useState<boolean>(false);
  // const [totalCounts, setTotalCounts] = useState<number>(400);
  /* const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });  */

  /* useEffect(() => {
    const { innerWidth: width, innerHeight: height } = window;
    setDimensions({
      width,
      height,
    });
  }, []); */
  return (
    <div className="flex flex-col space-y-8 w-[500px] xxl:w-[460px] xl:w-[420px] sm:w-full">
      <Formik
        initialValues={{
          email: '',
          firstName: '',
          lastName: '',
        }}
        validationSchema={requiredSchema}
        onSubmit={async (values, { resetForm }) => {
          setButtonDisabled(true);
          if (values?.email === '') {
            setMessage('');
            setSubmitting(true);
            setTimeout(() => {
              setButtonDisabled(false);
              setMessage(translation('errorJoiningNewsletter'));
              setSubmitting(false);
            }, 400);
            return;
          }
          try {
            const response = await fetch('/api/subscribe', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                email: values?.email,
                firstName: values?.firstName,
                lastName: values?.lastName,
              }),
            });
            const datas = await response.json();
            if (datas.status >= 400) {
              setStatus(datas.status);
              setMessage('');
              setSubmitting(true);
              setTimeout(() => {
                setButtonDisabled(false);
                setMessage(translation('errorJoiningNewsletter'));
                setSubmitting(false);
              }, 400);
              return;
            }

            setStatus(201);
            setMessage('');
            setSubmitting(true);
            //setRun(true);
            setTimeout(() => {
              //setTotalCounts(0);
              resetForm();
              setButtonDisabled(false);
              setMessage(translation('confirmationEmail'));
              setSubmitting(false);
            }, 400);
            //setTotalCounts(400);
          } catch {
            setStatus(500);
            setMessage('');
            setSubmitting(true);
            setTimeout(() => {
              setButtonDisabled(false);
              setMessage(translation('errorJoiningNewsletter'));
              setSubmitting(false);
            }, 400);
          }
        }}
      >
        <Form className="w-full flex flex-col items-center gap-4 mt-7">
          <label className="w-full">
            <span className="ml-2">{translation('enterEmail')}</span>
            <div className="w-full bg-transparent border flex-1 border-black rounded-2xl flex gap-2 px-3 mt-1 bg-white">
              <Field
                type="email"
                name="email"
                className="w-full grow rounded-md bg-transparent text-base px-2 py-[10px] xl:py-2 outline-none"
                placeholder="Email"
                autoComplete="off"
              />
            </div>
          </label>
          <label className="w-full">
            <span className="ml-2">{translation('enterFirstName')}</span>
            <div className="w-full bg-transparent border flex-1 border-black rounded-2xl flex gap-2 px-3 mt-1 bg-white">
              <Field
                name="firstName"
                className="w-full grow rounded-md bg-transparent text-base px-2 py-[10px] xl:py-2 outline-none"
                placeholder="First name"
                autoComplete="off"
              />
            </div>
          </label>
          <label className="w-full">
            <span className="ml-2">{translation('enterLastName')}</span>
            <div className="w-full bg-transparent border flex-1 border-black rounded-2xl flex gap-2 px-3 mt-1 bg-white">
              <Field
                name="lastName"
                className="w-full grow rounded-md bg-transparent text-base px-2 py-[10px] xl:py-2 outline-none"
                placeholder="Last name"
                autoComplete="off"
              />
            </div>
          </label>
          <button
            className="rounded-full bg-black mt-[14px] xl:mt-2 px-4 py-2 font-bold text-gray-100 transition-all hover:scale-105 hover:bg-gray-900 disabled:opacity-80 w-40 text-center"
            type="submit"
            disabled={buttonDisabled}
          >
            {submitting ? translation('submitting') : translation('submit')}
          </button>

          {message && (
            <p
              className={`${status !== 201 ? 'text-red-500' : 'text-green-600'} pt-4 font-black -mb-2`}
            >
              {message}
            </p>
          )}
        </Form>
      </Formik>
    </div>
  );
}

export default SubscribeForm;
