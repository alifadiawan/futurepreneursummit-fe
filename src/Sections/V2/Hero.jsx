import React from 'react'

export const Hero = () => {
    return (
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
    )
}
