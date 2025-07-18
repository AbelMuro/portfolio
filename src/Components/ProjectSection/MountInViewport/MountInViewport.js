import React, {useRef,  useState, forwardRef} from 'react';
import {useScroll, useMotionValueEvent} from 'framer-motion';
import * as styles from './styles.module.css';

const MountInViewport = forwardRef(({children}, ref) => {
    const [mount, setMount] = useState(false);
    const {scrollYProgress} = useScroll({target: ref, offset: ['start 150vh', 'end 150vh']});

    useMotionValueEvent(scrollYProgress, 'change', (y) => {
        if(y === 1)
            setMount(true)
        else
            setMount(false);
    });

    return mount && children;              
    
})

export default MountInViewport;