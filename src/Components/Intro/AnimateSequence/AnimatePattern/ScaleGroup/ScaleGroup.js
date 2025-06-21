import React, {useRef, useContext} from 'react';
import {motion, useMotionValueEvent, useScroll, useTransform} from 'framer-motion'
import {ContainerContext} from '!/Intro';
import * as styles from './styles.module.css';

function ScaleGroup({children, scaleThresholds, scrollThresholds}) {
    const {MainContainerRef} = useContext(ContainerContext)
    const groupRef = useRef();
    const {scrollYProgress} = useScroll(MainContainerRef);
    const scale = useTransform(scrollYProgress, scrollThresholds, scaleThresholds);
    const opacity = useTransform(scrollYProgress, [0.40, 0.45], [1, 0])

    useMotionValueEvent(scrollYProgress, 'change', (value) => {
        if(value >= 0.50)
            groupRef.current.style.display = 'none';
        else
            groupRef.current.style.display = 'block';
    });

    return(
        <motion.g className={styles.container} style={{scale, opacity}} ref={groupRef} >
            {children}          
        </motion.g>

    )
}

export default ScaleGroup;