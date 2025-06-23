import React, {useState, useContext, useEffect, useRef} from 'react';
import { ContainerContext } from './Intro';
import {motion, useMotionValueEvent, useSpring, useTransform} from 'framer-motion';
import * as styles from './styles.module.css';

function ScaleAndRotateGroup2D({children, scale, rotate}) {
    const [animate, setAnimate] = useState(true);
    const groupRef = useRef();
    const {MainContainer} = useContext(ContainerContext);
    const {scrollYProgress} = useScroll(MainContainer);
    const scale = useTransform(scrollYProgress, scale.scrollThresholds, scale.scaleThresholds);
    const scaleSpring = useSpring(scale, {stiffness: 150, damping: 40});
    const transform = useTransform(scaleSpring, (scale) => {
        return `scale(${scale}) translate(-74.1383963,-25.048764)`
    })
    const controls = useAnimationControls();

    useMotionValueEvent(scrollYProgress, 'change', (value) => {
        setAnimate(value < rotate.stopRotate); 
    }) 

    useMotionValueEvent(scrollYProgress, 'change', (value) => {
        if(value >= scrollThresholds[1] + 0.10)
            groupRef.current.style.display = 'none';
        else 
            groupRef.current.style.display = '';
    })

    useEffect(() => {
        if(animate)
            controls.start({rotate: [rotate.from, rotate.to], transition: {repeat: Infinity, repeatType: 'loop', ease: 'linear', duration}})
        else 
            controls.stop();
    }, [animate])
    

    return(
        <motion.g 
            initial={{rotate: from}} 
            animate={controls} 
            ref={groupRef}
            className={styles.group}
            style={{transform}}>
                {children}
        </motion.g>
    )
}

export default ScaleAndRotateGroup2D;