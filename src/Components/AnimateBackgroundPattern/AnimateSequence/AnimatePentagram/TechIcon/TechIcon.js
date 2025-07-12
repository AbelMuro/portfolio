import React, {useState, useContext} from 'react';
import {ContainerContext} from '!/AnimateBackgroundPattern';
import {motion, useScroll, useTransform, useSpring, useMotionValueEvent, AnimatePresence, useMotionValue} from 'framer-motion';
import icons from '~/assets/icons';
import * as styles from './styles.module.css';


function TechIcon({name, x, y, size, scrollThresholds}) {
    const {MainContainerRef} = useContext(ContainerContext);
    const {scrollY} = useScroll(MainContainerRef);

    const scale = useTransform(scrollY, [5800, 6000], [1, 0]);
    const smoothScale = useSpring(scale, {stiffness: 150, damping: 80});

    const opacity = useTransform(scrollY, scrollThresholds, [0, 1])

    useMotionValueEvent(scrollY, 'change', (y) => {
        if(y < 5800)
            smoothScale.set(1)

        else if(y > 6700)
            smoothScale.jump(0);
    })
    
    return(
        <g transform={`translate(${x}, ${y})`}>
            <motion.image 
                width={size} 
                className={styles.icon} 
                href={icons[name]}
                style={{opacity, scale: smoothScale}}
                />  
        </g>
    )
}

export default TechIcon;