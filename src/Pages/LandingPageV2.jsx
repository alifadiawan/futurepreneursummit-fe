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
import PixelTransition from '../Components/PixelTransition';

import golda from '../assets/sponsors/golda.png';
import wardah from '../assets/sponsors/wardah.png';
import pandalovely from '../assets/sponsors/pandalovely.png';
import miesedap from '../assets/sponsors/miesedap.png';
import kahf from '../assets/sponsors/kahf.png';
import bening from '../assets/sponsors/bening.png';
import yamaha from '../assets/sponsors/yamaha.png';

import sponsor20 from '../assets/sponsors/20.png';
import sponsor21 from '../assets/sponsors/21.png';
import sponsor22 from '../assets/sponsors/22.png';
import sponsor23 from '../assets/sponsors/23.png';
import sponsor24 from '../assets/sponsors/24.png';
import sponsor25 from '../assets/sponsors/25.png';
import sponsor26 from '../assets/sponsors/26.png';

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

  const portfolioData = [
    {
      id: 1,
      title: 'FUTURE ENTREPRENEUR SUMMIT SURABAYA 2025',
      youtubeUrl: 'https://www.youtube.com/embed/QZycyxPV9bo?si=W1pZTzDVFZE917y3',
      tags: ['Surabaya', 'Kapal Api', 'Jeromi Polin'],
    },
    {
      id: 2,
      title: 'FUTURE ENTREPRENEUR SUMMIT JEMBER 2024',
      youtubeUrl: 'https://www.youtube.com/embed/5eaj50YPD8Y?si=yZw6--qU5AdsxuFC',
      tags: ['Next.js', 'Firebase', 'D3.js', 'Framer Motion'],
    },
    {
      id: 3,
      title: 'Future Entrepreneur Summit - Surabaya (Surabaya Creativepreneur Festival 2023)',
      youtubeUrl: 'https://www.youtube.com/embed/aCwcJZYmDu0?si=29I9WcK1FirIvKfA',
      tags: ['Gatsby', 'GraphQL', 'Contentful', 'Styled-Components'],
    },
  ];

  const PortfolioCard = ({ project }) => {
    return (
      // Main Container: Removed rounded corners and soft shadows. 
      // Added thick borders, hard offset shadows, and a mechanical "push down" hover state.
      <div className="bg-white border-[6px] border-black flex flex-col h-full shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[12px] hover:translate-y-[12px] transition-all duration-200">

        {/* Video Container: Added a thick black border at the bottom to separate the iframe from the text */}
        <div className="w-full h-48 sm:h-56 border-b-[6px] border-black bg-black">
          <iframe
            className="w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
            src={project.youtubeUrl}
            title={`YouTube video of ${project.title}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Content Area: Replaced soft gray text with stark, black, heavily weighted fonts */}
        <div className="p-6 md:p-8 flex flex-col flex-grow bg-white">

          {/* Title: Uppercase, extra bold, with a thick underline */}
          <h3 className="text-lg md:text-1xl font-black text-black uppercase tracking-tight mb-4 border-b-[4px] border-black pb-2">
            {project.title}
          </h3>

        </div>
      </div>
    );
  };

  return (
    <div className="w-full">
      <nav className="hidden sm:block sticky top-0 px-8 lg:px-24 w-full h-24 bg-white text-black border-b-[6px] border-black">
        <div className="flex flex-row justify-between items-center h-full">

          {/* NAV LOGO FIX: Swapped bg-zinc-900 for a loud Neobrutalist yellow to match the theme */}
          <div className="logo bg-purple-700 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-2 transform -rotate-2 hover:rotate-0 transition-transform duration-200">
            <img src={logo} className="w-32" alt="logo" />
          </div>

          {/* NAV LINKS FIX: Used bracket notation [5px] to ensure the heavy click animation works properly */}
          <div className="nav-links flex flex-row gap-6 text-lg font-black tracking-wider uppercase">
            <a href="/" className="px-5 py-2 bg-white border-[3px] border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px] hover:bg-purple-400 transition-all">
              Home
            </a>
            <a href="#" className="px-5 py-2 bg-white border-[3px] border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px] hover:bg-yellow-400 transition-all">
              About
            </a>
            <a href="#" className="px-5 py-2 bg-white border-[3px] border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px] hover:bg-orange-400 transition-all">
              Events
            </a>
            <a href="#" className="px-5 py-2 bg-white border-[3px] border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px] hover:bg-red-400 transition-all">
              News
            </a>
            <a href="#" className="px-5 py-2 bg-white border-[3px] border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px] hover:bg-blue-400 transition-all">
              Contact
            </a>
          </div>

        </div>
      </nav>

      <section className="hero-section relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-emerald-400 border-b-[8px] border-black">
        <img src={bgImage} alt="" style={{ display: 'none' }} loading="eager" />

        {/* Background Box */}
        <motion.div
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 14 }}
          // Adjusted the inset so it acts like a framed picture inside the green section
          className="absolute inset-4 sm:inset-12 border-[6px] border-black bg-cover bg-center shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] z-0"
          style={{
            backgroundImage: `url(${bgImage})`,
            willChange: 'transform',
          }}
        >
          <div className="absolute inset-0 bg-blue-500/40 mix-blend-multiply" />
        </motion.div>

        {/* HERO CONTENT FIX: Put the solid background, thick border, and heavy drop shadow BACK onto the logo container! */}
        <motion.div
          initial={{ scale: 0, rotate: -25 }}
          animate={{ scale: 1, rotate: -3 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.3
          }}
          // Added bg-white, borders, and shadows here to make it a brutalist block
          className="relative z-10 bg-white border-[6px] border-black p-8 sm:p-12 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:rotate-0 transition-transform duration-200 cursor-default"
        >
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

      <section
        className="py-16 md:py-32 relative overflow-hidden bg-[#ff90e8] border-b-[8px] border-black font-sans"
      // style={abstractBgStyle} // We are tossing the abstract style in favor of a brutalist solid color
      >
        {/* Harsh, retro checkerboard background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,_#000_25%,_transparent_25%,_transparent_75%,_#000_75%,_#000_100%),_linear-gradient(45deg,_#000_25%,_transparent_25%,_transparent_75%,_#000_75%,_#000_100%)] bg-[size:40px_40px] bg-[position:0_0,_20px_20px] opacity-10 pointer-events-none"></div>

        <div className="container mx-auto lg:px-24 px-6 relative z-10">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="text-center mb-16 md:mb-24"
          >
            {/* Main Title: Enclosed in a massive, tilted white box */}
            <div className="inline-block bg-white border-[6px] border-black px-8 py-4 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform -rotate-2 hover:rotate-1 transition-transform duration-200 cursor-default">
              <h2 className="text-4xl md:text-6xl font-black tracking-widest text-black uppercase">
                Our Portfolio
              </h2>
            </div>

            {/* Subtitle: No more faded gray. Now a stark yellow tag with a heavy border. */}
            <div className="mt-8 flex justify-center">
              <p className="inline-block bg-[#ffde59] text-black font-bold text-base md:text-lg border-[4px] border-black px-6 py-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
                A showcase of impactful seminars, events, and entrepreneurial journeys.
              </p>
            </div>
          </motion.div>

          {/* Portfolio Grid: Increased the gap to accommodate chunky shadows on the cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
            {portfolioData.map((project) => (
              // Note: Ensure your <PortfolioCard /> component matches this aesthetic too!
              <PortfolioCard key={project.id} project={project} />
            ))}
          </div>

          {/* Show More Button: Uncommented, enlarged, and brutalized with heavy physical hover state */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="mt-20 text-center"
          >
            <button className="group inline-flex items-center justify-center bg-[#4ade80] border-[6px] border-black text-black font-black uppercase text-xl py-4 px-10 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[12px] hover:translate-y-[12px] hover:bg-[#ffde59] transition-all duration-200">
              Show More
              {/* Thick, jagged arrow icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 ml-4 border-l-[4px] border-black pl-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </motion.div>
        </div>
      </section>

      <section
        // Replaced the invisible white background with a loud, aggressive red/orange and a thick bottom border
        className="py-16 md:py-24 relative overflow-hidden bg-[#ff5757] border-b-[8px] border-black"
        id="sponsors" // Changed from 'aboutus' to 'sponsors' for semantic accuracy!
      >
        {/* Added a harsh retro dot-grid overlay to give the empty space some texture */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,_#000_3px,_transparent_3px)] bg-[size:24px_24px] opacity-20 pointer-events-none"></div>

        <div className="container mx-auto lg:px-24 px-6 md:px-12 relative z-10">

          {/* Section Title: Snaps in with a spring, sits at a permanent tilt */}
          <motion.div
            initial={{ opacity: 0, y: -50, rotate: -5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 2 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="text-center mb-16 md:mb-24"
          >
            {/* Replaced the gradient underline with a massive yellow sticker-style box */}
            <div className="inline-block bg-[#ffde59] border-[6px] border-black px-10 py-4 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[12px] hover:translate-y-[12px] transition-all duration-200 cursor-default">
              <h2 className="text-3xl md:text-5xl font-black text-black tracking-widest uppercase">
                Our Sponsors
              </h2>
            </div>
          </motion.div>

          {/* Grid Container: 
          Increased the gap to 'gap-6 md:gap-8' so the massive drop shadows don't overlap awkwardly.
        */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-center gap-6 md:gap-8 w-full">

            {/* Sponsor Wrappers: 
            I wrapped your PixelTransition components in heavy white boxes. 
            This ensures the logos have a stark white background to contrast against the red section, 
            and it gives them all the physical "push down" hover physics!
          */}
            <div className="bg-white border-[4px] border-black p-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all duration-200">
              <PixelTransition imageUrl={golda} title="Futurepreneur National Competition" ctaText="More" ctaLink="#" />
            </div>

            <div className="bg-white border-[4px] border-black p-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all duration-200">
              <PixelTransition imageUrl={wardah} title="Futurepreneur Grand Summit Seminar" ctaText="More" ctaLink="#" />
            </div>

            <div className="bg-white border-[4px] border-black p-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all duration-200">
              <PixelTransition imageUrl={pandalovely} title="Futurepreneur Online Webinar Soft Skill" ctaText="More" ctaLink="#" />
            </div>

            <div className="bg-white border-[4px] border-black p-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all duration-200">
              <PixelTransition imageUrl={kahf} title="Futurepreneur Bootcamp Soft Skill Training" ctaText="More" ctaLink="#" />
            </div>

            <div className="bg-white border-[4px] border-black p-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all duration-200">
              <PixelTransition imageUrl={miesedap} title="Futurepreneur International Program" ctaText="More" ctaLink="#" />
            </div>

            <div className="bg-white border-[4px] border-black p-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all duration-200">
              <PixelTransition imageUrl={bening} title="Futurepreneur International Program" ctaText="More" ctaLink="#" />
            </div>

            <div className="bg-white border-[4px] border-black p-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all duration-200">
              <PixelTransition imageUrl={yamaha} title="Futurepreneur International Program" ctaText="More" ctaLink="#" />
            </div>

            <div className="bg-white border-[4px] border-black p-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all duration-200">
              <PixelTransition imageUrl={sponsor20} title="Futurepreneur International Program" ctaText="More" ctaLink="#" />
            </div>

            <div className="bg-white border-[4px] border-black p-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all duration-200">
              <PixelTransition imageUrl={sponsor21} title="Futurepreneur International Program" ctaText="More" ctaLink="#" />
            </div>

            <div className="bg-white border-[4px] border-black p-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all duration-200">
              <PixelTransition imageUrl={sponsor22} title="Futurepreneur International Program" ctaText="More" ctaLink="#" />
            </div>

            <div className="bg-white border-[4px] border-black p-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all duration-200">
              <PixelTransition imageUrl={sponsor23} title="Futurepreneur International Program" ctaText="More" ctaLink="#" />
            </div>

            <div className="bg-white border-[4px] border-black p-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all duration-200">
              <PixelTransition imageUrl={sponsor24} title="Futurepreneur International Program" ctaText="More" ctaLink="#" />
            </div>

            <div className="bg-white border-[4px] border-black p-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all duration-200">
              <PixelTransition imageUrl={sponsor25} title="Futurepreneur International Program" ctaText="More" ctaLink="#" />
            </div>

            <div className="bg-white border-[4px] border-black p-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all duration-200">
              <PixelTransition imageUrl={sponsor26} title="Futurepreneur International Program" ctaText="More" ctaLink="#" />
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}

export default LandingPageV2
