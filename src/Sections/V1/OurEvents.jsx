import React from 'react'
import CarouselCard from '../../Components/V1/CarouselCard'
import BG_IMAGE_URL_3 from '../../assets/bg_hiring.png';
import { div } from 'framer-motion/client';
import { motion } from 'framer-motion';

import bandung from '../../assets/bandung.webp';

import jember from '../../assets/assets_banner/JEMBER.webp';
import malang from '../../assets/assets_banner/MALANG.webp';
import purwokerto from '../../assets/assets_banner/PURWOKERTO.webp';
import semarang from '../../assets/assets_banner/SEMARANG.webp';
import solo from '../../assets/assets_banner/SOLO.webp';
import surabay from '../../assets/assets_banner/SURABAY.webp';
import yogyakarta from '../../assets/assets_banner/YOGYAKARTA.webp';

const OurEvents = () => {

  const events = [
  {
    id: 1,
    location: 'Surabaya',
    date: 'Desember 2025',
    title: 'Future Entrepreneur Summit',
    subtitle: 'The Journey of the Gen Z Futurepreneur',
    imageUrl: surabay,
    featured_guest_star: 'Fiki Naki',
  },
  {
    id: 2,
    location: 'Purwokerto',
    date: 'Desember 2025',
    title: 'Future Entrepreneur Summit',
    subtitle: 'The Journey of the Gen Z Futurepreneur',
    imageUrl: purwokerto,
    featured_guest_star: 'Fiki Naki',
  },
  {
    id: 3,
    location: 'Jember',
    date: 'Desember 2025',
    title: 'Future Entrepreneur Summit',
    subtitle: 'The Journey of the Gen Z Futurepreneur',
    imageUrl: jember,
    featured_guest_star: 'Fiki Naki',
  },
  {
    id: 4,
    location: 'Semarang',
    date: 'Desember 2025',
    title: 'Future Entrepreneur Summit',
    subtitle: 'The Journey of the Gen Z Futurepreneur',
    imageUrl: semarang,
    featured_guest_star: 'Fiki Naki',
  },
  {
    id: 5,
    location: 'Malang',
    date: 'Desember 2025',
    title: 'Future Entrepreneur Summit',
    subtitle: 'The Journey of the Gen Z Futurepreneur',
    imageUrl: malang,
    featured_guest_star: 'Fiki Naki',
  },
  {
    id: 6,
    location: 'Solo',
    date: 'Desember 2025',
    title: 'Future Entrepreneur Summit',
    subtitle: 'The Journey of the Gen Z Futurepreneur',
    imageUrl: solo,
    featured_guest_star: 'Fiki Naki',
  },
  {
    id: 7,
    location: 'Yogyakarta',
    date: 'Desember 2025',
    title: 'Future Entrepreneur Summit',
    subtitle: 'The Journey of the Gen Z Futurepreneur',
    imageUrl: yogyakarta,
    featured_guest_star: 'Fiki Naki',
  },
];


  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

  return (
    <section
      className="py-16 md:py-32 relative overflow-hidden"
      id="events"
      style={{
        backgroundImage: `url(${BG_IMAGE_URL_3})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // backgroundAttachment: 'fixed' // Optional: for a parallax effect
      }}
    >
      {/* THEME CHANGE: Added a semi-transparent white overlay to ensure text readability over the background image. */}
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="container mx-auto lg:px-24 px-6 md:px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-block">
            <motion.h2
              // THEME CHANGE: Text is now dark for readability.
              className="text-2xl md:text-3xl font-black text-black tracking-wide"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Our Events Now
            </motion.h2>
            <motion.div
              className="h-1 w-24 bg-gradient-to-r from-purple-400 to-[#FF7700] rounded-full mx-auto mt-2"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>
        </motion.div>

        {/* carousel card */}
        <CarouselCard
          events={events}
        />

      </div>
    </section>

  )
}

export default OurEvents