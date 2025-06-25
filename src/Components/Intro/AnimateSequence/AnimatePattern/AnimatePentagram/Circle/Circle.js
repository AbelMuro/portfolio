import React, {useContext} from 'react';
import { ContainerContext } from '!/Intro';
import {motion, useScroll, useTransform, useSpring} from 'framer-motion';
import * as styles from './styles.module.css';

function Circle(props) {
    const {MainContainer} = useContext(ContainerContext);
    const {scrollYProgress} = useScroll(MainContainer);
    const strokeDashoffset = useTransform(scrollYProgress, [0.58, 0.62], [0, 300]);
    const dashoffsetSpring = useSpring(strokeDashoffset, {stiffness: 150, damping: 70});

    return(
        <motion.circle {...props} strokeDasharray={'300'} style={{strokeDashoffset: dashoffsetSpring}}/>
    )
}

export default Circle;