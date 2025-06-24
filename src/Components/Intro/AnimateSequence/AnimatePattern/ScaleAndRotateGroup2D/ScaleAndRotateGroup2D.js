import React, {useState, useContext, useEffect, useRef} from 'react';
import { ContainerContext } from '!/Intro';
import {motion, useMotionValueEvent, useSpring, useTransform, useScroll, useAnimationControls, useMotionValue, AnimatePresence} from 'framer-motion';
import * as styles from './styles.module.css';


function ScaleAndRotateGroup2D({id, children, scaleAnimate, rotateAnimate, unmountAt}) {
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


    useEffect(() => {
        if(animate)
            controls.start({rotate: [rotateAnimate.from, rotateAnimate.to], transition: {repeat: Infinity, repeatType: 'loop', ease: 'linear', duration: rotateAnimate.duration}});
        else 
            controls.stop();
    }, [animate])    


    return(
        <>
            {mount && <motion.g 
                        id={id}
                        initial={{rotate: rotateAnimate.from}} 
                        animate={controls} 
                        ref={groupRef}
                        className={styles.group}
                        style={{scale: scaleSpring, x, y}}>
                            {children}
                    </motion.g> 
            }         
        </>         
    )
}

export default ScaleAndRotateGroup2D;