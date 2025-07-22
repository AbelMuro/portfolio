import React from 'react';
import {LinearPentagram} from '~/Transitions';
import {motion, useScroll, useTransform, useSpring, useMotionValueEvent} from 'framer-motion';
import icons from '~/assets/icons';
import * as styles from './styles.module.css';


function TechIcon({name, x, y, size, scrollThresholds}) {
    const {scrollY} = useScroll();

    const scale = useTransform(scrollY, [5800, 6000], [1, 0]);
    const smoothScale = useSpring(scale, LinearPentagram);

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