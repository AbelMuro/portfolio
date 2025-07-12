import React, {useContext} from 'react';
import { ContainerContext } from '!/AnimateBackgroundPattern';
import {motion, useScroll, useTransform, useSpring} from 'framer-motion';
import * as styles from './styles.module.css';

function Rect(props) {
    const {MainContainerRef} = useContext(ContainerContext);
    const {scrollY} = useScroll(MainContainerRef);
    
    const strokeDashOffset = useTransform(scrollY, [2500, 4200], [52.0433, 0]);
    const strokeDashBack = useTransform(scrollY, [5800, 6000], [0, 52.0433]);
    const finalOffset = useTransform(scrollY, (value) => {
        if (value >= 2500 && value < 5800) 
            return strokeDashOffset.get();
         else if (value >= 5800 && value <= 6000) 
            return strokeDashBack.get();
         else 
            return 52.0433; 
    })
    const finalOffsetSmooth = useSpring(finalOffset, {stiffness: 150, damping: 40});
    

    return (
        <motion.rect 
            {...props} 
            className={styles.squares} 
            fill='none' 
            stroke='#0400ff' 
            strokeDasharray={52.0433} 
            style={{strokeDashoffset: finalOffsetSmooth}} 
            filter={'url(#glowEffect)'}
        />  
    )
}

export default Rect; 