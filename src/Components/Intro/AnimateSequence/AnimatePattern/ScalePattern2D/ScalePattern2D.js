import React, {useRef, useContext} from 'react';
import {motion, useMotionValueEvent, useScroll, useTransform, useSpring} from 'framer-motion';
import {ContainerContext} from '!/Intro';
import * as styles from './styles.module.css';

function ScalePattern2D({children, scrollThresholds, scaleThresholds}) {
    const {MainContainerRef} = useContext(ContainerContext)
    const groupRef = useRef();
    const {scrollYProgress} = useScroll(MainContainerRef);
    const scale = useTransform(scrollYProgress, scrollThresholds, scaleThresholds);
    const scaleSpring = useSpring(scale, {stiffness: 150, damping: 40});
    const transform = useTransform(scaleSpring, (scale) => {
        return `scale(${scale}) translate(-74.1383963,-25.048764)'`
    })
    
    useMotionValueEvent(scrollYProgress, 'change', (value) => {
        if(value >= scrollThresholds[1] + 0.10)
            groupRef.current.style.display = 'none';
        else 
            groupRef.current.style.display = '';
    })

    return(
        <motion.g style={{transform}} ref={groupRef}>
            {children}    
        </motion.g>  
    )
}

export default ScalePattern2D;