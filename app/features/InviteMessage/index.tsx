import React from 'react';
import { motion } from 'framer-motion';
import DefaultPageSection from '~/layout/DefaultPageSection';

// Container variants: use staggerChildren to animate each letter sequentially.
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05, // Adjust the delay to speed up or slow down the effect.
    },
  },
};

// Letter variants: each letter fades in.
const letterVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Index: React.FC = () => {
  const inviteText =
    'Hi Amandine and Max, we are Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quia ullam tenetur iste eius repellat aliquid sed pariatur.';
  // Split the text into individual letters.
  const letters = inviteText.split('');

  return (
    <DefaultPageSection className="min-h-screen bg-[#f3eee8] flex flex-col items-center justify-center pt-[10rem] pb-[10rem] relative">
      <div className="text-center flex relative justify-center items-center">
        <div className="text-[6vw] max-w-[85%] sm:text-[5vw] sm:max-w-[80%] lg:text-[4vw] lg:max-w-[60%] leading-[1.4]">
          <motion.h1
            className="relative inline-block"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }} // Triggers the animation when 50% in view, only once.
          >
            {letters.map((letter, index) => (
              <motion.span key={index} variants={letterVariants} className="inline-block">
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </motion.h1>
        </div>
      </div>
    </DefaultPageSection>
  );
};

export default Index;
