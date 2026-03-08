import React from 'react';
import { motion } from 'framer-motion';

// Replace these with your actual import paths
import unair from '../../assets/organizations/unair.webp';
import its from '../../assets/organizations/its.webp';
import unesa from '../../assets/organizations/unesa.webp';
import upn from '../../assets/organizations/upn.webp';
import umm from '../../assets/organizations/umm.webp';
import uinsa from '../../assets/organizations/uinsa.webp';

const partners = [
  { id: 1, name: 'UNAIR', img: unair, shadowColor: '#004681', rotation: '-rotate-2' },
  { id: 2, name: 'ITS', img: its, shadowColor: '#82c1e2', rotation: 'rotate-3' },
  { id: 3, name: 'UNESA', img: unesa, shadowColor: '#d4a853', rotation: '-rotate-1' },
  { id: 4, name: 'UPN', img: upn, shadowColor: '#efe700', rotation: 'rotate-2' },
  { id: 5, name: 'UMM', img: umm, shadowColor: '#29156f', rotation: '-rotate-3' },
  { id: 6, name: 'UINSA', img: uinsa, shadowColor: '#003919', rotation: 'rotate-1' },
];

export default function Partners() {
  return (
    <section
      id="partnerships"
      className="relative py-56 px-6 md:px-12 overflow-hidden bg-white border-t-8 border-slate-900 font-sans"
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
          {partners.map((partner) => (
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
                  className="w-full h-full object-contain filter group-hover:scale-110 transition-all duration-300"
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
  );
}