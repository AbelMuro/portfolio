import React from 'react';
import {motion, useScroll, useTransform} from 'framer-motion';
import icons from '~/assets/icons';
import * as styles from './styles.module.css';

function TechIcon({children, name, x, y, size, scrollThresholds}) {
    const {scrollYProgress} = useScroll();
    const opacity = useTransform(scrollYProgress, scrollThresholds, [0, 1] )
    
    return(
        <g>
            <motion.image width={size} className={styles.icon} href={icons[name]} x={x} y={y} style={{opacity}}/>
            {children}
        </g>
    )
}

export default TechIcon;