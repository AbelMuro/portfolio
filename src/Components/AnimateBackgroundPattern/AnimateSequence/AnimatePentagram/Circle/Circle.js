import React from 'react';
import {LinearPentagram} from '~/Transitions';
import {motion, useScroll, useTransform, useSpring, useMotionValueEvent} from 'framer-motion';
import * as styles from './styles.module.css';

function Circle({strokeDasharray, strokeDashoffset, ...props}) {
    const {scrollY} = useScroll();

    const dashoffset = useTransform(scrollY, [5800, 6000], [0, strokeDasharray]);
    const finalOffsetSmooth = useSpring(dashoffset, LinearPentagram);

    useMotionValueEvent(scrollY, 'change', (y) => {
         if (y < 5800) 
            finalOffsetSmooth.set(0);
         else if(y >= 6700)
            finalOffsetSmooth.jump(strokeDasharray); 
    });


    return (
        <motion.circle 
            {...props} 
            className={styles.circle} 
            strokeDasharray={strokeDasharray}
            style={{strokeDashoffset: finalOffsetSmooth}} 
        />
    )
}

export default Circle;