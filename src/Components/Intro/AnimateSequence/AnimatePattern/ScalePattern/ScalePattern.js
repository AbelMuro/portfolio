import React, {useRef, useContext} from 'react';
import {motion, useMotionValueEvent, useScroll, useTransform, useSpring} from 'framer-motion';
import {ContainerContext} from '!/Intro';
import * as styles from './styles.module.css';

function ScalePattern({children, scrollThresholds, scaleThresholds}) {
    const {MainContainerRef} = useContext(ContainerContext)
    const groupRef = useRef();
    const {scrollYProgress} = useScroll(MainContainerRef);
    const scale = useTransform(scrollYProgress, scrollThresholds, scaleThresholds);
    const scaleSpring = useSpring(scale, {stiffness: 150, damping: 40});
    
    useMotionValueEvent(scrollYProgress, 'change', (value) => {
        if(value >= scrollThresholds[1] + 0.10)
            groupRef.current.style.display = 'none';
        else 
            groupRef.current.style.display = '';
    })

    return(
        <motion.g style={{scale: scaleSpring}} ref={groupRef}>
            {children}    
        </motion.g>  
    )
}

export default ScalePattern;