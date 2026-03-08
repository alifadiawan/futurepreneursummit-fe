import React from 'react';
import { motion } from 'framer-motion';

// Using the same default sponsors for consistency
const defaultSponsors = [
  { src: 'https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg', alt: 'Google Cloud' },
  { src: 'https://cdn.worldvectorlogo.com/logos/microsoft-4.svg', alt: 'Microsoft' },
  { src: 'https://cdn.worldvectorlogo.com/logos/notion-1-1.svg', alt: 'Notion' },
  { src: 'https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg', alt: 'Slack' },
  { src: 'https://cdn.worldvectorlogo.com/logos/amazon-web-services-2.svg', alt: 'AWS' },
  { src: 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg', alt: 'GitHub' },
];


const ImageCarousel = ({ sponsors = defaultSponsors, speed = 80 }) => {
  
  // Create a quadrupled array for a very long, seamless track
  const extendedSponsors = [...sponsors, ...sponsors, ...sponsors, ...sponsors];
  
  const marqueeVariants = {
    animate: {
      // Animate from the start (0%) to the end of the first quarter (-25%)
      x: ['0%', '-25%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: speed,
          ease: 'linear',
        },
      },
    },
  };

  return (
    <div className="w-full py-8 overflow-hidden bg-white">
      <motion.div
        className="flex items-center whitespace-nowrap"
        variants={marqueeVariants}
        animate="animate"
      >
        {extendedSponsors.map((sponsor, index) => (
          <div key={index} className="flex-shrink-0 mx-10">
            <img
              src={sponsor.src}
              alt={sponsor.alt}
              className="h-10 w-auto filter grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ImageCarousel;