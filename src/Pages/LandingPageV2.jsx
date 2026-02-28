import React from 'react'
import logo from '../assets/logo.png'
import { motion } from 'framer-motion'
import logo2 from '../assets/Logo-FEST-LIGHT.png';
import bgImage from '../assets/bg-slider.png';
import CarouselPopUp from '../Components/EmblaCarousel';

import bgbg2 from '../assets/BG-ORANGE.png';
import bgabout2 from '../assets/about-2.jpeg';
import bgabout3 from '../assets/bg-about-3.webp';
import bgabout4 from '../assets/YK-160.jpg';

import CarouselCard from '../Components/CarouselCard'
import BG_IMAGE_URL_3 from '../assets/bg_hiring.png';

import jember from '../assets/assets_banner/JEMBER.webp';
import malang from '../assets/assets_banner/MALANG.webp';
import purwokerto from '../assets/assets_banner/PURWOKERTO.webp';
import semarang from '../assets/assets_banner/SEMARANG.webp';
import solo from '../assets/assets_banner/SOLO.webp';
import surabay from '../assets/assets_banner/SURABAY.webp';
import yogyakarta from '../assets/assets_banner/YOGYAKARTA.webp';

const LandingPageV2 = () => {

  const dataStats = [
    { number: '20+', text: 'Partners' },
    { number: '25,000+', text: 'Attendees' },
    { number: '50+', text: 'Projects' },
    { number: '100+', text: 'Team Members' },
  ];

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

  return (
    <div className="w-full">
      <nav className="hidden sm:block absolute top-0 px-8 lg:px-24 w-full h-24 bg-white text-black border-b-[6px] border-black z-30">
        <div className="flex flex-row justify-between items-center h-full">

          {/* Neobrutalist Logo Container: Added a harsh shadow and a quirky tilt */}
          <div className="logo bg-zinc-900 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-2 transform -rotate-2 hover:rotate-0 transition-transform duration-200">
            <img src={logo} className="w-32" alt="logo" />
          </div>

          {/* Nav Links: Hard shadows, push-down hover state, and bold text */}
          <div className="nav-links flex flex-row gap-6 text-lg font-black tracking-wider uppercase">
            <a
              href="/"
              className="px-5 py-2 bg-white border-[3px] border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1.25 hover:translate-y-1.25 hover:bg-purple-400 transition-all"
            >
              Home
            </a>
            <a
              href="#"
              className="px-5 py-2 bg-white border-[3px] border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1.25 hover:translate-y-1.25 hover:bg-yellow-400 transition-all"
            >
              About
            </a>
            <a
              href="#"
              className="px-5 py-2 bg-white border-[3px] border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1.25 hover:translate-y-1.25 hover:bg-orange-400 transition-all"
            >
              Events
            </a>
            <a
              href="#"
              className="px-5 py-2 bg-white border-[3px] border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1.25 hover:translate-y-1.25 hover:bg-red-400 transition-all"
            >
              News
            </a>
            <a
              href="#"
              className="px-5 py-2 bg-white border-[3px] border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1.25 hover:translate-y-1.25 hover:bg-blue-400 transition-all"
            >
              Contact
            </a>
          </div>

        </div>
      </nav>

      <section className="hero-section relative mt-5 min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white border-b-[8px] border-black">
        {/* Preload for LCP optimization */}
        <img src={bgImage} alt="" style={{ display: 'none' }} loading="eager" />

        {/* Background: Instead of an edge-to-edge seamless image, we put the image 
      inside a massive, harsh, bordered box that drops in from the top.
    */}
        <motion.div
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 14 }}
          className="absolute inset-4 sm:inset-12 border-[6px] border-black bg-cover bg-center shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] z-0"
          style={{
            backgroundImage: `url(${bgImage})`,
            willChange: 'transform',
          }}
        >
          {/* Overlay: Removed the subtle pulsing gradient. 
          Replaced with a stark color tint that blends harshly with the image. 
        */}
          <div className="absolute inset-0 bg-blue-500/40 mix-blend-multiply" />
        </motion.div>

        {/* Logo/Content container with an aggressive, springy entrance and a permanent tilt */}
        <motion.div
          initial={{ scale: 0, rotate: -25 }}
          animate={{ scale: 1, rotate: -3 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.3
          }}
          className="relative z-10 px-12 py-8 hover:rotate-0 transition-transform duration-200"
        >
          {/* Your logo or headline text goes inside here */}
          <img src={logo2} className="max-w-sm lg:max-w-xl" alt="fest logo" />
        </motion.div>
      </section>


      <section className="hero-section relative min-h-screen py-12 flex flex-col items-center justify-center overflow-hidden bg-emerald-400 border-b-[8px] border-black">
        {/* Preload for LCP optimization */}
        <img src={bgImage} alt="" style={{ display: 'none' }} loading="eager" />

        {/* Background: Replaced the smooth gradient pulse with a stark, retro dot-grid pattern */}
        <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle,_#000_3px,_transparent_3px)] bg-[size:40px_40px] opacity-20 z-0" />

        {/* Logo/Carousel container: Aggressive spring entrance, hard shadow, and a permanent slight tilt */}
        <motion.div
          initial={{ scale: 0, y: -100, rotate: 15 }}
          animate={{ scale: 1, y: 0, rotate: -2 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
            delay: 0.1
          }}
          className="p-4 sm:p-8 bg-white border-[6px] border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] relative z-10 mb-12 hover:rotate-0 transition-transform duration-200"
        >
          {/* Note: Ensure the internal design of CarouselPopUp also has thick borders to match! */}
          <CarouselPopUp />
        </motion.div>

        {/* CTA Container: Removed the soft, constant float. Replaced with an occasional mechanical "twitch" and brutalist button styling */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 20,
            delay: 0.4
          }}
          className="text-center relative z-10"
        >
          <motion.div
            animate={{ rotate: [-2, 2, -2] }}
            transition={{
              duration: 0.4,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "linear",
              repeatDelay: 3 // Waits 3 seconds, twitches, waits 3 seconds
            }}
            className="inline-block bg-[#ffde59] px-10 py-4 border-[4px] border-black text-2xl font-black uppercase tracking-widest shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[8px] hover:translate-y-[8px] hover:bg-pink-400 cursor-pointer transition-all"
          >
            Click Me
          </motion.div>
        </motion.div>

        {/* Particles: Transformed from soft, glowing white dots to chunky, spinning geometric shapes */}
        <div className="absolute inset-0 pointer-events-none z-5 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              // Alternates between pink squares and blue circles, all with thick black borders
              className={`absolute w-10 h-10 border-[4px] border-black ${i % 2 === 0 ? 'bg-pink-500 rounded-none' : 'bg-blue-500 rounded-full'
                }`}
              style={{
                left: `${15 + i * 18}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
              animate={{
                rotate: 360,
                y: [0, -30, 0],
              }}
              transition={{
                rotate: { duration: 4 + i, repeat: Infinity, ease: "linear" },
                y: { duration: 1.5, repeat: Infinity, ease: "circInOut", delay: i * 0.2 }
              }}
            />
          ))}
        </div>
      </section>

      <section
        id="aboutus"
        // Added a harsh pink background color and a mix-blend-mode to aggressively blend your background image
        className="py-16 md:py-28 relative overflow-hidden bg-[#ff90e8] border-b-[8px] border-black"
        style={{
          backgroundImage: `url(${bgbg2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'multiply',
        }}
      >
        <div className="container lg:px-24 px-6 mx-auto relative z-10">

          {/* Header: Transformed into a tilted, solid block like a giant sticker */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="text-center mb-16"
          >
            <h2 className="inline-block px-8 py-4 bg-[#ffde59] text-3xl md:text-5xl font-black text-black tracking-widest uppercase border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-2 hover:rotate-0 transition-transform cursor-default">
              Get To Know Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 items-stretch">
            {/* Left images: Removed soft rounded corners, added polaroid-style borders and slight tilts */}
            <div className="xl:col-span-7 space-y-8">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="bg-white p-2 border-[4px] border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform rotate-1 hover:rotate-0 transition-transform"
              >
                <img
                  src={bgabout2}
                  loading="lazy"
                  alt="FES Event Highlight"
                  className="w-full h-80 object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
              <div className="grid grid-cols-2 gap-6">
                {[bgabout3, bgabout4].map((src, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: idx * 0.1 }}
                    className={`bg-white p-2 border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform ${idx === 0 ? '-rotate-2' : 'rotate-2'} hover:rotate-0 transition-transform`}
                  >
                    <img
                      src={src}
                      loading="lazy"
                      alt="Gallery"
                      className="w-full h-48 object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right text: Built as a massive, heavy card. Replaced soft text with stark black fonts. */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
              className="xl:col-span-5 h-full"
            >
              <div className="bg-white p-8 md:p-10 border-[6px] border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-2xl md:text-4xl font-black mb-6 text-black border-b-[6px] border-black pb-4 uppercase tracking-tight">
                    Our Story Since 2020
                  </h3>
                  <div className="space-y-6 mt-6 text-base md:text-lg text-black font-bold leading-snug">
                    {/* Highlighting the first paragraph in a brutalist block */}
                    <p className="bg-[#bc95d4] p-4 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                      Future Entrepreneur Summit (FESt) is a seminar where entrepreneurs and practitioners share their entrepreneurial journeys, emphasizing creativity, collaboration, and innovation.
                    </p>
                    <p>
                      Featuring speakers from academia and industry, the summit highlights evolving trends in entrepreneurship, supported by various communities to foster growth and innovation.
                    </p>
                    <p>
                      The event also serves as a networking hub for aspiring entrepreneurs, students, and professionals to connect, exchange ideas, and explore potential collaborations.
                    </p>
                  </div>
                </div>
                <div className="pt-8">
                  {/* Brutalist Button Physics */}
                  <button className="w-full sm:w-auto px-8 py-4 bg-[#4ade80] border-[4px] border-black text-black font-black uppercase text-lg shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all">
                    More Information
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats: Each stat gets a loud, random color block and pops onto the screen */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {dataStats.map((item, index) => {
              // Array of loud colors to iterate through
              const colors = ['bg-[#ffde59]', 'bg-[#ff90e8]', 'bg-[#4ade80]', 'bg-[#38bdf8]'];
              return (
                <motion.div
                  key={index}
                  initial={{ scale: 0, rotate: -10 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 250, damping: 15, delay: index * 0.1 }}
                  className={`${colors[index % 4]} p-6 border-[4px] border-black text-center text-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all cursor-default`}
                >
                  <div className="text-4xl mb-2">{item.icon}</div>
                  <div className="text-3xl md:text-5xl font-black">{item.number}</div>
                  <div className="text-sm md:text-base font-bold uppercase tracking-wider mt-2 border-t-[4px] border-black pt-2">
                    {item.text}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section
        className="py-16 md:py-32 relative overflow-hidden bg-[#38bdf8] border-b-[8px] border-black"
        id="events"
        style={{
          backgroundImage: `url(${BG_IMAGE_URL_3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'multiply', // Aggressively blends the image with the blue background
        }}
      >
        {/* THEME CHANGE: Replaced the soft black overlay with a harsh, retro dot-grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,_#000_3px,_transparent_3px)] bg-[size:30px_30px] opacity-20 pointer-events-none"></div>

        <div className="container mx-auto lg:px-24 px-6 md:px-6 relative z-10">

          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: -50, rotate: -5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 2 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }} // Changed from easeOut to a snappy spring
            className="text-center mb-16 md:mb-24"
          >
            {/* THEME CHANGE: Removed the gradient underline. The title is now a giant, heavy, shadowed block. */}
            <div className="inline-block bg-[#ffde59] border-[6px] border-black px-10 py-4 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[12px] hover:translate-y-[12px] transition-all duration-200 cursor-default">
              <h2 className="text-3xl md:text-5xl font-black text-black tracking-widest uppercase">
                Our Events Now
              </h2>
            </div>
          </motion.div>

          {/* carousel card */}
          <CarouselCard
            events={events}
          />

        </div>
      </section>

    </div>
  )
}

export default LandingPageV2
