import React, {useContext} from 'react';
import {ContainerContext} from '!/Intro'
import {motion, useTransform, useScroll, useSpring} from 'framer-motion';
import * as styles from './styles.module.css';

function FadeOutPath(props) {
    const {MainContainer} = useContext(ContainerContext);
    const {scrollYProgress} = useScroll(MainContainer);
    const scale = useTransform(scrollYProgress, [0.06, 0.11], [1, 0])
    const scaleSpring = useSpring(scale, {stiffness: 150, damping: 10})

    return(
        <>
            <motion.path {...props} stroke='#0400ff' strokeWidth={1} style={{scale: scaleSpring}} className={styles.path} strokeLinecap='round'/>
            <motion.path {...props} stroke='#0400ff' strokeWidth={0.9} filter={'url(#glowEffect)'} style={{scale: scaleSpring}} className={styles.path}/>
        </>
    )
}

export default FadeOutPath;