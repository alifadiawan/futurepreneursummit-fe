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
      <nav className="hidden sm:block fixed top-6 inset-x-0 mx-auto px-6 lg:px-8 w-11/12 max-w-7xl h-20 bg-white backdrop-blur-md rounded-full border-4 border-black shadow-xl shadow-purple-900/5 z-50">
        <div className="flex flex-row justify-between items-center h-full">

          <div className="logo flex bg-purple-600 border-2 rounded-full items-center justify-center py-2 px-4 hover:scale-105 transition-transform duration-300">
            <img src={logo} className="w-28" alt="logo" />
          </div>

          <div className="nav-links flex flex-row items-center gap-1 text-sm font-extrabold tracking-wider uppercase text-slate-700">
            <a href="/" className="px-5 py-2.5 rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300">
              Home
            </a>
            <a href="#" className="px-5 py-2.5 rounded-full hover:bg-yellow-500 hover:text-white transition-all duration-300">
              About
            </a>
            <a href="#" className="px-5 py-2.5 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300">
              Events
            </a>
            <a href="#" className="px-5 py-2.5 rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300">
              News
            </a>

            <a href="#" className="ml-4 px-7 py-2.5 rounded-full bg-purple-600 border-2 border-black text-white hover:bg-amber-500 transition-all duration-300">
              Contact
            </a>
          </div>

        </div>
      </nav>

      <section className="hero-section relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white">

        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] sm:w-[200vw] sm:h-[200vw] z-0 -rotate-12"
          style={{
            background: "conic-gradient(from 0deg at 50% 50%, #3b82f6 0deg, #8b5cf6 90deg, #ec4899 180deg, #f59e0b 270deg, #3b82f6 360deg)",
            opacity: 1
          }}
        />

        <div className="absolute inset-0 z-0 backdrop-blur-[100px] sm:backdrop-blur-[150px] bg-white/70" />

        {/* Layer 4: Modern Minimalist Tech Grid Overlay */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#00000008_2px,transparent_2px),linear-gradient(to_bottom,#00000008_2px,transparent_2px)] bg-[size:4rem_4rem]" />

        {/* Logo Container - Clean, static, lag-free */}
        <div className="text-center p-8 relative z-10">
          <img
            src={logo2}
            alt="FEST Logo"
            className="mx-auto lg:max-w-2xl drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)]"
          />
        </div>

        {/* CTA Button - Lightweight CSS transitions only */}
        <div className="relative z-10 mt-4">
          <a
            href="#"
            className="group relative inline-flex items-center justify-center px-10 py-4 bg-white/90 backdrop-blur-xl border-2 border-black rounded-full cursor-pointer overflow-hidden shadow-xl shadow-purple-900/10 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            {/* The colorful hover splash (Still pink/violet, but pops off the white now) */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />

            {/* Button Text */}
            <span className="relative z-10 text-slate-900 font-extrabold tracking-[0.2em] uppercase text-sm sm:text-base group-hover:text-white transition-colors duration-300">
              Register Now
            </span>
          </a>
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section className="relative py-24 px-6 lg:px-24 flex flex-col items-center justify-center overflow-hidden bg-white">

        {/* Layer 1: Static Color Splash (Placed on the right to balance the hero's center gradient) */}
        <div
          className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/4 w-[120vw] h-[120vw] sm:w-[80vw] sm:h-[80vw] z-0"
          style={{
            background: "radial-gradient(circle, #ec4899 0%, #8b5cf6 50%, #3b82f6 100%)",
            opacity: 0.6
          }}
        />

        {/* Layer 2: The Light Frost */}
        <div className="absolute inset-0 z-0 backdrop-blur-[100px] sm:backdrop-blur-[150px] bg-white/80" />

        {/* Layer 3: Tech Grid Overlay */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#00000008_2px,transparent_2px),linear-gradient(to_bottom,#00000008_2px,transparent_2px)] bg-[size:4rem_4rem]" />

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">

          {/* Left Column: Typography & Text */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
            {/* Small Top Badge matching the button styles */}
            <div className="inline-block px-5 py-2 mb-6 rounded-full bg-white border-2 border-black text-purple-600 font-extrabold tracking-widest text-xs uppercase shadow-sm">
              About The Event
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-6 tracking-tight">
              EXPERIENCE THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">MAGIC</span> OF FEST.
            </h2>

            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
              Join thousands of creators, innovators, and music lovers for a celebration of art and technology. We bring together the brightest minds and the loudest beats to create an unforgettable experience that pushes boundaries.
            </p>

            {/* Stats Row */}
            <div className="flex flex-row flex-wrap gap-8 sm:gap-12">
              <div className="flex flex-col">
                <span className="text-4xl sm:text-5xl font-black text-slate-900 mb-1">50+</span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Artists</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl sm:text-5xl font-black text-slate-900 mb-1">3</span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Stages</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl sm:text-5xl font-black text-slate-900 mb-1">10k</span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Attendees</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visuals/Images */}
          <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">

            {/* Main Image Container */}
            <div className="relative z-10 w-full aspect-square sm:aspect-video lg:aspect-square bg-slate-200 border-4 border-black rounded-[2.5rem] overflow-hidden shadow-2xl shadow-purple-900/10 group">
              {/* Replace this src with an actual photo from your event/festival */}
              <img
                src="https://images.unsplash.com/photo-1540039155732-d6824b5ce121?q=80&w=1000&auto=format&fit=crop"
                alt="Festival Crowd"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Colorful overlay that appears when hovered */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/40 to-pink-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>

            {/* Floating Accent Card - Ties into the playful UI of the Navbar */}
            <div className="absolute -bottom-6 -left-6 sm:-bottom-10 sm:-left-10 z-20 bg-yellow-400 border-2 border-black rounded-2xl p-6 shadow-xl hidden sm:block hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-2xl font-black text-black uppercase tracking-wider mb-1">Est. 2024</h3>
              <p className="text-black/80 font-bold text-sm">A new era of festivals</p>
            </div>

            {/* Decorative Dots */}
            <div className="absolute -top-8 -right-8 z-0 w-32 h-32 bg-[radial-gradient(#cbd5e1_3px,transparent_3px)] bg-[size:16px_16px] hidden sm:block opacity-50" />
          </div>

        </div>
      </section>

    </div>
  )
}

export default LandingPageV2
