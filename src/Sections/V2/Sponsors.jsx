import React from 'react';
import { motion } from 'framer-motion';

// Replace these with your actual import paths
import golda from '../../assets/sponsors/golda.png';
import wardah from '../../assets/sponsors/wardah.png';
import pandalovely from '../../assets/sponsors/pandalovely.png';
import kahf from '../../assets/sponsors/kahf.png';
import miesedap from '../../assets/sponsors/miesedap.png';
import bening from '../../assets/sponsors/bening.png';
import yamaha from '../../assets/sponsors/yamaha.png';
import sponsor20 from '../../assets/sponsors/20.png';
import sponsor21 from '../../assets/sponsors/21.png';
import sponsor22 from '../../assets/sponsors/22.png';
import sponsor23 from '../../assets/sponsors/23.png';
import sponsor24 from '../../assets/sponsors/24.png';
import sponsor25 from '../../assets/sponsors/25.png';
import sponsor26 from '../../assets/sponsors/26.png';

const shadowColors = ['#D946EF', '#2DD4BF', '#F97316', '#FBBF24', '#6D28D9'];

const sponsorsData = [
  { id: 'golda', name: 'Golda', img: golda },
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

export default function Sponsors() {
  return (
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
              transition: { staggerChildren: 0.05 }
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
                  src={sponsor.img}
                  alt={`${sponsor.name} logo`}
                  className="max-w-full max-h-full object-contain filter group-hover:opacity-100 transition-all duration-300"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://placehold.co/200x100/FFFFFF/0F172A?text=${sponsor.name}`;
                  }}
                />

                {/* Floating "VIP" Sticker on Hover */}
                <div className="absolute -bottom-3 -right-3 bg-white text-slate-900 text-[10px] font-black uppercase tracking-widest px-2 py-1 border-2 border-slate-900 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 -rotate-6 shadow-[2px_2px_0px_#F97316]">
                  VIP
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}