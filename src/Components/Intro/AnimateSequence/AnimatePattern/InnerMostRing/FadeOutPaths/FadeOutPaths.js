import React, {useContext} from 'react';
import {ContainerContext} from '!/Intro'
import {motion, useTransform, useScroll, useSpring} from 'framer-motion';
import * as styles from './styles.module.css';

function FadeOutPath(props) {
    const {MainContainer} = useContext(ContainerContext);
    const {scrollYProgress} = useScroll(MainContainer);
    const scale = useTransform(scrollYProgress, [0.15, 0.18], [1, 0])
    const scaleSpring = useSpring(scale, {stiffness: 150, damping: 50})

    return(
        <>
            <motion.path {...props} stroke='#0400ff' strokeWidth={1} style={{scale: scaleSpring}} className={styles.path} strokeLinecap='round' filter={'url(#glowEffect)'}/>
        </>
    )
}

export default FadeOutPath;