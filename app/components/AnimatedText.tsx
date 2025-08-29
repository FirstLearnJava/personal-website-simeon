'use client';
import { motion } from 'framer-motion';
import React from 'react';

const container = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const AnimatedText = ({ children }: { children: string }) => {
  return (
    <motion.div
      variants={container}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.12, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedText;
