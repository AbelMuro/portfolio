import React, {useContext} from 'react';
import { ContainerContext } from '!/Intro';
import {motion, useScroll, useTransform} from 'framer-motion';
import * as styles from './styles.module.css';

function Rect(props) {
    const {MainContainer} = useContext(ContainerContext);
    const {scrollYProgress} = useScroll(MainContainer);
    const strokeDashoffset = useTransform(scrollYProgress, [0.25, 0.42], [50, 0])
    

    return(
        <>
            <motion.rect {...props} className={styles.squares} fill='none' stroke='#0400ff' strokeDasharray={'50'} style={{strokeDashoffset}} />
        </>
        
    )
}

export default Rect; 