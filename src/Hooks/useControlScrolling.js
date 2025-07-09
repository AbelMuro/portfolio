import React, {useState, useEffect, useRef} from 'react';
import {useScroll, useMotionValueEvent} from 'framer-motion';
 
function useControlScrolling() {
    const [scrollSpeed, setScrollSpeed] = useState(200); 
    const [directionOfScrolling, setDirectionOfScrolling] = useState(1);
    const wheelTimeout = useRef();
    const {scrollYProgress} = useScroll();

    useMotionValueEvent(scrollYProgress, 'change', (value) => {
        if(value >= 0 && value <= 0.10)
            setScrollSpeed(200);
        else
            setScrollSpeed(450);
    })
    

    useEffect(() => {
        const smoothScrolling = () => {
            window.scrollBy(0, directionOfScrolling * scrollSpeed);
        }

        const handleWheel = (e) => {
            e.preventDefault();
            if(wheelTimeout.current) return;
            else
                wheelTimeout.current = setTimeout(() => {
                    wheelTimeout.current = null;
                }, 500)

            setDirectionOfScrolling(e.deltaY > 0 ? 1 : -1);
            requestAnimationFrame(smoothScrolling);
        };

        window.addEventListener('wheel', handleWheel, {passive: false});

        return () => {
            window.removeEventListener('wheel', handleWheel)
        }

    }, [scrollSpeed, directionOfScrolling])


    return null
}

export default useControlScrolling;