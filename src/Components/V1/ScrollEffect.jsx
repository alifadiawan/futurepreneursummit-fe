import React from 'react'
import { useEffect } from 'react';

const ScrollEffect = () => {
    useEffect(() => {
        let velocity = 0;
        let isTicking = false;

        const onWheel = (e) => {
            e.preventDefault();
            velocity += e.deltaY * 0.2;
            if (!isTicking) {
                requestAnimationFrame(updateScroll);
                isTicking = true;
            }
        };

        const updateScroll = () => {
            window.scrollBy(0, velocity);
            velocity *= 0.9;
            if (Math.abs(velocity) > 0.1) {
                requestAnimationFrame(updateScroll);
            } else {
                velocity = 0;
                isTicking = false;
            }
        };

        window.addEventListener('wheel', onWheel, { passive: false });

        return () => {
            window.removeEventListener('wheel', onWheel);
        };
    }, []);

    return null;
};

export default ScrollEffect