import React, {useState, useEffect} from 'react';
import {useScroll, useMotionValueEvent} from 'framer-motion';
 
function useControlScrolling() {
    const {scrollYProgress} = useScroll();
    const [scrollSpeed, setScrollSpeed] = useState(283); // lower = slower
    const [reset, setReset] = useState(false);


    useMotionValueEvent(scrollYProgress, 'change', (value) => {
        if(value >= 0 && value <= 0.21)
            setScrollSpeed(283);
        else
            setScrollSpeed(383);
    })

    useEffect(() => {
        const handleWheel = (e) => {
            e.preventDefault();
            const deltaY = e.deltaY;
            const direction = deltaY > 0 ? 1 : -1;
            window.scrollBy({
                top: direction * scrollSpeed,
                behavior: 'smooth'
            });          
        };

        window.addEventListener('wheel', handleWheel, {passive: false})

    }, [scrollSpeed])


    return null
}

export default useControlScrolling;