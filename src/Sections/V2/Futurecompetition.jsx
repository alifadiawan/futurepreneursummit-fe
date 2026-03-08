import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from '../../Components/V1/Modal';

import natinalcompetition from '../../assets/programs/national_competition-3.png';
import startupfounder from '../../assets/programs/startup_founder.png';
import visioncraft from '../../assets/programs/vision_craft.png';
import futureminds from '../../assets/programs/futureminds.png';
import twibbonchampion from '../../assets/programs/twibbon_champion.png';
import hadiah from '../../assets/20jt.png';

const CompetitionCard = ({ logo, title, description, shadowColor, rotation }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Event Akan Segera Hadir"
                message="Event ini akan segera hadir."
            />
            <motion.div
                whileHover={{ scale: 1.05, y: -5, rotate: 0 }}
                className={`bg-white border-4 border-slate-900 rounded-[2rem] p-6 text-center flex flex-col items-center transform ${rotation} transition-all duration-300 z-10 hover:z-20`}
                style={{ boxShadow: `8px 8px 0px ${shadowColor}` }}
            >
                <div className="p-4 mb-6 bg-gray-100 rounded-2xl border-4 border-slate-900 w-full flex justify-center shadow-inner">
                    <img src={logo} alt={`${title} logo`} className="h-40 w-40 object-contain drop-shadow-md" />
                </div>
                <h3 className="font-black text-2xl text-slate-900 mb-3 uppercase leading-tight tracking-tighter">{title}</h3>
                <p className="text-slate-700 font-bold text-sm mb-8 flex-grow">{description}</p>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="mt-auto w-full rounded-xl border-4 border-slate-900 bg-[#FBBF24] py-3 px-6 font-black text-slate-900 uppercase tracking-widest hover:bg-[#D946EF] hover:text-white transition-colors duration-300"
                >
                    Daftar ↗
                </button>
            </motion.div>
        </>
    );
};

const Futurecompetition = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="kompetisi" className="relative py-24 overflow-hidden bg-[#6D28D9] border-t-8 border-slate-900 font-sans selection:bg-[#FBBF24] selection:text-slate-900">
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20" style={{ backgroundImage: 'radial-gradient(#FFFFFF 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Event Akan Segera Hadir"
                message="Event ini akan segera hadir."
            />

            <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-20">
                    <div className="w-full lg:w-1/2 flex flex-col gap-6 items-start">
                        <div className="inline-block px-6 py-2 rounded-full bg-[#2DD4BF] text-slate-900 font-black tracking-widest text-sm uppercase border-4 border-slate-900 shadow-[4px_4px_0px_#0F172A] -rotate-2">
                            National Competition
                        </div>
                        
                        <img src={natinalcompetition} className="max-w-full w-[450px]" alt="logo_national" />
                        
                        <div className="bg-white border-4 border-slate-900 rounded-2xl shadow-[8px_8px_0px_#F97316] text-slate-800 p-6 md:p-8 text-lg font-bold leading-relaxed rotate-1">
                            Futurepreneur National Competition adalah ajang wirausaha kekinian untuk generasi muda yang mencakup empat kategori seru: kompetisi ide bisnis inovatif, esai inspiratif, poster kreatif, dan twibbon viral. Ayo tunjukkan potensimu!
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full">
                            <button onClick={() => setIsModalOpen(true)} className="w-full sm:w-auto rounded-xl border-4 border-slate-900 bg-white px-8 py-4 text-lg font-black text-slate-900 uppercase shadow-[6px_6px_0px_#0F172A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[0px_0px_0px_#0F172A] transition-all duration-200">
                                Guidebook
                            </button>
                            <button onClick={() => setIsModalOpen(true)} className="w-full sm:w-auto rounded-xl border-4 border-slate-900 bg-[#D946EF] px-8 py-4 text-lg font-black text-white uppercase shadow-[6px_6px_0px_#0F172A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[0px_0px_0px_#0F172A] transition-all duration-200">
                                Daftar Sekarang
                            </button>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 flex justify-center">
                        <img 
                            src={hadiah} 
                            alt="Total Hadiah" 
                            className="w-full max-w-[500px] object-contain border-8 border-slate-900 rounded-[2.5rem] shadow-[16px_16px_0px_#FBBF24] -rotate-3 hover:rotate-0 transition-transform duration-500 bg-white" 
                        />
                    </div>
                </div>

                <div className="mt-32">
                    <div className="text-center mb-16 flex flex-col items-center">
                        <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter drop-shadow-[4px_4px_0px_#0F172A]">
                            Pilih <span className="text-[#FBBF24] underline decoration-8 decoration-[#D946EF] underline-offset-8">Kategorimu</span>
                        </h2>
                        <p className="mt-8 text-lg text-white font-bold max-w-xl bg-slate-900 px-6 py-3 border-4 border-slate-900 rounded-xl shadow-[4px_4px_0px_#2DD4BF] rotate-1">
                            Empat kategori yang akan menguji kreativitas dan inovasimu
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <CompetitionCard
                            logo={startupfounder}
                            title="Startup Founder Clash"
                            description="Presentasikan ide bisnismu dan dapatkan pendanaan"
                            shadowColor="#D946EF"
                            rotation="-rotate-2"
                        />
                        <CompetitionCard
                            logo={visioncraft}
                            title="Visioncraft Poster Challenge"
                            description="Ekspresikan ide cemerlangmu lewat poster dan rebut juara!"
                            shadowColor="#2DD4BF"
                            rotation="rotate-2"
                        />
                        <CompetitionCard
                            logo={futureminds}
                            title="Future Minds Essay"
                            description="Tulis ide terbaikmu dan menangkan kompetisinya!"
                            shadowColor="#F97316"
                            rotation="-rotate-1"
                        />
                        <CompetitionCard
                            logo={twibbonchampion}
                            title="Twibbon Champion Hunt"
                            description="Tunjukkan semangatmu lewat Twibbon dan jadilah inspirasi!"
                            shadowColor="#FBBF24"
                            rotation="rotate-3"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Futurecompetition;