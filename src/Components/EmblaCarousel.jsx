import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Sample images for demo
const bg = 'https://picsum.photos/1600/900?random=1';
const bg2 = 'https://picsum.photos/1600/900?random=2';
const bghp = 'https://picsum.photos/600/800?random=1';

const initialItems = [
  { 
    id: 1, 
    title: 'Forest Wanderer', 
    category: 'Illustration', 
    img: {
      desktop: bg, // 16:9 for desktop
      mobile: bghp    // 3:4 for mobile
    },
    description: 'A beautiful illustration...' 
  },
  { 
    id: 2, 
    title: 'City at Dusk', 
    category: 'Photography', 
    img: {
      desktop: bg2, // 16:9 for desktop
      mobile: 'https://picsum.photos/600/800?random=2'    // 3:4 for mobile
    },
    description: 'Stunning photograph...' 
  },
  { 
    id: 3, 
    title: 'Abstract Dreams', 
    category: 'Digital Art', 
    img: {
      desktop: 'https://picsum.photos/1600/900?random=3', // 16:9 for desktop
      mobile: 'https://picsum.photos/600/800?random=3'    // 3:4 for mobile
    },
    description: 'A colorful and dynamic piece.' 
  },
];

// Individual Story Item Component
const StoryItem = ({ item, isActive, onImageLoad, shouldTrackLoading }) => {
  const imgRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Get the appropriate image source based on device
  const getImageSrc = () => {
    if (typeof item.img === 'string') {
      return item.img; // Fallback for old format
    }
    return isMobile ? item.img.mobile : item.img.desktop;
  };

  const currentImgSrc = getImageSrc();

  // FIX: Handles image loading for cached images, a common issue on iOS/Safari.
  useEffect(() => {
    const img = imgRef.current;
    if (!img || !onImageLoad || !shouldTrackLoading) return;

    const handleLoad = () => {
      onImageLoad(item.id);
    };

    if (img.complete && img.naturalWidth > 0) {
      // Image is already loaded
      handleLoad();
    } else {
      img.addEventListener('load', handleLoad);
    }

    return () => {
      img.removeEventListener('load', handleLoad);
    };
  }, [currentImgSrc, item.id, onImageLoad, shouldTrackLoading]);
  
  return (
    <div
      className={`
      snap-center flex-shrink-0 
      w-[90vw] md:w-[clamp(600px,80vw,1600px)] 
      aspect-[3/4] md:aspect-[16/9]
      transition-all duration-500 ease-out transform
      rounded-2xl overflow-hidden
      ${isActive ? 'scale-100' : 'scale-95 opacity-50'}
    `}
    >
      <div className="relative w-full h-full bg-black/90">
        <a href="https://www.google.com/" target='_blank' rel="noopener noreferrer">
          <img
            ref={imgRef}
            src={currentImgSrc}
            alt={item.title}
            className="w-full h-full object-cover transition-opacity duration-300"
            loading="lazy"
            onError={(e) => { 
              e.target.onerror = null; 
              e.target.src = isMobile 
                ? 'https://placehold.co/600x800/cccccc/ffffff?text=Image+Not+Found' 
                : 'https://placehold.co/1600x900/cccccc/ffffff?text=Image+Not+Found';
            }}
          />
          <div className="absolute inset-0 "></div>
        </a>
      </div>
    </div>
  );
};

// Main App Component
export default function App() {
  const [items] = useState(initialItems);
  const [currentIndex, setCurrentIndex] = useState(items.length);
  const [loadedImageIds, setLoadedImageIds] = useState(new Set());
  const carouselRef = useRef(null);
  const timeoutRef = useRef(null);
  const isTransitioning = useRef(false);

  const infiniteItems = [...items, ...items, ...items];
  const totalImages = items.length;
  const allImagesLoaded = loadedImageIds.size >= totalImages;

  const handleImageLoad = useCallback((imageId) => {
    setLoadedImageIds(prev => new Set([...prev, imageId]));
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
    const newIndex = currentIndex + 1;
    scrollToIndex(newIndex);
  }, [currentIndex, scrollToIndex]);

  const handlePrev = useCallback(() => {
    if (isTransitioning.current) return;
    const newIndex = currentIndex - 1;
    scrollToIndex(newIndex);
  }, [currentIndex, scrollToIndex]);

  // New function to handle clicks on the carousel area
  const handleCarouselClick = useCallback((e) => {
    if (isTransitioning.current) return;
    
    const carousel = carouselRef.current;
    if (!carousel) return;
    
    const rect = carousel.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const carouselWidth = rect.width;
    
    // Define click zones: left 30%, center 40%, right 30%
    const leftZone = carouselWidth * 0.3;
    const rightZone = carouselWidth * 0.7;
    
    if (clickX < leftZone) {
      // Clicked on left side - go to previous
      handlePrev();
    } else if (clickX > rightZone) {
      // Clicked on right side - go to next
      handleNext();
    }
    // Center zone does nothing to allow for other interactions if needed
  }, [handleNext, handlePrev]);

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

  // Add a timeout fallback to hide loading screen after 5 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!allImagesLoaded) {
        console.warn('Images taking too long to load, hiding loading screen');
        setLoadedImageIds(new Set(items.map(item => item.id)));
      }
    }, 5000);

    return () => clearTimeout(timeout);
  }, [allImagesLoaded, items]);

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
            <div className="text-white/70 text-sm">
              {loadedImageIds.size} of {totalImages} images loaded
            </div>
          </div>
        </div>
      )}
      <div className="w-full max-w-[128rem] mx-auto relative flex flex-col items-center justify-center">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">Karya & Aksi Terbaru</h1>
          <p className="text-base md:text-lg text-gray-600 mt-2 max-w-2xl mx-auto">
            Event terbaru yang lagi kami sorot
          </p>
        </div>

        <div className="w-full h-[65vh] md:h-[70vh] relative flex items-center justify-center">
          <button
            onClick={handlePrev}
            className="flex absolute left-0 md:left-2 lg:left-[-20px] z-20 bg-white/80 backdrop-blur-sm rounded-full p-2 md:p-3 shadow-md hover:bg-white transition-all duration-200"
            aria-label="Previous Item"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-gray-700" />
          </button>

          {/* Clickable navigation zones overlay */}
          <div className="absolute inset-0 z-10 flex">
            {/* Left click zone */}
            <div 
              className="w-[30%] h-full cursor-pointer flex items-center justify-start pl-4 group"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handlePrev();
              }}
            >
              <div className="opacity-0 group-hover:opacity-50 transition-opacity duration-200 bg-black/20 rounded-full p-2">
                <ChevronLeft className="h-6 w-6 text-white" />
              </div>
            </div>
            
            {/* Center zone - no click action */}
            <div className="w-[40%] h-full"></div>
            
            {/* Right click zone */}
            <div 
              className="w-[30%] h-full cursor-pointer flex items-center justify-end pr-4 group"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleNext();
              }}
            >
              <div className="opacity-0 group-hover:opacity-50 transition-opacity duration-200 bg-black/20 rounded-full p-2">
                <ChevronRight className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>

          <div
            ref={carouselRef}
            className="flex flex-row flex-nowrap space-x-4 md:space-x-8
                       w-full h-full
                       overflow-x-auto 
                       snap-x snap-mandatory
                       [-webkit-overflow-scrolling:touch]"
            style={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none' }}
          >
            {infiniteItems.map((item, index) => (
              <StoryItem
                key={`${item.id}-${Math.floor(index / items.length)}`}
                item={item}
                isActive={currentIndex % items.length === index % items.length}
                onImageLoad={handleImageLoad}
                shouldTrackLoading={index < items.length}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="flex absolute right-0 md:right-2 lg:right-[-20px] z-20 bg-white/80 backdrop-blur-sm rounded-full p-2 md:p-3 shadow-md hover:bg-white transition-all duration-200"
            aria-label="Next Item"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-gray-700" />
          </button>
        </div>

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