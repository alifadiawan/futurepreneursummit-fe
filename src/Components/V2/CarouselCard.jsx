import React, { useRef } from 'react';
import { motion } from "framer-motion";

const defaultEvents = [
    {
        id: 1,
        location: 'Purwokerto',
        date: '10 Desember',
        title: 'Future Entrepreneur Summit',
        subtitle: 'The Journey of the Gen Z Futurepreneur',
        imageUrl: 'https://placehold.co/600x800/D946EF/FFFFFF?text=Purwokerto',
        featured_guest_star: 'Fiki Naki',
        color: "bg-[#D946EF]",
        shadow: "#6D28D9"
    },
    {
        id: 2,
        location: 'Bandung',
        date: '15 Desember',
        title: 'Future Entrepreneur Summit',
        subtitle: 'The Journey of the Gen Z Futurepreneur',
        imageUrl: 'https://placehold.co/600x800/FBBF24/0F172A?text=Bandung',
        featured_guest_star: 'Fiki Naki',
        color: "bg-[#FBBF24]",
        shadow: "#0F172A"
    },
    {
        id: 3,
        location: 'Jember',
        date: '03 Desember',
        title: 'Future Entrepreneur Summit',
        subtitle: 'The Journey of the Gen Z Futurepreneur',
        imageUrl: 'https://placehold.co/600x800/2DD4BF/0F172A?text=Jember',
        featured_guest_star: 'Fiki Naki',
        color: "bg-[#2DD4BF]",
        shadow: "#F97316"
    },
    {
        id: 4,
        location: 'Surabaya',
        date: '22 Desember',
        title: 'Future Entrepreneur Summit',
        subtitle: 'The Journey of the Gen Z Futurepreneur',
        imageUrl: 'https://placehold.co/600x800/F97316/FFFFFF?text=Surabaya',
        featured_guest_star: 'Fiki Naki',
        color: "bg-[#F97316]",
        shadow: "#6D28D9"
    },
];

const Arrow = ({ direction, onClick }) => (
    <button
        onClick={onClick}
        className={`absolute top-1/2 -translate-y-1/2 ${direction === 'left' ? '-left-2 md:-left-6' : '-right-2 md:-right-6'} z-20 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-white border-4 border-slate-900 shadow-[4px_4px_0px_#0F172A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[0px_0px_0px_#0F172A] hover:bg-[#D946EF] hover:text-white transition-all duration-200 text-slate-900 rounded-xl`}
        aria-label={direction === 'left' ? 'Previous' : 'Next'}
    >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8 font-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
            {direction === 'left' ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            )}
        </svg>
    </button>
);

const EventCard = ({ title, date, location, featured_guest_star, subtitle, imageUrl, shadow = '#0F172A', color = 'bg-[#FBBF24]' }) => {
    const [dateNum, ...dateMonth] = date.split(' ');

    return (
        <div className="flex-shrink-0 w-full h-full pb-4">
            <div 
                className="bg-white border-4 border-slate-900 rounded-[2rem] flex flex-col h-full relative group hover:-translate-y-2 transition-transform duration-300"
                style={{ boxShadow: `8px 8px 0px ${shadow}` }}
            >
                <div className="absolute top-4 right-4 z-10 bg-[#2DD4BF] text-slate-900 border-4 border-slate-900 font-black uppercase text-xs tracking-widest px-4 py-2 rotate-6 shadow-[4px_4px_0px_#0F172A]">
                    Available
                </div>

                <div className={`w-full p-3 border-b-4 border-slate-900 ${color} rounded-t-[1.7rem] relative overflow-hidden shrink-0`}>
                    <div style={{ aspectRatio: '210 / 297' }} className="w-full relative border-4 border-slate-900 rounded-xl overflow-hidden bg-white">
                        <img
                            src={imageUrl}
                            alt={title}
                            className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = 'https://placehold.co/600x800/FFFFFF/0F172A?text=Image+Error';
                            }}
                        />
                    </div>
                </div>

                <div className="p-6 flex flex-col flex-grow bg-white rounded-b-[1.7rem]">
                    <header className="mb-4">
                        <h3 className="font-black text-4xl uppercase tracking-tighter text-slate-900 leading-none">{location}</h3>
                    </header>
                    
                    <div className="flex items-center gap-4 mb-6">
                        <div className="flex flex-col items-center justify-center bg-gray-100 border-4 border-slate-900 rounded-xl min-w-[70px] h-[70px] shadow-[4px_4px_0px_#F97316] -rotate-2">
                            <p className="text-2xl font-black text-slate-900 leading-none">{dateNum}</p>
                            <p className="text-xs font-bold text-slate-700 uppercase tracking-widest">{dateMonth.join(' ')}</p>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-xl font-black text-slate-900 leading-tight uppercase">{title}</h2>
                            <p className="text-sm text-slate-600 font-bold mt-1 leading-snug">{subtitle}</p>
                        </div>
                    </div>

                    <div className="flex-grow"></div>

                    <div className="mb-4 bg-slate-100 py-2 px-3 rounded-lg border-2 border-slate-300 border-dashed text-center">
                        <p className="text-xs font-bold text-slate-600 uppercase">Special Guest</p>
                        <p className="text-base font-black text-[#D946EF]">{featured_guest_star}</p>
                    </div>

                    <a
                        href="/event-detail"
                        className="block w-full text-center bg-white text-slate-900 border-4 border-slate-900 font-black uppercase text-xl py-3 rounded-2xl shadow-[4px_4px_0px_#0F172A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[0px_0px_0px_#0F172A] transition-all duration-200"
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = shadow === '#0F172A' ? '#D946EF' : shadow;
                            e.target.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'white';
                            e.target.style.color = '#0f172a';
                        }}
                    >
                        DAFTAR
                    </a>
                </div>
            </div>
        </div>
    );
};

export default function CarouselCard({ events = defaultEvents }) {
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

    return (
        <div className="flex items-center justify-center font-sans">
            <div className="w-full mx-auto relative px-2">
                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth py-8 -my-8 px-4 -mx-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                >
                    {events.map((event, index) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.1 }}
                            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 px-3 snap-center md:snap-start" 
                        >
                            <EventCard {...event} />
                        </motion.div>
                    ))}
                </div>

                <Arrow direction="left" onClick={() => scroll('left')} />
                <Arrow direction="right" onClick={() => scroll('right')} />
            </div>
        </div>
    );
}