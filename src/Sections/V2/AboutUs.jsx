import React from 'react'
import bgabout2 from '../../assets/about-2.jpeg';

const AboutUs = () => {
    return (
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
    )
}

export default AboutUs