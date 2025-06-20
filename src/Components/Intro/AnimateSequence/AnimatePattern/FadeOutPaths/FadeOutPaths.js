import React, {useContext} from 'react';
import {ContainerContext} from '!/Intro'
import {motion, useTransform, useScroll} from 'framer-motion';
import * as styles from './styles.module.css';

function FadeOutPath({d}) {
    const {MainContainer} = useContext(ContainerContext);
    const {scrollYProgress} = useScroll(MainContainer);
    const scale = useTransform(scrollYProgress, [0.30, 0.40], [1, 0])

    return(
        <>
            <motion.path d={d} stroke='#0400ff' strokeWidth={1} style={{scale}} className={styles.path}/>
            <motion.path d={d} stroke='#0400ff' strokeWidth={0.9} filter={'url(#glowEffect)'} style={{scale}} className={styles.path}/>
        </>
    )
}

export default FadeOutPath;