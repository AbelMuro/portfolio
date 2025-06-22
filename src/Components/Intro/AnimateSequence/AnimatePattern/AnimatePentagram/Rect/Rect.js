import React, {useContext} from 'react';
import { ContainerContext } from '!/Intro';
import {motion, useScroll, useTransform} from 'framer-motion';
import * as styles from './styles.module.css';

function Rect(props) {
    const {MainContainer} = useContext(ContainerContext);
    const {scrollYProgress} = useScroll(MainContainer);
    const strokeDashoffset = useTransform(scrollYProgress, [0.30, 0.47], [50, 0])
    

    return(
        <>
            <motion.rect {...props} className={styles.squares} fill='none' stroke='#0400ff' strokeDasharray={'50'} style={{strokeDashoffset}}/>
            <motion.rect {...props} fill='none' stroke='#0400ff' strokeWidth={Number(props.strokeWidth) * 1.2} strokeDasharray={'50'} style={{strokeDashoffset}} filter={'url(#glowEffect)'}/>
        </>
        
    )
}

export default Rect; 