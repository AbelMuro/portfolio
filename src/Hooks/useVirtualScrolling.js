import React, {useState, useRef} from 'react';
import {useScroll, useTransform, useMotionValueEvent} from 'framer-motion';

function useVirtualScrolling(allProjects = [], offset) {
    const [projects, setProjects] = useState([]);
    const container = useRef(); 
    const {scrollYProgress} = useScroll({target: container, offset});      // first/target    second/viewport
    const index = useTransform(scrollYProgress, [0, 1], [0, allProjects.length - 1]);

    useMotionValueEvent(index, 'change', (i) => {
        let index = Math.floor(i);
        if(index === allProjects.length - 1)
            index++;
        setProjects(allProjects.slice(0, index));
    })

    return [projects, container];
}

export default useVirtualScrolling