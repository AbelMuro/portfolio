import React from 'react';
import {motion, useScroll, useTransform} from 'framer-motion';
import icons from '~/assets/icons';
import * as styles from './styles.module.css';

//this is where i left off, i need to scale down these icons within this scroll threshold [0.58, 0.63]
//and i also need to fix the issue with the magic mouse and useControlScrolling()

function TechIcon({children, name, x, y, size, scrollThresholds}) {
    const {scrollYProgress} = useScroll();
    const opacity = useTransform(scrollYProgress, scrollThresholds, [0, 1] )
    
    return(
        <>
            <motion.image width={size} className={styles.icon} href={icons[name]} x={x} y={y} style={{opacity}}/>
            {children}
        </>
    )
}

export default TechIcon;