import React, {useContext} from 'react';
import { ContainerContext } from '!/Intro';
import {motion, useScroll, useTransform, useSpring} from 'framer-motion';
import * as styles from './styles.module.css';

function AnimateRect() {
    const {MainContainer} = useContext(ContainerContext);
    const {scrollYProgress} = useScroll(MainContainer);
    const strokeDashoffset = useTransform(scrollYProgress, [0.25, 0.42], [55, 0]);
    const smoothDashoffset = useSpring(strokeDashoffset, {stiffness: 150, damping: 80});
    const scale = useTransform(scrollYProgress, [0.65, 0.70], [1, 2])
    const scaleSmooth = useSpring(scale, {stiffness: 150, damping: 80})

    return(
        <motion.g style={{scale: scaleSmooth}}>
            <motion.rect 
                filter={'url(#glowEffect)'}
                x={181.80121}
                y={-28.580276}
                width={13.151613}
                height={12.403329}
                transform="matrix(0.71813035,0.69590861,-0.70235073,0.71183106,0,0)"
                fill="none"
                stroke="#0400ff"
                strokeWidth={0.165738}
                strokeLinejoin="bevel"
                strokeMiterlimit={0}
                strokeOpacity={1}
                strokeDasharray={55} 
                style={{
                    strokeDashoffset: smoothDashoffset,
                }}
            />   
        </motion.g>
    )
}

export default AnimateRect;