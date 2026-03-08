import React from 'react'
import { motion } from 'framer-motion';

import bgabout4 from '../../assets/YK-160.jpg';
import BAZAAR from '../../assets/grand-seminar/BAZAAR.webp';
import DOORPRIZE from '../../assets/grand-seminar/DOORPRIZE.webp';
import MUSIK from '../../assets/grand-seminar/MUSIK.webp';
import SEMINAR from '../../assets/grand-seminar/SEMINAR.webp';

const GrandSummit = () => {

    const gridData = [
        { id: 1, imageUrl: BAZAAR, title: 'UMKM Bazaar', text: 'Learn from top industry leaders.', shadowColor: '#D946EF' },
        { id: 2, imageUrl: DOORPRIZE, title: 'Networking Hub', text: 'Connect with fellow founders.', shadowColor: '#2DD4BF' },
        { id: 3, imageUrl: MUSIK, title: 'Pitch Battle', text: 'Watch startups fight for funding.', shadowColor: '#F97316' },
        { id: 4, imageUrl: SEMINAR, title: 'Award Ceremony', text: 'Celebrating the brightest minds.', shadowColor: '#6D28D9' },
    ];

    return (
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
    )
}

export default GrandSummit