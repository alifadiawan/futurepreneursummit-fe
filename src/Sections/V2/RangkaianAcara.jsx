import React from 'react'
import { motion } from 'framer-motion'

import grandsummit from '../../assets/rangkaian_acara/1.webp';
import nationalcompetition from '../../assets/rangkaian_acara/2.webp';
import webminar from '../../assets/rangkaian_acara/3.webp';
import bootcamp from '../../assets/rangkaian_acara/4.webp';
import internationalprogram from '../../assets/rangkaian_acara/5.webp';

const RangkaianAcara = () => {

    const acaraList = [
        {
            img: grandsummit,
            title: "National Competition",
            cardColor: "bg-[#F97316]",
            shadowColor: "#D946EF",
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

    return (
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
    )
}

export default RangkaianAcara