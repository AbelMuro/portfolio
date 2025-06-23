import React, {useState, useContext, useEffect, useRef} from 'react';
import { ContainerContext } from '!/Intro';
import {motion, useMotionValueEvent, useSpring, useTransform, useScroll, useAnimationControls} from 'framer-motion';
import * as styles from './styles.module.css';

function ScaleAndRotateGroup2D({children, scaleAnimate, rotateAnimate}) {
    const [animate, setAnimate] = useState(true);
    const groupRef = useRef();
    const {MainContainer} = useContext(ContainerContext);
    const {scrollYProgress} = useScroll(MainContainer);
    const scale = useTransform(scrollYProgress, scaleAnimate.scrollThresholds, scaleAnimate.scaleThresholds);
    const scaleSpring = useSpring(scale, {stiffness: 150, damping: 40});
    const transform = useTransform(scaleSpring, (scale) => {
        return `scale(${scale}) translate(-74.1383963,-25.048764)`
    })
    const controls = useAnimationControls();

    useMotionValueEvent(scrollYProgress, 'change', (value) => {
        setAnimate(value < rotateAnimate.stopRotate); 
    }) 

    useMotionValueEvent(scrollYProgress, 'change', (value) => {
        if(value >= scaleAnimate.scrollThresholds[1] + 0.10)
            groupRef.current.style.display = 'none';
        else 
            groupRef.current.style.display = '';
    })

    useEffect(() => {
        if(animate)
            controls.start({rotate: [rotateAnimate.from, rotateAnimate.to], transition: {repeat: Infinity, repeatType: 'loop', ease: 'linear', duration: rotateAnimate.duration}})
        else 
            controls.stop();
    }, [animate])
    

    return(
        <motion.g 
            initial={{rotate: rotateAnimate.from}} 
            animate={controls} 
            ref={groupRef}
            className={styles.group}
            style={{transform}}>
                {children}
        </motion.g>
    )
}

export default ScaleAndRotateGroup2D;