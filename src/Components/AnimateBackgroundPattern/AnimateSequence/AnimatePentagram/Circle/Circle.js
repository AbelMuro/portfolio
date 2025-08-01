import React from 'react';
import {LinearPentagram} from '~/Transitions';
import {motion, useScroll, useTransform, useSpring, useMotionValueEvent} from 'framer-motion';
import * as styles from './styles.module.css';

function Circle({strokeDasharray, strokeDashoffset, ...props}) {
    const {scrollY} = useScroll();

    const dashoffset = useTransform(scrollY, [5800, 6000], [0, strokeDasharray]);
    const finalOffsetSmooth = useSpring(dashoffset, LinearPentagram);

    const opacity = useTransform(scrollY, [6500, 6800], [1, 0]);

    useMotionValueEvent(scrollY, 'change', (y) => {
         if (y < 5800) 
            finalOffsetSmooth.set(0);
         else if(y >= 6900)
            finalOffsetSmooth.jump(strokeDasharray); 
    });


    return (
        <motion.circle 
            {...props} 
            className={styles.circle} 
            strokeDasharray={strokeDasharray}
            style={{strokeDashoffset: finalOffsetSmooth, opacity}} 
        />
    )
}

export default Circle;