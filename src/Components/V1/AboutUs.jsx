import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AboutUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
    }),
  };

  // For text elements sliding up
  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  // For images scaling in
  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };


  // A ref to the main section to track its position
  const sectionRef = useRef(null);
  // useInView hook triggers the animation when the element is in the viewport
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const title = "About Us";

  return (
    <div ref={sectionRef} className="min-h-screen text-white py-24 px-4 overflow-hidden bg-gradient-to-b from-black via-[#360EC0] via-50% to-[#7539DB]">
      <div className="container mx-auto">
        {/* Animated Header Title */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-center mb-16 md:mb-24"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {title.split('').map((char, index) => (
            <motion.span key={index} variants={textVariants} className="inline-block">
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Content Layout: Images on the left, Text on the right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Placeholder Photos */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.div variants={imageVariants}>
              <img
                src="https://picsum.photos/seed/fest2024/600/800"
                alt="Networking at a business summit"
                className="rounded-lg shadow-2xl w-full h-auto object-cover"
              />
            </motion.div>
            <motion.div variants={imageVariants} className="mt-8">
              <img
                src="https://picsum.photos/seed/futurepreneur/600/800"
                alt="Keynote speaker on stage"
                className="rounded-lg shadow-2xl w-full h-auto object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Description Text */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.5, delay: 0.4 }} // Delay to animate after images
          >
            <p className="text-lg md:text-xl leading-relaxed text-gray-300">
              Future Entrepreneur Summit (FESt) is an entrepreneurial seminar where several entrepreneurs and practitioners will present and share their experiences. Participants will learn how they dared to start, collaborate, and develop creative ideas to innovate in their businesses.
            </p>
            <p className="mt-4 text-lg md:text-xl leading-relaxed text-gray-300">
              FESt serves as a forum for sharing the latest entrepreneurial trends that evolve with technology and the Millennial Generation. Featuring resource persons from academic and practitioner circles, we aim to inspire the next wave of innovators and require support from various parties to ensure this event's success.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs