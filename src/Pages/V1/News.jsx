import React from 'react'
import Guest from '../../Layout/Guest'
import bgImage from '../assets/bg-slider.png';
import { motion } from 'framer-motion';
import { Calendar, User } from 'lucide-react';

const News = () => {

    const articles = [
        {
            title: 'NINONINONOJIIIINII',
            category: 'user',
            created_at: '2025',
            slug: 'awdawd',
            created_at: '2012-2-3'
        },
        {
            title: 'title',
            category: 'another user',
            created_at: '2024',
            slug: 'example-slug',
            created_at: '2012-2-3'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
    };

    const EmptyState = () => (
        <div className="py-24 text-center">
            <h2 className="text-2xl font-semibold text-gray-700">No Articles Found</h2>
            <p className="mt-2 text-gray-500">Please check back later for new updates.</p>
        </div>
    );

    const NewsArticleCard = ({ article, variants }) => (
        <motion.div
            variants={variants}
            className="flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
        >
            {/* Card Image */}
            <div className="relative overflow-hidden">
                <img
                    className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
                    src={`/storage/${article.cover_image}`}
                    alt={article.title}
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://placehold.co/600x400/e2e8f0/94a3b8?text=Image+Not+Found';
                    }}
                />
                <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-purple-400 px-3 py-1 text-xs font-semibold text-gray-800 shadow-md">
                        {article.category}
                    </span>
                </div>
            </div>

            {/* Card Content */}
            <div className="flex flex-grow flex-col p-6">
                <h3 className="mb-3 font-bold text-gray-900 line-clamp-2 transition-colors duration-200 hover:text-emerald-600 text-lg">
                    <a>{article.title}</a>
                </h3>
                <p className="flex-grow text-sm leading-relaxed text-gray-600 line-clamp-3">
                    {article.excerpt}
                </p>

                {/* Card Footer */}
                <div className="mt-auto border-t border-gray-100 pt-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
                                <User className="h-5 w-5 text-gray-500" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-900">{article.user?.name || 'Unknown Author'}</p>
                                <div className="flex items-center space-x-2 text-xs text-gray-500">
                                    <Calendar className="h-3 w-3" />
                                    <span>{new Date(article.created_at).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                </div>
                            </div>
                        </div>
                        <a
                            // href={route('user.news.show', article.slug)}
                            className="rounded-lg bg-purple-400 px-4 py-2 text-sm font-medium text-black shadow-md transition-colors duration-200 hover:bg-purple-500"
                        >
                            Baca
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );

    return (
        <Guest>

            <section className="hero-section relative min-h-[40rem] flex flex-col items-center justify-center overflow-hidden">
                {/* Preload for LCP optimization */}
                <img src={bgImage} alt="" style={{ display: 'none' }} loading="eager" />

                {/* Background with parallax effect */}
                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
                    style={{
                        backgroundImage: `url(${bgImage})`,
                        willChange: 'transform, opacity',
                    }}
                >
                    {/* Dynamic gradient overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2, delay: 0.3 }}
                        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black/90"
                    />

                    {/* Subtle animated grain texture */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.1 }}
                        transition={{ duration: 3, delay: 0.5 }}
                        className="absolute inset-0 opacity-10 mix-blend-overlay"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                        }}
                    />
                </motion.div>

                {/* Main content container */}
                <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

                    {/* Main headline */}
                    <motion.h1
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                    >
                        <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                            Berita & Update.
                        </span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-light leading-relaxed"
                    >
                        Informasi terbaru seputar Futurepreneur Summit: mulai dari pengumuman acara, profil pembicara, hingga cerita inspiratif dari para pelaku industri dan komunitas.

                    </motion.p>

                </div>


            </section>


            <section className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 md:py-16">
                {articles.length > 0 ? (
                    <motion.div
                        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {articles.map((article) => (
                            <NewsArticleCard key={article.id} article={article} variants={itemVariants} />
                        ))}
                    </motion.div>
                ) : (
                    <EmptyState />
                )}
            </section>

        </Guest>

    )
}

export default News