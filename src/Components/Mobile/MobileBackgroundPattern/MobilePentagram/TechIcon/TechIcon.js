import React from 'react';
import {motion, useScroll, useTransform} from 'framer-motion';
import icons from '~/assets/icons';
import * as styles from './styles.module.css';

function TechIcon({name, x, y, size, scrollThresholds}) {
    const {scrollY} = useScroll();
    const opacity = useTransform(scrollY, [scrollThresholds[0], scrollThresholds[1]], [0, 1]);

    return(

        <g transform={`translate(${x}, ${y})`}>
            <motion.image 
                width={size} 
                className={styles.icon} 
                href={icons[name]}
                style={{opacity}}
                />  
        </g>
    )
}

export default TechIcon;