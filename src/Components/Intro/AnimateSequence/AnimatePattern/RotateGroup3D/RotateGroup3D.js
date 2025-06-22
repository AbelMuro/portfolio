import React, {useContext} from 'react';
import { ContainerContext } from '!/Intro';
import {motion, useScroll, useTransform} from 'framer-motion';
import * as styles from './styles.module.css';

function RotateGroup3D({children}) {
    const {MainContainerRef} = useContext(ContainerContext);
    const {scrollYProgress} = useScroll(MainContainerRef);
    const rotateX = useTransform(scrollYProgress, [0, 0.05], [0, 45])
    const rotateY = useTransform(scrollYProgress,[0, 0.05], [0, -45])

    return(
        <motion.g style={{rotateX, rotateY}}>
            {children} 
        </motion.g>
    )
}

export default RotateGroup3D;