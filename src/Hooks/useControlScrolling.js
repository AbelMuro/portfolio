import React, {useState, useEffect} from 'react';
import {useScroll, useMotionValueEvent} from 'framer-motion';
 
function useControlScrolling() {
    const {scrollYProgress} = useScroll();
    const [scrollSpeed, setScrollSpeed] = useState(2.6); // lower = slower


    useMotionValueEvent(scrollYProgress, 'change', (value) => {
        if(value >= 0 && value <= 0.21)
            setScrollSpeed(1.7);
        else
            setScrollSpeed(4);
    })

    useEffect(() => {
        return;
        const handleWheel = (e) => {
            const deltaY = e.deltaY;

            window.scrollBy({
                top: deltaY * scrollSpeed,
                behavior: 'auto'
            })                
        };

        window.addEventListener('wheel', handleWheel, { passive: false })

        return () => {
            window.removeEventListener('wheel', handleWheel);
        }

    }, [scrollSpeed])


    return null
}

export default useControlScrolling;