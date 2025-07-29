import React, {useState, useEffect, useRef} from 'react';
import {useScroll, useMotionValueEvent} from 'framer-motion';
 
function useControlScrolling() {
    const [scrollSpeed, setScrollSpeed] = useState(200);        //smaller values = slower scroll
    const timeoutRef = useRef();
    const stopScrolling = useRef(false);
    const {scrollY} = useScroll();

    useMotionValueEvent(scrollY, 'change', (value) => {
        if(value >= 0 && value <= 2000)
            setScrollSpeed(200);
        else if(value > 2000 && value <= 17500)
            setScrollSpeed(450);
        else
            setScrollSpeed(200)
    })
    

    useEffect(() => {
        const handleWheel = (e) => {
            e.preventDefault(); 

            if(stopScrolling.current) return;
            stopScrolling.current = true;
                
            const direction = e.deltaY > 0 ? 1 : -1;
            requestAnimationFrame(() => {
                window.scrollBy({top: direction * scrollSpeed, behavior: 'smooth'});
            });

            if(timeoutRef.current) 
                clearTimeout(timeoutRef.current);

            timeoutRef.current = setTimeout(() => {
                stopScrolling.current= false;
            }, 300)
        }


        window.addEventListener('wheel', handleWheel, {passive: false});

        return () => {
            window.removeEventListener('wheel', handleWheel)
        }

    }, [scrollSpeed])


    return null
}

export default useControlScrolling;