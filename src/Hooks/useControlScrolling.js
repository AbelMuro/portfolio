import React, {useState, useEffect, useRef} from 'react';
import {useScroll, useMotionValueEvent} from 'framer-motion';
 
function useControlScrolling() {
    const [scrollSpeed, setScrollSpeed] = useState(200); 
    const [directionOfScrolling, setDirectionOfScrolling] = useState(1);
    const timeoutRef = useRef();
    const {scrollYProgress} = useScroll();

    useMotionValueEvent(scrollYProgress, 'change', (value) => {
        if(value >= 0 && value <= 0.10)
            setScrollSpeed(200);
        else
            setScrollSpeed(450);
    })
    

    useEffect(() => {
        let stopScrolling = false;

        const smoothScrolling = () => {
            console.log('scroll')
            window.scrollBy(0, directionOfScrolling * scrollSpeed);
        }

        const handleWheel = (e) => {
            e.preventDefault(); 

            if(stopScrolling) return;
            stopScrolling = true;
               
            setDirectionOfScrolling(e.deltaY > 0 ? 1 : -1);
            requestAnimationFrame(smoothScrolling);

            if(timeoutRef.current) 
                clearTimeout(timeoutRef.current);

            timeoutRef.current = setTimeout(() => {
                stopScrolling = false;
            }, 300)
        }

        window.addEventListener('wheel', handleWheel, {passive: false});

        return () => {
            window.removeEventListener('wheel', handleWheel)
        }

    }, [scrollSpeed, directionOfScrolling])


    return null
}

export default useControlScrolling;

/* 
        const handleWheel = (e) => {
            const momentumMouse =  Number.isInteger(e.deltaY);
            if(momentumMouse) return;

            e.preventDefault();    
            setDirectionOfScrolling(e.deltaY > 0 ? 1 : -1);
            requestAnimationFrame(smoothScrolling);
        };
*/