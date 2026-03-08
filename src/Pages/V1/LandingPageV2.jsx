import React, { useRef } from 'react'
import logo from '../assets/logo.png'
import { motion } from 'framer-motion'
import logo2 from '../assets/Logo-FEST-LIGHT.png';
import bgImage from '../assets/bg-slider.png';
import CarouselPopUp from '../../Components/V1/EmblaCarousel';

import bgbg2 from '../assets/BG-ORANGE.png';
import bgabout2 from '../assets/about-2.jpeg';
import bgabout3 from '../assets/bg-about-3.webp';
import bgabout4 from '../assets/YK-160.jpg';

import CarouselCard from '../../Components/V1/CarouselCard'
import BG_IMAGE_URL_3 from '../assets/bg_hiring.png';

import jember from '../assets/assets_banner/JEMBER.webp';
import malang from '../assets/assets_banner/MALANG.webp';
import purwokerto from '../assets/assets_banner/PURWOKERTO.webp';
import semarang from '../assets/assets_banner/SEMARANG.webp';
import solo from '../assets/assets_banner/SOLO.webp';
import surabay from '../assets/assets_banner/SURABAY.webp';
import yogyakarta from '../assets/assets_banner/YOGYAKARTA.webp';
import PixelTransition from '../../Components/V1/PixelTransition';
import MAIN_IMAGE_URL from '../assets/programs/grand-summit.png';

import grandsummit from '../assets/rangkaian_acara/1.webp';
import nationalcompetition from '../assets/rangkaian_acara/2.webp';
import webminar from '../assets/rangkaian_acara/3.webp';
import bootcamp from '../assets/rangkaian_acara/4.webp';
import internationalprogram from '../assets/rangkaian_acara/5.webp';

import unair from '../assets/organizations/unair.webp';
import its from '../assets/organizations/its.webp';
import unesa from '../assets/organizations/unesa.webp';
import upn from '../assets/organizations/upn.webp';
import umm from '../assets/organizations/umm.webp';
import uinsa from '../assets/organizations/uinsa.webp';

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

import BAZAAR from '../assets/grand-seminar/BAZAAR.webp';
import DOORPRIZE from '../assets/grand-seminar/DOORPRIZE.webp';
import MUSIK from '../assets/grand-seminar/MUSIK.webp';
import SEMINAR from '../assets/grand-seminar/SEMINAR.webp';

const LandingPageV2 = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      // Scroll by one card width (including gap)
      const scrollAmount = container.offsetWidth > 768 ? container.offsetWidth / 3 : container.offsetWidth;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  function BrutalistEventCard({ event }) {
    return (
      <div
        className={`relative h-full flex flex-col p-6 rounded-[2rem] border-4 border-slate-900 bg-white group hover:-translate-y-2 transition-transform duration-300`}
        style={{ boxShadow: `8px 8px 0px ${event.shadow}` }}
      >
        {/* Date Badge */}
        <div className="absolute -top-4 -right-4 z-10 bg-[#F97316] text-white font-black uppercase text-xs px-4 py-2 border-4 border-slate-900 rotate-6 shadow-[4px_4px_0px_#0F172A]">
          {event.date}
        </div>

        {/* Image Container */}
        <div className={`w-full h-fit rounded-xl border-4 border-slate-900 overflow-hidden mb-6 ${event.color} p-2 flex items-center justify-center`}>
          {/* Placeholder Image */}
          <img
            src={event.imageUrl ?? "https://placehold.co/600x400/FFFFFF/0F172A?text=EVENT"}
            alt={event.title}
            className="w-full h-full object-cover rounded-lg border-2 border-slate-900/10 grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        </div>

        {/* Text Content */}
        <div className="flex-grow flex flex-col">
          <div className="inline-block px-3 py-1 mb-3 rounded-md bg-gray-100 border-2 border-slate-900 font-bold text-xs uppercase tracking-widest text-slate-600 self-start">
            📍 {event.location}
          </div>
          <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tight leading-none mb-4">
            {event.title}
          </h3>

          {/* Brutalist Button */}
          <button className={`mt-auto w-full py-3 rounded-xl border-4 border-slate-900 text-slate-900 font-black uppercase text-lg hover:text-white transition-colors duration-300`}
            style={{ backgroundColor: event.shadow === '#0F172A' ? '#D946EF' : event.shadow }} // Ensuring text contrast
          >
            View Details
          </button>
        </div>
      </div>
    );
  }

  const dataStats = [
    { number: '20+', text: 'Partners' },
    { number: '25,000+', text: 'Attendees' },
    { number: '50+', text: 'Projects' },
    { number: '100+', text: 'Team Members' },
  ];

  const gridData = [
    { id: 1, imageUrl: BAZAAR, title: 'UMKM Bazaar', text: 'Learn from top industry leaders.', shadowColor: '#D946EF' },
    { id: 2, imageUrl: DOORPRIZE, title: 'Networking Hub', text: 'Connect with fellow founders.', shadowColor: '#2DD4BF' },
    { id: 3, imageUrl: MUSIK, title: 'Pitch Battle', text: 'Watch startups fight for funding.', shadowColor: '#F97316' },
    { id: 4, imageUrl: SEMINAR, title: 'Award Ceremony', text: 'Celebrating the brightest minds.', shadowColor: '#6D28D9' },
  ];

  const acaraList = [
    {
      img: grandsummit, // replace with actual variable in your code
      title: "National Competition",
      cardColor: "bg-[#F97316]", // Orange
      shadowColor: "#D946EF",    // Magenta Shadow
      rotation: "-rotate-2",
    },
    {
      img: nationalcompetition,
      title: "Grand Summit Seminar",
      cardColor: "bg-[#D946EF]", // Magenta
      shadowColor: "#6D28D9",    // Purple Shadow
      rotation: "rotate-3",
    },
    {
      img: webminar,
      title: "Online Webinar",
      cardColor: "bg-[#2DD4BF]", // Teal
      shadowColor: "#F97316",    // Orange Shadow
      rotation: "-rotate-1",
    },
    {
      img: bootcamp,
      title: "Bootcamp Training",
      cardColor: "bg-[#FBBF24]", // Yellow
      shadowColor: "#0F172A",    // Dark Shadow
      rotation: "rotate-2",
    },
    {
      img: internationalprogram,
      title: "International Program",
      cardColor: "bg-[#6D28D9]", // Purple
      shadowColor: "#2DD4BF",    // Teal Shadow
      rotation: "-rotate-3",
    }
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

  const PortfolioCard = ({ project, index }) => {
    // Dynamically assign a pop color to each card's shadow based on its index
    const popColors = ['#D946EF', '#F97316', '#2DD4BF', '#FBBF24', '#6D28D9'];
    const activeColor = popColors[index % popColors.length];

    // Slight random rotation for that playful, messy look
    const rotation = index % 2 === 0 ? 'rotate-1' : '-rotate-1';

    return (
      <div
        className={`bg-white rounded-3xl overflow-hidden border-4 border-slate-900 flex flex-col group hover:-translate-y-2 hover:rotate-0 transition-all duration-300 relative ${rotation}`}
        style={{ boxShadow: `8px 8px 0px ${activeColor}` }}
      >
        {/* Playful "REC" Sticker */}
        <div className="absolute top-2 -right-2 bg-red-500 text-white border-4 border-slate-900 font-black px-4 py-1 rotate-12 z-10 shadow-[4px_4px_0px_#0F172A] uppercase text-xs tracking-widest animate-pulse">
          Rec
        </div>

        {/* Video Container */}
        <div className="w-full aspect-video border-b-4 border-slate-900 bg-slate-200 relative overflow-hidden shrink-0">
          <iframe
            className="w-full h-full absolute inset-0"
            src={project.youtubeUrl}
            title={`YouTube video of ${project.title}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          {/* Optional overlay that disappears on hover so the video is clickable, but keeps the thumbnail looking styled initially */}
          <div className="absolute inset-0 bg-slate-900/10 pointer-events-none group-hover:bg-transparent transition-colors duration-300"></div>
        </div>

        {/* Content Area */}
        <div className="p-6 flex flex-col flex-grow bg-white">
          <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight leading-tight mb-3">
            {project.title}
          </h3>
          <p className="text-slate-700 font-bold text-base mb-6 flex-grow">
            {project.description}
          </p>

          {/* Faux Button linking to video / action */}
          <div className="mt-auto">
            <span
              className="inline-block w-full text-center px-4 py-3 rounded-xl border-4 border-slate-900 text-slate-900 font-black uppercase text-sm transition-colors duration-300 cursor-pointer"
              style={{
                backgroundColor: 'white',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = activeColor;
                e.target.style.color = activeColor === '#0F172A' ? 'white' : 'black';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.color = 'black';
              }}
            >
              Watch Video ↗
            </span>
          </div>
        </div>
      </div>
    );
  };

  const defaultEvents = [
    { id: 1, title: "Pitch Perfect", date: "Oct 12, 2025", location: "Main Stage", img: "...", color: "bg-[#D946EF]", shadow: "#6D28D9" },
    { id: 2, title: "Founder Mixer", date: "Oct 13, 2025", location: "VIP Lounge", img: "...", color: "bg-[#FBBF24]", shadow: "#0F172A" },
    { id: 3, title: "Tech Showcase", date: "Oct 14, 2025", location: "Expo Hall", img: "...", color: "bg-[#F97316]", shadow: "#D946EF" },
    { id: 4, title: "Closing Party", date: "Oct 15, 2025", location: "Rooftop", img: "...", color: "bg-[#6D28D9]", shadow: "#2DD4BF" },
  ];

  const defaultPortfolioData = [
    { id: 1, title: 'FES 2024 Highlights', description: 'The grand kickoff and best moments from last year.', youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    { id: 2, title: 'Top Pitch Battle', description: 'Watch the winning startup secure their seed funding.', youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    { id: 3, title: 'Keynote: Future Tech', description: 'Insights on AI and building the next unicorn.', youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  ];

  const partners = [
    { id: 1, name: 'UNAIR', img: unair, shadowColor: '#D946EF', rotation: '-rotate-2' },
    { id: 2, name: 'ITS', img: its, shadowColor: '#2DD4BF', rotation: 'rotate-3' },
    { id: 3, name: 'UNESA', img: unesa, shadowColor: '#F97316', rotation: '-rotate-1' },
    { id: 4, name: 'UPN', img: upn, shadowColor: '#FBBF24', rotation: 'rotate-2' },
    { id: 5, name: 'UMM', img: umm, shadowColor: '#6D28D9', rotation: '-rotate-3' },
    { id: 6, name: 'UINSA', img: uinsa, shadowColor: '#D946EF', rotation: 'rotate-1' },
  ];

  const shadowColors = ['#D946EF', '#2DD4BF', '#F97316', '#FBBF24', '#6D28D9'];

  const sponsorsData = [
    { id: 'golda', name: 'Golda', img: golda }, // Replace string with actual imported variable
    { id: 'wardah', name: 'Wardah', img: wardah },
    { id: 'pandalovely', name: 'Panda Lovely', img: pandalovely },
    { id: 'kahf', name: 'Kahf', img: kahf },
    { id: 'miesedap', name: 'Mie Sedap', img: miesedap },
    { id: 'bening', name: 'Bening', img: bening },
    { id: 'yamaha', name: 'Yamaha', img: yamaha },
    { id: 's20', name: 'Sponsor 20', img: sponsor20 },
    { id: 's21', name: 'Sponsor 21', img: sponsor21 },
    { id: 's22', name: 'Sponsor 22', img: sponsor22 },
    { id: 's23', name: 'Sponsor 23', img: sponsor23 },
    { id: 's24', name: 'Sponsor 24', img: sponsor24 },
    { id: 's25', name: 'Sponsor 25', img: sponsor25 },
    { id: 's26', name: 'Sponsor 26', img: sponsor26 },
  ];

  return (
    <div className="w-full">
      <div className="min-h-screen bg-[#FDF8F5] overflow-hidden relative font-sans selection:bg-[#D946EF] selection:text-white">

        {/* Decorative Background Grid */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20"
          style={{ backgroundImage: 'radial-gradient(#6D28D9 2px, transparent 2px)', backgroundSize: '40px 40px' }}>
        </div>

        {/* Chunky Floating Navbar */}
        <nav className="relative z-20 flex items-center justify-between px-6 py-4 mt-6 max-w-7xl mx-auto md:px-8 bg-white border-4 border-slate-900 rounded-full shadow-[8px_8px_0px_#6D28D9]">
          {/* Logo Area (Placeholder for small SVG/PNG) */}
          <div className="flex items-center gap-2 p-2 rounded-xl">
            <img className='max-w-42 invert' src="https://futurepreneursummit-fe.vercel.app/assets/logo--tV6zxvY.png" alt="" />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 font-bold text-slate-800 text-lg uppercase tracking-wide">
            <a href="#about" className="hover:text-[#F97316] transition-colors hover:-translate-y-1 transform duration-200">About</a>
            <a href="#tracks" className="hover:text-[#F97316] transition-colors hover:-translate-y-1 transform duration-200">Tracks</a>
            <a href="#speakers" className="hover:text-[#F97316] transition-colors hover:-translate-y-1 transform duration-200">Speakers</a>
            <a href="#agenda" className="hover:text-[#F97316] transition-colors hover:-translate-y-1 transform duration-200">Agenda</a>
          </div>

          {/* Pop CTA Button */}
          <button className="px-8 py-2 rounded-full bg-[#F97316] text-white font-black text-lg border-4 border-slate-900 shadow-[4px_4px_0px_#0F172A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[0px_0px_0px_#0F172A] transition-all duration-200">
            Contact
          </button>
        </nav>

        {/* Hero Section */}
        <main id="hero" className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 pt-20 pb-32 max-w-7xl mx-auto md:px-12">

          {/* Left Content: Text */}
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left z-20">

            {/* Badge */}
            <div className="inline-block px-6 py-2 rounded-full bg-[#D946EF] text-white font-black text-sm md:text-base tracking-widest uppercase border-4 border-slate-900 shadow-[4px_4px_0px_#0F172A] -rotate-2">
              🔥 On Campus Special
            </div>

            {/* Giant Headline */}
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.9] uppercase tracking-tighter">
              Unleash <br />
              Your <span className="text-[#6D28D9] drop-shadow-[4px_4px_0px_#F97316]">Startup</span> <br />
              Potential.
            </h1>

            {/* Placeholder Subtext */}
            <button className="px-8 py-2 rounded-full bg-[#F97316] text-white font-black text-lg border-4 border-slate-900 shadow-[4px_4px_0px_#0F172A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[0px_0px_0px_#0F172A] transition-all duration-200">
              REGISTER
            </button>
          </div>

          {/* Right Content: Logo Visual Anchor */}
          <div className="lg:w-1/2 mt-24 lg:mt-0 relative w-full h-[500px] flex items-center justify-center">

            {/* FES 2025 Logo Placeholder (The Main Circle Visual) */}
            <div className="absolute w-[350px] h-[350px] md:w-150 rotate-8 rounded-full z-10 flex items-center justify-center">
              <img src="https://futurepreneursummit-fe.vercel.app/assets/Logo-FEST-LIGHT-CPXEz6aE.png" alt="" />
            </div>

          </div>
        </main>

      </div>

      {/* ABOUT US SECTION */}
      <section id="about" className="relative min-h-screen py-24 px-6 lg:px-12 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#34d399] via-[#6ee7b7] to-[#99f6e4] border-t-8 border-slate-900 font-sans selection:bg-[#D946EF] selection:text-white">

        {/* Background Decorative Grid */}
        {/* <div className="absolute inset-0 z-0 pointer-events-none opacity-20"
          style={{ backgroundImage: 'radial-gradient(#f97316 2px, transparent 2px)', backgroundSize: '0px 0px' }}>
        </div> */}

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">

          {/* Left Column: Typography & Text */}
          <div className="w-full lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left">

            {/* Pop Badge */}
            <div className="inline-block px-6 py-2 mb-8 rounded-full bg-[#2DD4BF] text-slate-900 font-black tracking-widest text-sm uppercase border-4 border-slate-900 shadow-[4px_4px_0px_#0F172A] -rotate-2 hover:rotate-0 transition-transform duration-300">
              About The Event
            </div>

            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-[1] mb-8 uppercase tracking-tighter">
              Experience <br /> The <span className="text-[#F97316] drop-shadow-[4px_4px_0px_#6D28D9]">Summit.</span>
            </h2>

            <p className="text-xl text-slate-800 mb-10 leading-snug font-bold max-w-xl bg-white p-6 border-4 border-slate-900 shadow-[6px_6px_0px_#D946EF] rounded-2xl">
              Join thousands of student founders, innovators, and industry leaders for a celebration of tech and business. We bring together the brightest minds to create an unforgettable experience that pushes boundaries.
            </p>

            {/* Chunky Stats Row */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 w-full max-w-xl">
              {/* Stat 1 */}
              <div className="flex flex-col items-center justify-center p-4 bg-[#FBBF24] border-4 border-slate-900 rounded-2xl shadow-[4px_4px_0px_#0F172A] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#0F172A] transition-all duration-200">
                <span className="text-4xl sm:text-5xl font-black text-slate-900 mb-1">50+</span>
                <span className="text-xs sm:text-sm font-black text-slate-800 uppercase tracking-widest">Speakers</span>
              </div>
              {/* Stat 2 */}
              <div className="flex flex-col items-center justify-center p-4 bg-[#D946EF] border-4 border-slate-900 rounded-2xl shadow-[4px_4px_0px_#0F172A] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#0F172A] transition-all duration-200">
                <span className="text-4xl sm:text-5xl font-black text-white mb-1">3</span>
                <span className="text-xs sm:text-sm font-black text-white uppercase tracking-widest">Stages</span>
              </div>
              {/* Stat 3 */}
              <div className="flex flex-col items-center justify-center p-4 bg-[#6D28D9] border-4 border-slate-900 rounded-2xl shadow-[4px_4px_0px_#0F172A] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#0F172A] transition-all duration-200">
                <span className="text-4xl sm:text-5xl font-black text-white mb-1">10k</span>
                <span className="text-xs sm:text-sm font-black text-white uppercase tracking-widest">Attendees</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visuals/Images */}
          <div className="w-full lg:w-1/2 relative mt-16 lg:mt-0 flex justify-center">

            {/* Main Image Container - Chunky & Playful */}
            <div className="relative z-10 w-[90%] sm:w-[80%] lg:w-full aspect-square sm:aspect-video lg:aspect-square bg-white border-8 border-slate-900 rounded-[3rem] overflow-hidden shadow-[16px_16px_0px_#6D28D9] group transform rotate-2 hover:rotate-0 transition-transform duration-500">
              {/* Note: make sure bgabout2 is defined in your actual file */}
              <img
                src={bgabout2}
                alt="Summit Crowd"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Brutalist Image Overlay */}
              <div className="absolute inset-0 bg-[#F97316] mix-blend-multiply opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" />
            </div>

            {/* Floating Accent Card */}
            <div className="absolute -bottom-8 -left-4 sm:-bottom-12 sm:-left-8 z-20 bg-[#FBBF24] border-4 border-slate-900 rounded-2xl p-6 shadow-[8px_8px_0px_#D946EF] hidden sm:block hover:-translate-y-2 transition-transform duration-300 -rotate-6">
              <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-1">Est. 2025</h3>
              <p className="text-slate-800 font-bold text-sm uppercase tracking-wide">A New Era of Founders</p>
            </div>

            {/* Floating 3D Decoration Shapes */}
            <div className="absolute -top-10 -right-6 z-20 w-24 h-24 rounded-full bg-gradient-to-br from-[#2DD4BF] to-[#0D9488] border-4 border-slate-900 shadow-[inset_-8px_-8px_16px_rgba(0,0,0,0.3),_6px_6px_0px_#F97316] animate-[bounce_4s_infinite]" />
            <div className="absolute bottom-20 -right-10 z-0 w-20 h-20 bg-[#D946EF] border-4 border-slate-900 shadow-[6px_6px_0px_#0F172A] rotate-45" />

          </div>

        </div>
      </section>

      {/* rangkaian acara */}
      <section
        id="rangkaian-acara"
        className="relative py-24 px-6 md:px-12 overflow-hidden bg-white border-t-8 border-slate-900 font-sans"
      >
        {/* Playful Background Dots */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-30"
          style={{ backgroundImage: 'radial-gradient(#CBD5E1 3px, transparent 3px)', backgroundSize: '32px 32px' }}>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">

          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16 flex flex-col items-center"
          >
            {/* Brutalist Badge */}
            <div className="inline-block px-6 py-2 mb-6 rounded-full bg-[#D946EF] text-white font-black tracking-widest text-sm uppercase border-4 border-slate-900 shadow-[4px_4px_0px_#0F172A] rotate-2">
              The Agenda
            </div>

            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter uppercase drop-shadow-[4px_4px_0px_#FBBF24]">
              Rangkaian <span className="text-[#6D28D9] underline decoration-8 decoration-[#2DD4BF] underline-offset-8">Acara</span>
            </h2>
          </motion.div>

          {/* Event Cards Grid */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 md:gap-10 w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 }
              }
            }}
          >
            {acaraList.map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 12 } }
                }}
                whileHover={{ scale: 1.05, rotate: 0, zIndex: 20 }}
                className={`w-full max-w-[280px] sm:max-w-[300px] flex flex-col p-4 rounded-3xl border-4 border-slate-900 bg-white shadow-[8px_8px_0px_${item.shadowColor}] transform ${item.rotation} transition-all duration-300 cursor-pointer group`}
              >
                {/* Image Container with Pop Color */}
                <div className={`w-full h-48 rounded-2xl border-4 border-slate-900 overflow-hidden ${item.cardColor} p-2 flex items-center justify-center relative`}>

                  {/* Overlay effect on hover */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />

                  <img
                    src={item.img} // replace with actual image variable
                    alt={item.title}
                    decoding="async"
                    loading="lazy"
                    className="w-full h-full object-cover rounded-xl border-2 border-slate-900/20 bg-white shadow-inner"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://placehold.co/320x192/FFFFFF/0F172A?text=Image+Not+Found';
                    }}
                  />
                </div>

                {/* Text Content */}
                <div className="mt-6 mb-2 text-center px-2">
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 uppercase leading-tight tracking-tight">
                    {item.title}
                  </h3>
                </div>

                {/* Dummy "More" Button */}
                <div className="mt-auto pt-4 flex justify-center">
                  <span className="text-sm font-extrabold text-slate-500 uppercase tracking-widest group-hover:text-[#F97316] transition-colors">
                    Details →
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      <motion.section
        id="grand-summit"
        className="relative py-24 px-6 md:px-12 w-full overflow-hidden bg-[#FBBF24] border-t-8 border-slate-900 font-sans"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Playful Background Tech Grid */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40"
          style={{ backgroundImage: 'linear-gradient(#0F172A 2px, transparent 2px), linear-gradient(90deg, #0F172A 2px, transparent 2px)', backgroundSize: '60px 60px' }}>
        </div>

        <div className="container max-w-7xl mx-auto flex flex-col items-center relative z-10">

          {/* Section Title & Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center mb-12 text-center"
          >
            <div className="inline-block px-8 py-2 mb-6 rounded-full bg-white text-slate-900 font-black tracking-widest text-lg uppercase border-4 border-slate-900 shadow-[6px_6px_0px_#D946EF] -rotate-2">
              The Main Event
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-slate-900 uppercase tracking-tighter drop-shadow-[4px_4px_0px_#FFFFFF]">
              Grand <span className="text-[#6D28D9] drop-shadow-[4px_4px_0px_#FFFFFF]">Summit</span>
            </h2>
          </motion.div>

          {/* Main Image Container - Chunky & Rotated */}
          <motion.div
            className="w-full max-w-5xl my-8 rounded-[2.5rem] bg-white border-8 border-slate-900 shadow-[16px_16px_0px_#6D28D9] overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500 relative group p-2"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            {/* Decorative Corner Tape/Badge */}
            <div className="absolute top-6 -left-10 bg-[#D946EF] text-white font-black uppercase py-2 px-12 -rotate-45 border-y-4 border-slate-900 shadow-xl z-20">
              Epic Stage
            </div>

            <img
              loading="lazy"
              src={bgabout4} 
              alt="Grand Summit main visual"
              className="w-full h-[100px] md:h-[400px] object-cover rounded-[1.8rem] border-4 border-slate-900 group-hover:scale-105 transition-transform duration-700"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/1200x600/FFCCBC/424242?text=Image+Not+Found'; }}
            />
          </motion.div>

          {/* 4x2 Grid Section (Refactored to Brutalist Cards) */}
          <div className="w-full max-w-6xl mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {gridData.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="bg-white border-4 border-slate-900 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 cursor-pointer group"
                  style={{ boxShadow: `8px 8px 0px ${item.shadowColor || '#F97316'}` }}
                >
                  {/* Custom GridItem Content Replacement */}
                  <div className="w-full sm:w-1/3 h-40 sm:h-auto rounded-xl border-4 border-slate-900 overflow-hidden shrink-0 bg-gray-100">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover transition-all duration-300"
                      onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/300x300/F97316/FFFFFF?text=PIC'; }}
                    />
                  </div>

                  <div className="flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight mb-3">
                      {item.title}
                    </h3>
                    <p className="text-slate-700 font-bold text-lg leading-snug mb-4">
                      {item.text}
                    </p>

                    {/* Brutalist Arrow/Link */}
                    <div className="mt-auto">
                      <span className="inline-flex items-center justify-center w-12 h-12 rounded-full border-4 border-slate-900 bg-[#FBBF24] text-slate-900 font-black group-hover:bg-[#D946EF] group-hover:text-white transition-colors">
                        →
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </motion.section>

      <section
        id="events"
        className="py-24 relative overflow-hidden bg-[#2DD4BF] border-t-8 border-slate-900 font-sans selection:bg-[#FBBF24] selection:text-slate-900"
      >
        {/* Playful Plus-Sign Pattern Background */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-30"
          style={{ backgroundImage: 'radial-gradient(#0F172A 2px, transparent 2px)', backgroundSize: '30px 30px' }}
        ></div>

        <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">

          {/* Section Header & Navigation Arrows Area */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">

            {/* Title Area */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-left"
            >
              <div className="inline-block px-6 py-2 mb-4 rounded-full bg-[#FBBF24] text-slate-900 font-black tracking-widest text-sm uppercase border-4 border-slate-900 shadow-[4px_4px_0px_#0F172A] -rotate-2">
                Happening Now
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter uppercase drop-shadow-[4px_4px_0px_#FFFFFF]">
                Our <span className="text-[#6D28D9] drop-shadow-[4px_4px_0px_#FFFFFF]">Events</span>
              </h2>
            </motion.div>

            {/* Brutalist Arrow Controls */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <button
                onClick={() => scroll('left')}
                className="w-14 h-14 flex items-center justify-center rounded-xl bg-white border-4 border-slate-900 shadow-[4px_4px_0px_#F97316] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[0px_0px_0px_#F97316] hover:bg-[#F97316] hover:text-white transition-all duration-200 text-3xl font-black text-slate-900"
              >
                ←
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-14 h-14 flex items-center justify-center rounded-xl bg-white border-4 border-slate-900 shadow-[4px_4px_0px_#D946EF] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[0px_0px_0px_#D946EF] hover:bg-[#D946EF] hover:text-white transition-all duration-200 text-3xl font-black text-slate-900"
              >
                →
              </button>
            </motion.div>
          </div>

          {/* Carousel Container */}
          <div className="relative w-full">
            {/* Added py-8 so the bottom and top shadows of the cards aren't clipped by overflow-hidden.
            Added standard tailwind classes to hide scrollbars.
          */}
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth pb-12 pt-4 px-2 -mx-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {events.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.1 }}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4 snap-center md:snap-start"
                >
                  <BrutalistEventCard event={event} />
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <section
        id="portfolio"
        className="relative py-24 border-t-8 border-slate-900 overflow-hidden font-sans bg-[#FDF8F5]"
      >
        {/* Playful Blueprint Background Grid */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: 'radial-gradient(#6D28D9 2px, transparent 2px)',
            backgroundSize: '40px 40px'
          }}
        ></div>

        <div className="container mx-auto lg:px-24 px-6 relative z-10 max-w-7xl">

          {/* Section Header */}
          <div className="text-center mb-16 flex flex-col items-center">
            <div className="inline-block px-6 py-2 mb-6 rounded-full bg-[#2DD4BF] text-slate-900 font-black tracking-widest text-sm uppercase border-4 border-slate-900 shadow-[4px_4px_0px_#0F172A] -rotate-2">
              Past Highlights
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 uppercase drop-shadow-[4px_4px_0px_#F97316]">
              Our <span className="text-[#D946EF] underline decoration-8 decoration-[#FBBF24] underline-offset-8">Portfolio</span>
            </h2>
            <p className="mt-8 text-xl text-slate-800 font-bold max-w-2xl bg-white p-4 border-4 border-slate-900 rounded-xl shadow-[4px_4px_0px_#6D28D9] rotate-1">
              A showcase of impactful seminars, events, and entrepreneurial journeys from previous summits.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {portfolioData.map((project, index) => (
              <PortfolioCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* Brutalist Show More Button */}
          <div className="mt-20 text-center">
            <button className="inline-flex items-center justify-center bg-[#F97316] text-white font-black text-xl uppercase tracking-wider py-4 px-10 rounded-2xl border-4 border-slate-900 shadow-[8px_8px_0px_#0F172A] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[0px_0px_0px_#0F172A] transition-all duration-200 group">
              Show More
              <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>
      </section>

      <section
        id="partnerships"
        className="relative py-24 px-6 md:px-12 overflow-hidden bg-white border-t-8 border-slate-900 font-sans"
      >
        {/* Playful Blueprint Background Grid */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: 'linear-gradient(#CBD5E1 2px, transparent 2px), linear-gradient(90deg, #CBD5E1 2px, transparent 2px)',
            backgroundSize: '40px 40px'
          }}
        ></div>

        <div className="container mx-auto max-w-7xl relative z-10">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16 flex flex-col items-center"
          >
            {/* Brutalist Badge */}
            <div className="inline-block px-6 py-2 mb-6 rounded-full bg-[#FBBF24] text-slate-900 font-black tracking-widest text-sm uppercase border-4 border-slate-900 shadow-[4px_4px_0px_#0F172A] -rotate-2">
              Collaborators
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter drop-shadow-[4px_4px_0px_#2DD4BF]">
              Our Organization <br className="hidden md:block" />
              <span className="text-[#6D28D9] underline decoration-8 decoration-[#F97316] underline-offset-8">Partners</span>
            </h2>
          </motion.div>

          {/* Partners Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 justify-center items-center w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
          >
            {partners.map((partner, index) => (
              <motion.div
                key={partner.id}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
                }}
                // Straightens out and pushes down slightly on hover (the "button press" effect)
                whileHover={{ scale: 1.05, rotate: 0, x: 2, y: 2, zIndex: 10 }}
                className={`relative bg-white border-4 border-slate-900 rounded-2xl p-6 flex items-center justify-center aspect-square transform ${partner.rotation} cursor-pointer group transition-all duration-200`}
                style={{
                  // Using standard CSS shadow so we can easily override it on hover via Framer Motion
                  boxShadow: `6px 6px 0px ${partner.shadowColor}`
                }}
                onHoverStart={(e) => {
                  e.currentTarget.style.boxShadow = `0px 0px 0px ${partner.shadowColor}`;
                }}
                onHoverEnd={(e) => {
                  e.currentTarget.style.boxShadow = `6px 6px 0px ${partner.shadowColor}`;
                }}
              >
                {/* Image Container */}
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={partner.img}
                    alt={`${partner.name} logo`}
                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300"
                    // Fallback for missing images
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://placehold.co/200x200/FFFFFF/0F172A?text=${partner.name}`;
                    }}
                  />
                </div>

                {/* Faux tooltip/badge that appears on hover */}
                <div className="absolute -top-4 -right-4 bg-[#0F172A] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 border-2 border-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 rotate-12 shadow-lg">
                  Partner
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      <section
        id="sponsors"
        className="relative py-24 px-6 md:px-12 overflow-hidden bg-[#FDF8F5] border-t-8 border-slate-900 font-sans"
      >
        {/* Playful Diagonal Stripe Background */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #0F172A, #0F172A 2px, transparent 2px, transparent 16px)',
          }}
        ></div>

        <div className="container mx-auto max-w-7xl relative z-10">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16 flex flex-col items-center"
          >
            {/* Brutalist Tag */}
            <div className="inline-block px-6 py-2 mb-6 rounded-full bg-[#D946EF] text-white font-black tracking-widest text-sm uppercase border-4 border-slate-900 shadow-[4px_4px_0px_#0F172A] rotate-2">
              Powering The Summit
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter drop-shadow-[4px_4px_0px_#FBBF24]">
              Backed By <br className="hidden md:block" />
              <span className="text-[#6D28D9] underline decoration-8 decoration-[#2DD4BF] underline-offset-8">The Best</span>
            </h2>
          </motion.div>

          {/* Sponsors Grid - Responsive wrapping for 14 items */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 md:gap-6 w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.05 } // Fast stagger for lots of logos
              }
            }}
          >
            {sponsorsData.map((sponsor, index) => {
              const activeColor = shadowColors[index % shadowColors.length];
              const tilt = index % 2 === 0 ? 'rotate-1' : '-rotate-1';

              return (
                <motion.div
                  key={sponsor.id}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 120 } }
                  }}
                  whileHover={{ scale: 1.05, rotate: 0, x: 2, y: 2 }}
                  className={`relative w-[45%] sm:w-[30%] md:w-[22%] lg:w-[18%] bg-white border-4 border-slate-900 rounded-2xl p-4 flex items-center justify-center aspect-[4/3] transform ${tilt} cursor-pointer group transition-all duration-200 z-10 hover:z-20`}
                  style={{
                    boxShadow: `6px 6px 0px ${activeColor}`
                  }}
                  onHoverStart={(e) => {
                    e.currentTarget.style.boxShadow = `0px 0px 0px ${activeColor}`;
                  }}
                  onHoverEnd={(e) => {
                    e.currentTarget.style.boxShadow = `6px 6px 0px ${activeColor}`;
                  }}
                >
                  {/* Logo Image */}
                  <img
                    src={sponsor.img} // Map this to your actual imported image variable
                    alt={`${sponsor.name} logo`}
                    className="max-w-full max-h-full object-contain group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://placehold.co/200x100/FFFFFF/0F172A?text=${sponsor.name}`;
                    }}
                  />

                  {/* Floating "Sponsor" Sticker on Hover */}
                  <div className="absolute -bottom-3 -right-3 bg-white text-slate-900 text-[10px] font-black uppercase tracking-widest px-2 py-1 border-2 border-slate-900 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 -rotate-6 shadow-[2px_2px_0px_#F97316]">
                    VIP
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>

    </div>
  )
}

export default LandingPageV2
