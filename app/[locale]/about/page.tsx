import Image from 'next/image';
import React from 'react';
import aboutImage from '../../../public/homepage/full-body-black-and-white.jpg';
import { useTranslations } from 'next-intl';

export default function Aboutpage() {
  const translation = useTranslations('AboutPage');
  return (
    <div className="mt-[61px] bg-projectBackground">
      <h2 className="text-center text-2xl">{translation('aboutMe')}</h2>
      <div className="flex justify-center px-20 mt-16 gap-12">
        <div className="w-[40%]">
          <Image
            alt="Simeon dancing"
            src={aboutImage}
            className="w-full h-auto rounded-md"

            // placeholder="blur"
            //sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 30vw"
          />
        </div>
        <div className="w-1/2 mt-6">
          <p className="">
            Simeon Ohlsen macht seit über 20 Jahren Musik in diversen
            Formationen: solistisch als Pianist und Sänger, in Duos, Trios und
            größeren Ensembles im Bereich der Kammermusik mit Klavier, Fagott
            und Gesang, Vokalensembles, Bands, Chören und Orchestern. Seit 2017
            leitet er Chöre in Deutschland und Österreich. Er erhielt
            akademische Abschlüsse an der Universität Freiburg und der
            Musikhochschule Freiburg i. Brsg. in den Fächern Musik,
            Philosophie/Ethik und Elementare Musikpädagogik (Bachelor of Music,
            B.mus.) mit den Hauptfächern Klassisches Klavier und Gesang
            Jazz/Pop. Seit 10 Jahren tanzt er im Bereich des Zeitgenössischen
            Tanzes u.a. in den Jugendensembles der Theater Konstanz und Freiburg
            und schließt im Sommer das Studium “Zeitgenössische Tanzpädagogik”
            an der Musik und Kunst Privatuniversität der Stadt Wien ab (B.A.).
            Die Arbeit mit Menschen im kunstpädagogischen Kontext macht ihm
            besonders Freude.{' '}
          </p>
        </div>
      </div>
    </div>
  );
}
