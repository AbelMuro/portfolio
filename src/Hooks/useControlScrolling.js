import React, {useState, useEffect} from 'react';
import {useScroll, useMotionValueEvent} from 'framer-motion';
 
function useControlScrolling() {
    const {scrollYProgress} = useScroll();
    const [scrollSpeed, setScrollSpeed] = useState(283); // lower = slower


    useMotionValueEvent(scrollYProgress, 'change', (value) => {
        if(value >= 0 && value <= 0.21)
            setScrollSpeed(283);
        else
            setScrollSpeed(383);
    })

    useEffect(() => {
        const handleWheel = (e) => {
            const deltaY = e.deltaY;
            const direction = deltaY > 0 ? 1 : -1;
            window.scrollBy({
                top: direction * scrollSpeed,
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