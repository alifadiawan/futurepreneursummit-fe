import React from 'react';

const portfolioData = [
  {
    id: 1,
    title: 'FUTURE ENTREPRENEUR SUMMIT SURABAYA 2025',
    youtubeUrl: 'https://www.youtube.com/embed/QZycyxPV9bo?si=W1pZTzDVFZE917y3',
    tags: ['Surabaya', 'Kapal Api', 'Jeromi Polin'],
  },
  {
    id: 2,
    title: 'FUTURE ENTREPRENEUR SUMMIT JEMBER 2024',
    youtubeUrl: 'https://www.youtube.com/embed/5eaj50YPD8Y?si=yZw6--qU5AdsxuFC',
    tags: ['Pitch Battle', 'Networking', 'Innovation'], // Updated tags to fit context better
  },
  {
    id: 3,
    title: 'Surabaya Creativepreneur Festival 2023',
    youtubeUrl: 'https://www.youtube.com/embed/aCwcJZYmDu0?si=29I9WcK1FirIvKfA',
    tags: ['Creative', 'Festival', 'Workshop'], // Updated tags to fit context better
  },
];

const PortfolioCard = ({ project, index }) => {
  const popColors = ['#D946EF', '#F97316', '#2DD4BF', '#FBBF24', '#6D28D9'];
  const activeColor = popColors[index % popColors.length];
  const rotation = index % 2 === 0 ? 'rotate-1' : '-rotate-1';

  return (
    <div
      className={`bg-white rounded-3xl overflow-hidden border-4 border-slate-900 flex flex-col group hover:-translate-y-2 hover:rotate-0 transition-all duration-300 relative ${rotation}`}
      style={{ boxShadow: `8px 8px 0px ${activeColor}` }}
    >
      <div className="absolute top-2 -right-2 bg-red-500 text-white border-4 border-slate-900 font-black px-4 py-1 rotate-12 z-10 shadow-[4px_4px_0px_#0F172A] uppercase text-xs tracking-widest animate-pulse">
        Rec
      </div>

      <div className="w-full aspect-video border-b-4 border-slate-900 bg-slate-200 relative overflow-hidden shrink-0">
        <iframe
          className="w-full h-full absolute inset-0 z-10"
          src={project.youtubeUrl}
          title={`YouTube video of ${project.title}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="absolute inset-0 z-20 bg-slate-900/10 pointer-events-none group-hover:bg-transparent transition-colors duration-300"></div>
      </div>

      <div className="p-6 flex flex-col flex-grow bg-white">
        <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight leading-tight mb-4">
          {project.title}
        </h3>
        
        {/* Render tags as Brutalist badges */}
        <div className="flex flex-wrap gap-2 mb-6 flex-grow items-start">
          {project.tags && project.tags.map((tag, i) => (
            <span 
              key={i} 
              className="inline-block px-3 py-1 bg-gray-100 border-2 border-slate-900 font-bold text-xs uppercase tracking-widest text-slate-800 shadow-[2px_2px_0px_#0F172A]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto">
          <span
            className="inline-block w-full text-center px-4 py-3 rounded-xl border-4 border-slate-900 text-slate-900 font-black uppercase text-sm transition-colors duration-300 cursor-pointer pointer-events-auto"
            style={{ backgroundColor: 'white' }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = activeColor;
              e.target.style.color = activeColor === '#0F172A' ? 'white' : 'black';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.color = 'black';
            }}
          >
            Watch Video ↗
          </span>
        </div>
      </div>
    </div>
  );
};

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative py-24 border-t-8 border-slate-900 overflow-hidden font-sans bg-[#FDF8F5]"
    >
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(#6D28D9 2px, transparent 2px)',
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="container mx-auto lg:px-24 px-6 relative z-10 max-w-7xl">
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-block px-6 py-2 mb-6 rounded-full bg-[#2DD4BF] text-slate-900 font-black tracking-widest text-sm uppercase border-4 border-slate-900 shadow-[4px_4px_0px_#0F172A] -rotate-2">
            Past Highlights
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 uppercase drop-shadow-[4px_4px_0px_#F97316]">
            Our <span className="text-[#D946EF] underline decoration-8 decoration-[#FBBF24] underline-offset-8">Portfolio</span>
          </h2>
          <p className="mt-8 text-xl text-slate-800 font-bold max-w-2xl bg-white p-4 border-4 border-slate-900 rounded-xl shadow-[4px_4px_0px_#6D28D9] rotate-1">
            A showcase of impactful seminars, events, and entrepreneurial journeys from previous summits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {portfolioData.map((project, index) => (
            <PortfolioCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="inline-flex items-center justify-center bg-[#F97316] text-white font-black text-xl uppercase tracking-wider py-4 px-10 rounded-2xl border-4 border-slate-900 shadow-[8px_8px_0px_#0F172A] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[0px_0px_0px_#0F172A] transition-all duration-200 group">
            Show More
            <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}