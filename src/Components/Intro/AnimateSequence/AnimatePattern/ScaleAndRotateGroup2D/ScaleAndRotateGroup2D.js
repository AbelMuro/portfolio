import React, {useState, useContext, useEffect, useRef} from 'react';
import { ContainerContext } from '!/Intro';
import {motion, useMotionValueEvent, useSpring, useTransform, useScroll, useAnimationControls, useMotionValue, AnimatePresence} from 'framer-motion';
import * as styles from './styles.module.css';


function ScaleAndRotateGroup2D({children, scaleAnimate, rotateAnimate, unmountAt}) {
    const x = useMotionValue(-74.1383963);
    const y = useMotionValue(-25.048764);
    const [animate, setAnimate] = useState(true);
    const [mount, setMount] = useState(true);
    const groupRef = useRef();
    const {MainContainer} = useContext(ContainerContext);
    const {scrollYProgress} = useScroll(MainContainer);
    const scale = useTransform(scrollYProgress, scaleAnimate.scrollThresholds, scaleAnimate.scaleThresholds);
    const scaleSpring = useSpring(scale, {stiffness: 150, damping: 40});
    const controls = useAnimationControls();

    useMotionValueEvent(scrollYProgress, 'change', (value) => {
        if(value >= unmountAt){
            setMount(false);
            setAnimate(false)
        }
            
        else {
            setMount(true);
            setAnimate(true);
        }
            
    })

    useEffect(() => {
        if(animate)
            controls.start({rotate: [rotateAnimate.from, rotateAnimate.to], transition: {repeat: Infinity, repeatType: 'loop', ease: 'linear', duration: rotateAnimate.duration}});
        else 
            controls.stop();
    }, [animate])    

    return(
        <AnimatePresence>
            {
            mount && 
                <motion.g initial={{opacity: 1}} exit={{opacity: 0, transition: {duration: 0.4}}}>
                    <motion.g 
                        initial={{rotate: rotateAnimate.from}} 
                        animate={controls} 
                        ref={groupRef}
                        className={styles.group}
                        style={{scale: scaleSpring, x, y}}>
                            {children}
                    </motion.g>                    
                </motion.g>
}            
        </AnimatePresence>

    )
}

export default ScaleAndRotateGroup2D;