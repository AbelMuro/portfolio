import React, {useContext} from 'react';
import { ContainerContext } from '!/AnimateBackgroundPattern';
import {motion, useScroll, useTransform, useSpring, useMotionValueEvent} from 'framer-motion';
import * as styles from './styles.module.css';

function Circle({strokeDasharray, strokeDashoffset, ...props}) {
    const {MainContainerRef} = useContext(ContainerContext);
    const {scrollY} = useScroll(MainContainerRef);

    const dashoffset = useTransform(scrollY, [5800, 6000], [0, strokeDasharray]);
    const finalOffsetSmooth = useSpring(dashoffset, {stiffness: 150, damping: 40});

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