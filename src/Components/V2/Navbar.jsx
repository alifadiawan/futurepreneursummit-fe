import React from 'react'

const Navbar = () => {
    return (
        <nav className="relative z-20 flex items-center justify-between px-6 py-4 mt-6 max-w-7xl mx-auto md:px-8 bg-white border-4 border-slate-900 rounded-full shadow-[8px_8px_0px_#6D28D9]">
            {/* Logo Area (Placeholder for small SVG/PNG) */}
            <div className="flex items-center gap-2 p-2 rounded-xl">
                <img className='max-w-42 invert' src="https://futurepreneursummit-fe.vercel.app/assets/logo--tV6zxvY.png" alt="" />
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-8 font-bold text-slate-800 text-lg uppercase tracking-wide">
                <a href="#about" className="hover:text-[#F97316] transition-colors hover:-translate-y-1 transform duration-200">About</a>
                <a href="#agenda" className="hover:text-[#F97316] transition-colors hover:-translate-y-1 transform duration-200">Agenda</a>
                <a href="#ourevents" className="hover:text-[#F97316] transition-colors hover:-translate-y-1 transform duration-200">Events</a>
                <a href="#speakers" className="hover:text-[#F97316] transition-colors hover:-translate-y-1 transform duration-200">Speakers</a>
            </div>

            {/* Pop CTA Button */}
            <button className="px-8 py-2 rounded-full bg-[#F97316] text-white font-black text-lg border-4 border-slate-900 shadow-[4px_4px_0px_#0F172A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[0px_0px_0px_#0F172A] transition-all duration-200">
                Contact
            </button>
        </nav>
    )
}

export default Navbar