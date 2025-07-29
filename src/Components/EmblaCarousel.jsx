import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import backgroundImage3 from '../assets/ip.png';


// You can replace this with your own data, portrait images work best
const initialItems = [
  {
    id: 1,
    title: 'Forest Wanderer',
    category: 'Illustration',
    img: backgroundImage3,
    description: 'A beautiful illustration of a wanderer in a mystical forest.'
  },
  {
    id: 2,
    title: 'City at Dusk',
    category: 'Photography',
    img: backgroundImage3,
    description: 'Stunning photograph of a vibrant city skyline.'
  },
  {
    id: 3,
    title: 'Abstract Dreams',
    category: 'Digital Art',
    img: backgroundImage3,
    description: 'A colorful and dynamic abstract piece.'
  },
  {
    id: 4,
    title: 'Mountain Majesty',
    category: 'Nature',
    img: backgroundImage3,
    description: 'The awe-inspiring view from a mountain peak.'
  },
  {
    id: 5,
    title: 'Ocean\'s Breath',
    category: 'Landscape',
    img: backgroundImage3,
    description: 'The calming and powerful waves of the ocean.'
  },
];

// Individual Story Item Component
const StoryItem = ({ item, isActive, onImageLoad }) => (
  <div
    className={`
      snap-start md:snap-center flex-shrink-0 
      w-full h-full 
      md:w-[clamp(600px,80vw,1600px)] md:aspect-[16/9]
      transition-all duration-500 ease-out transform
      md:rounded-2xl overflow-hidden
      ${isActive ? 'md:scale-100' : 'md:scale-95 md:opacity-50'}
    `}
  >
    <div className="relative w-full h-full bg-black/90">
      <a href="https://www.google.com/" target='_blank'>
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

      {/* <div className="absolute bottom-0 left-0 p-8 md:p-10 text-white">
        <h3 className="text-3xl md:text-4xl font-bold tracking-tight">{item.title}</h3>
        <p className="text-base md:text-lg text-gray-200 mt-2">{item.category}</p>
      </div> */}
    </div>
  </div>
);

// Main App Component
export default function App() {
  const [items] = useState(initialItems);
  const [currentIndex, setCurrentIndex] = useState(items.length); // Start at first real item
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const carouselRef = useRef(null);
  const timeoutRef = useRef(null);
  const isTransitioning = useRef(false);

  // Create infinite items array by duplicating original items at start and end
  const infiniteItems = [...items, ...items, ...items]; // Triple for smoother infinite effect
  const totalImages = items.length;
  const allImagesLoaded = imagesLoaded >= totalImages;

  const handleImageLoad = useCallback(() => {
    setImagesLoaded(prev => prev + 1);
  }, []);

  // Function to scroll to a specific index without animation (for seamless transitions)
  const scrollToIndexInstant = useCallback((index) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const itemElement = carousel.children[index];
    if (itemElement) {
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        carousel.scrollTop = index * carousel.clientHeight;
      } else {
        carousel.scrollLeft = itemElement.offsetLeft - (carousel.clientWidth - itemElement.clientWidth) / 2;
      }
    }
  }, []);

  // Function to scroll to a specific index with smooth animation
  const scrollToIndex = useCallback((index) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const itemElement = carousel.children[index];
    if (itemElement) {
      itemElement.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }, []);

  const handleNext = () => {
    if (isTransitioning.current) return;
    const newIndex = currentIndex + 1;
    scrollToIndex(newIndex);
  };

  const handlePrev = () => {
    if (isTransitioning.current) return;
    const newIndex = currentIndex - 1;
    scrollToIndex(newIndex);
  };

  // Handle infinite scrolling logic
  const handleInfiniteScroll = useCallback((detectedIndex) => {
    const totalItems = infiniteItems.length;
    const itemsLength = items.length;

    // If we're at the end copies, jump to the beginning copies
    if (detectedIndex >= totalItems - itemsLength) {
      isTransitioning.current = true;
      setTimeout(() => {
        scrollToIndexInstant(detectedIndex - itemsLength);
        setCurrentIndex(detectedIndex - itemsLength);
        isTransitioning.current = false;
      }, 100);
      return;
    }

    // If we're at the beginning copies, jump to the end copies
    if (detectedIndex < itemsLength) {
      isTransitioning.current = true;
      setTimeout(() => {
        scrollToIndexInstant(detectedIndex + itemsLength);
        setCurrentIndex(detectedIndex + itemsLength);
        isTransitioning.current = false;
      }, 100);
      return;
    }

    setCurrentIndex(detectedIndex);
  }, [infiniteItems.length, items.length, scrollToIndexInstant]);

  // Logic to detect which item is in view by listening to scroll events
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (isTransitioning.current) return;

      timeoutRef.current = setTimeout(() => {
        const isMobile = window.innerWidth < 768;
        let newIndex;

        if (isMobile) {
          const { scrollTop, clientHeight } = carousel;
          newIndex = Math.round(scrollTop / clientHeight);
        } else {
          // For desktop, find the item closest to the center of the viewport
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
          newIndex = closestIndex;
        }

        const validIndex = Math.max(0, Math.min(infiniteItems.length - 1, newIndex));
        handleInfiniteScroll(validIndex);
      }, 50); // Reduced delay from 150ms to 50ms
    };

    carousel.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      carousel.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [infiniteItems.length, handleInfiniteScroll]);

  // Initialize scroll position to the first real item
  useEffect(() => {
    if (allImagesLoaded && carouselRef.current) {
      scrollToIndexInstant(items.length);
    }
  }, [allImagesLoaded, items.length, scrollToIndexInstant]);

  // Get the display index for UI purposes (which item in the original array)
  const getDisplayIndex = (index) => {
    return index % items.length;
  };

  return (
    <div className="min-h-screen w-full font-sans flex flex-col items-center justify-center relative overflow-hidden">
      {!allImagesLoaded && (
        <div className="absolute inset-0 bg-black z-50 flex items-center justify-center">
          <div className="text-2xl font-semibold text-white md:text-gray-700">Loading Stories...</div>
        </div>
      )}
      <div className="w-full h-full mx-auto relative flex flex-col items-center justify-center">
        <div className="hidden md:block text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">Highlighted Event</h1>
          <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">
            A showcase of creative work, presented story-style with infinite scrolling.
          </p>
        </div>

        <div className="w-full h-screen md:h-[70vh] relative flex items-center justify-center">
          {/* Left Arrow - Desktop Only */}
          <button
            onClick={handlePrev}
            className="hidden md:flex absolute left-4 lg:left-16 z-10 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-md hover:bg-white transition-all duration-200"
            aria-label="Previous Item"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>

          {/* Carousel Container */}
          <div
            ref={carouselRef}
            className="flex flex-col md:flex-row md:space-x-8 
                       w-full h-full
                       overflow-y-auto md:overflow-x-auto 
                       snap-y snap-mandatory md:snap-x 
                       scroll-smooth
                       md:px-[calc(50%-clamp(150px,15vw,200px))]" // This padding is key to centering
            style={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none' }}
          >
            {infiniteItems.map((item, index) => (
              <StoryItem
                key={`${item.id}-${Math.floor(index / items.length)}`}
                item={item}
                isActive={getDisplayIndex(index) === getDisplayIndex(currentIndex)}
                onImageLoad={index < items.length ? handleImageLoad : undefined}
              />
            ))}
          </div>

          {/* Right Arrow - Desktop Only */}
          <button
            onClick={handleNext}
            className="hidden md:flex absolute right-4 lg:right-16 z-10 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-md hover:bg-white transition-all duration-200"
            aria-label="Next Item"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        {/* Indicator dots - shows which original item is active */}
        <div className="hidden md:flex space-x-2 mt-6">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(items.length + index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${getDisplayIndex(currentIndex) === index
                ? 'bg-gray-800 w-6'
                : 'bg-gray-400'
                }`}
              aria-label={`Go to item ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}