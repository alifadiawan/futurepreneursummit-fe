import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import backgroundImage3 from '../assets/ip.png';
import backgroundImage4 from '../assets/bg-purple.png';

// You can replace this with your own data
const initialItems = [
  { id: 1, title: 'Forest Wanderer', category: 'Illustration', img: backgroundImage3, description: 'A beautiful illustration...' },
  { id: 2, title: 'City at Dusk', category: 'Photography', img: backgroundImage4, description: 'Stunning photograph...' },
  { id: 3, title: 'Abstract Dreams', category: 'Digital Art', img: backgroundImage3, description: 'A colorful and dynamic piece.' },
  // { id: 4, title: 'Mountain Majesty', category: 'Nature', img: backgroundImage3, description: 'The awe-inspiring view...' },
  // { id: 5, title: 'Ocean\'s Breath', category: 'Landscape', img: backgroundImage3, description: 'The calming and powerful waves...' },
];

// Individual Story Item Component
const StoryItem = ({ item, isActive, onImageLoad }) => (
  <div
    className={`
      snap-center flex-shrink-0 
      // CHANGE: Use viewport width for mobile and clamp for desktop
      w-[90vw] md:w-[clamp(600px,80vw,1600px)] 
      // CHANGE: Use a more portrait-friendly aspect ratio for mobile
      aspect-[3/4] md:aspect-[16/9]
      transition-all duration-500 ease-out transform
      rounded-2xl overflow-hidden
      ${isActive ? 'scale-100' : 'scale-95 opacity-50'}
    `}
  >
    <div className="relative w-full h-full bg-black/90">
      <a href="https://www.google.com/" target='_blank' rel="noopener noreferrer">
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-full object-cover transition-opacity duration-300"
          loading="lazy"
          onLoad={onImageLoad}
          onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x800/cccccc/ffffff?text=Image+Not+Found'; }}
        />
        <div className="absolute inset-0 "></div>
      </a>
    </div>
  </div>
);

// Main App Component
export default function App() {
  const [items] = useState(initialItems);
  const [currentIndex, setCurrentIndex] = useState(items.length);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const carouselRef = useRef(null);
  const timeoutRef = useRef(null);
  const isTransitioning = useRef(false);
  const autoScrollRef = useRef(null);

  const infiniteItems = [...items, ...items, ...items];
  const totalImages = items.length;
  const allImagesLoaded = imagesLoaded >= totalImages;

  const handleImageLoad = useCallback(() => {
    setImagesLoaded(prev => prev + 1);
  }, []);

  const scrollToIndexInstant = useCallback((index) => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const itemElement = carousel.children[index];
    if (itemElement) {
      carousel.scrollLeft = itemElement.offsetLeft - (carousel.clientWidth - itemElement.clientWidth) / 2;
    }
  }, []);

  const scrollToIndex = useCallback((index) => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const itemElement = carousel.children[index];
    if (itemElement) {
      itemElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, []);

  const handleNext = useCallback(() => {
    if (isTransitioning.current) return;
    // The scroll handler will update the currentIndex, which will reset the auto-scroll timer
    const newIndex = currentIndex + 1;
    scrollToIndex(newIndex);
  }, [currentIndex, scrollToIndex]);

  const handlePrev = useCallback(() => {
    if (isTransitioning.current) return;
    const newIndex = currentIndex - 1;
    scrollToIndex(newIndex);
  }, [currentIndex, scrollToIndex]);

  const handleInfiniteScroll = useCallback((detectedIndex) => {
    const itemsLength = items.length;
    if (detectedIndex >= items.length * 2) {
      isTransitioning.current = true;
      setTimeout(() => {
        const newIndex = detectedIndex - itemsLength;
        scrollToIndexInstant(newIndex);
        setCurrentIndex(newIndex);
        isTransitioning.current = false;
      }, 100);
      return;
    }
    if (detectedIndex < itemsLength) {
      isTransitioning.current = true;
      setTimeout(() => {
        const newIndex = detectedIndex + itemsLength;
        scrollToIndexInstant(newIndex);
        setCurrentIndex(newIndex);
        isTransitioning.current = false;
      }, 100);
      return;
    }
    setCurrentIndex(detectedIndex);
  }, [items.length, scrollToIndexInstant]);

  // useEffect(() => {
  //   const startAutoScroll = () => {
  //     autoScrollRef.current = setInterval(() => {
  //       handleNext();
  //     }, 4000); // (3000ms = 3 seconds)
  //   };

  //   const stopAutoScroll = () => {
  //     if (autoScrollRef.current) {
  //       clearInterval(autoScrollRef.current);
  //     }
  //   };

  //   // Only start scrolling when all images are loaded
  //   if (allImagesLoaded) {
  //     startAutoScroll();
  //   }

  //   // Add event listeners for pausing on hover
  //   const carouselElement = carouselRef.current;
  //   if (carouselElement) {
  //     carouselElement.addEventListener('mouseenter', stopAutoScroll);
  //     carouselElement.addEventListener('mouseleave', startAutoScroll);
  //   }

  //   // Cleanup function to clear interval and remove listeners on unmount
  //   return () => {
  //     stopAutoScroll();
  //     if (carouselElement) {
  //       carouselElement.removeEventListener('mouseenter', stopAutoScroll);
  //       carouselElement.removeEventListener('mouseleave', startAutoScroll);
  //     }
  //   };
  // }, [allImagesLoaded, handleNext]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (isTransitioning.current) return;

      timeoutRef.current = setTimeout(() => {
        const scrollPortCenter = carousel.scrollLeft + carousel.clientWidth / 2;
        let closestIndex = 0;
        let minDistance = Infinity;
        for (let i = 0; i < infiniteItems.length; i++) {
          const item = carousel.children[i];
          const itemCenter = item.offsetLeft + item.clientWidth / 2;
          const distance = Math.abs(itemCenter - scrollPortCenter);
          if (distance < minDistance) {
            minDistance = distance;
            closestIndex = i;
          }
        }
        handleInfiniteScroll(closestIndex);
      }, 50);
    };
    carousel.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      carousel.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [infiniteItems.length, handleInfiniteScroll]);

  useEffect(() => {
    if (allImagesLoaded && carouselRef.current) {
      scrollToIndexInstant(items.length);
    }
  }, [allImagesLoaded, items.length, scrollToIndexInstant]);

  const getDisplayIndex = (index) => {
    return index % items.length;
  };

  return (
    <div className="min-h-screen w-full font-sans flex flex-col items-center justify-center relative overflow-hidden p-4">
      {!allImagesLoaded && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="flex flex-col items-center space-y-4">
            <svg
              className="w-12 h-12 text-white animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
            <div className="text-white text-xl font-medium animate-pulse tracking-wide">
              Loading Stories...
            </div>
          </div>
        </div>
      )}
      <div className="w-full max-w-[128rem] mx-auto relative flex flex-col items-center justify-center">
        <div className="text-center mb-8 md:mb-12">
          {/* CHANGE: Responsive font sizes */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">Karya & Aksi Terbaru</h1>
          <p className="text-base md:text-lg text-gray-600 mt-2 max-w-2xl mx-auto">
            Event terbaru yang lagi kami sorot
          </p>
        </div>

        <div className="w-full h-[65vh] md:h-[70vh] relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            // CHANGE: Adjust arrow position for mobile vs desktop
            className="flex absolute  left-0 md:left-2 lg:left-[-20px] z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 md:p-3 shadow-md hover:bg-white transition-all duration-200"
            aria-label="Previous Item"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-gray-700" />
          </button>

          {/* Carousel Container */}
          <div
            ref={carouselRef}
            className="flex flex-row flex-nowrap space-x-4 md:space-x-8
                       w-full h-full
                       overflow-x-auto 
                       snap-x snap-mandatory
                       [-webkit-overflow-scrolling:touch] "
            style={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none' }}
          >
            {infiniteItems.map((item, index) => (
              <StoryItem
                key={`${item.id}-${Math.floor(index / items.length)}`}
                item={item}
                isActive={currentIndex % items.length === index % items.length}
                onImageLoad={index < items.length ? handleImageLoad : undefined}
              />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            // CHANGE: Adjust arrow position for mobile vs desktop
            className="flex absolute right-0 md:right-2 lg:right-[-20px] z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 md:p-3 shadow-md hover:bg-white transition-all duration-200"
            aria-label="Next Item"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-gray-700" />
          </button>
        </div>

        {/* Indicator dots */}
        <div className="flex space-x-2 mt-6">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(items.length + index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${getDisplayIndex(currentIndex) === index ? 'bg-gray-800 w-6' : 'bg-gray-400'}`}
              aria-label={`Go to item ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}