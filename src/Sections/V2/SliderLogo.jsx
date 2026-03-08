import React from 'react';

import brand1 from '../../assets/brands/LOGO-1.png';
import brand2 from '../../assets/brands/LOGO-2.png';
import brand3 from '../../assets/brands/LOGO-3.png';
import brand4 from '../../assets/brands/LOGO-4.png';
import brand5 from '../../assets/brands/LOGO-5.png';

const logos = [
    { src: brand1, alt: "Brand 1" },
    { src: brand2, alt: "Brand 2" },
    { src: brand3, alt: "Brand 3" },
    { src: brand4, alt: "Brand 4" },
    { src: brand5, alt: "Brand 5" },
];

// Duplicate to ensure a seamless infinite loop
const extendedLogos = [...logos, ...logos, ...logos, ...logos];
const shadowColors = ['#D946EF', '#2DD4BF', '#F97316', '#FBBF24', '#6D28D9'];

const SliderLogo = () => {
    return (
        <section className="relative py-16 border-y-8 border-slate-900 bg-[#FBBF24] overflow-hidden font-sans">
            
            <div 
                className="absolute inset-0 z-0 pointer-events-none opacity-30" 
                style={{ backgroundImage: 'radial-gradient(#0F172A 3px, transparent 3px)', backgroundSize: '32px 32px' }}
            ></div>

            <style>
                {`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    display: flex;
                    width: max-content;
                    animation: marquee 25s linear infinite;
                }
                .slider-wrapper:hover .animate-marquee {
                    animation-play-state: paused;
                }
                `}
            </style>

            <div className="relative z-10 slider-wrapper">
                <div className="animate-marquee gap-6 md:gap-8 px-4">
                    {extendedLogos.map((logo, index) => {
                        const activeColor = shadowColors[index % shadowColors.length];

                        return (
                            <div
                                key={`${logo.alt}-${index}`}
                                className={`flex-shrink-0 flex items-center justify-center bg-white border-4 border-slate-900 rounded-2xl w-40 md:w-56 h-24 md:h-32 p-4 transform cursor-pointer hover:rotate-0 hover:-translate-y-2 hover:z-20 transition-all duration-300`}
                                style={{ boxShadow: `6px 6px 0px ${activeColor}` }}
                            >
                                <img
                                    className="w-full h-full object-contain filter hover:opacity-100 transition-all duration-300"
                                    src={logo.src}
                                    alt={logo.alt}
                                    loading="lazy"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = `https://placehold.co/200x100/FFFFFF/0F172A?text=${logo.alt}`;
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default function App() {
    return <SliderLogo />;
}