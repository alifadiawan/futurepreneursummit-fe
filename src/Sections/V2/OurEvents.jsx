import React, { useRef } from 'react';
import { motion } from 'framer-motion';

// Replace these with your actual import paths
import surabay from '../../assets/assets_banner/SURABAY.webp';
import purwokerto from '../../assets/assets_banner/PURWOKERTO.webp';
import jember from '../../assets/assets_banner/JEMBER.webp';
import semarang from '../../assets/assets_banner/SEMARANG.webp';
import malang from '../../assets/assets_banner/MALANG.webp';
import solo from '../../assets/assets_banner/SOLO.webp';
import yogyakarta from '../../assets/assets_banner/YOGYAKARTA.webp';

const OurEvents = () => {
    // Re-added the color and shadow properties so the cards actually get their styling
    const events = [
        {
            id: 1,
            location: 'Surabaya',
            date: 'Desember 2025',
            title: 'Future Entrepreneur Summit',
            subtitle: 'The Journey of the Gen Z Futurepreneur',
            imageUrl: surabay,
            featured_guest_star: 'Fiki Naki',
            color: "bg-[#D946EF]",
            shadow: "#6D28D9"
        },
        {
            id: 2,
            location: 'Purwokerto',
            date: 'Desember 2025',
            title: 'Future Entrepreneur Summit',
            subtitle: 'The Journey of the Gen Z Futurepreneur',
            imageUrl: purwokerto,
            featured_guest_star: 'Fiki Naki',
            color: "bg-[#FBBF24]",
            shadow: "#0F172A"
        },
        {
            id: 3,
            location: 'Jember',
            date: 'Desember 2025',
            title: 'Future Entrepreneur Summit',
            subtitle: 'The Journey of the Gen Z Futurepreneur',
            imageUrl: jember,
            featured_guest_star: 'Fiki Naki',
            color: "bg-[#2DD4BF]",
            shadow: "#F97316"
        },
        {
            id: 4,
            location: 'Semarang',
            date: 'Desember 2025',
            title: 'Future Entrepreneur Summit',
            subtitle: 'The Journey of the Gen Z Futurepreneur',
            imageUrl: semarang,
            featured_guest_star: 'Fiki Naki',
            color: "bg-[#F97316]",
            shadow: "#D946EF"
        },
        {
            id: 5,
            location: 'Malang',
            date: 'Desember 2025',
            title: 'Future Entrepreneur Summit',
            subtitle: 'The Journey of the Gen Z Futurepreneur',
            imageUrl: malang,
            featured_guest_star: 'Fiki Naki',
            color: "bg-[#6D28D9]",
            shadow: "#2DD4BF"
        },
        {
            id: 6,
            location: 'Solo',
            date: 'Desember 2025',
            title: 'Future Entrepreneur Summit',
            subtitle: 'The Journey of the Gen Z Futurepreneur',
            imageUrl: solo,
            featured_guest_star: 'Fiki Naki',
            color: "bg-[#D946EF]",
            shadow: "#FBBF24"
        },
        {
            id: 7,
            location: 'Yogyakarta',
            date: 'Desember 2025',
            title: 'Future Entrepreneur Summit',
            subtitle: 'The Journey of the Gen Z Futurepreneur',
            imageUrl: yogyakarta,
            featured_guest_star: 'Fiki Naki',
            color: "bg-[#FBBF24]",
            shadow: "#0F172A"
        },
    ];

    const scrollContainerRef = useRef(null);

    const scroll = (direction) => {
        const container = scrollContainerRef.current;
        if (container) {
            const scrollAmount = container.offsetWidth > 768 ? container.offsetWidth / 3 : container.offsetWidth;
            container.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    // Sub-component for the card
    function BrutalistEventCard({ event }) {
        return (
            <div
                className={`relative h-full flex flex-col p-6 rounded-[2rem] border-4 border-slate-900 bg-white group hover:-translate-y-2 transition-transform duration-300`}
                style={{ boxShadow: `8px 8px 0px ${event.shadow || '#0F172A'}` }}
            >
                {/* Date Badge */}
                <div className="absolute -top-4 -right-4 z-10 bg-[#F97316] text-white font-black uppercase text-xs px-4 py-2 border-4 border-slate-900 rotate-6 shadow-[4px_4px_0px_#0F172A]">
                    {event.date}
                </div>

                {/* Image Container */}
                <div className={`w-full h-fit rounded-xl border-4 border-slate-900 overflow-hidden mb-6 ${event.color || 'bg-gray-200'} p-2 flex items-center justify-center`}>
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
                        style={{ backgroundColor: event.shadow === '#0F172A' ? '#D946EF' : event.shadow }}
                    >
                        View Details
                    </button>
                </div>
            </div>
        );
    }

    return (
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
                                {/* FIX: Changed from <CarouselCard /> to <BrutalistEventCard /> */}
                                <BrutalistEventCard event={event} />
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default OurEvents;