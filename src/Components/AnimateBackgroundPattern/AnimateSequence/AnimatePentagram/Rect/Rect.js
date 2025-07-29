import React, {useState} from 'react';
import {LinearPentagram} from '~/Transitions';
import {motion, useScroll, useTransform, useSpring, useMotionValueEvent, AnimatePresence} from 'framer-motion';
import * as styles from './styles.module.css';

function Rect(props) {
    const {scrollY} = useScroll();
    const [mount, setMount] = useState(false);

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
    const finalOffsetSmooth = useSpring(finalOffset, LinearPentagram);
    
    useMotionValueEvent(scrollY, 'change', (value) => {
        if(value >= 2000)
            setMount(true);
        else
            setMount(false);
    })


    return (
        <AnimatePresence>
            { mount && 
            <motion.rect 
                {...props} 
                className={styles.squares} 
                fill='none' 
                stroke='#0400ff' 
                strokeDasharray={52.0433} 
                strokeDashoffset={finalOffsetSmooth}
                exit={{opacity: 0}}
            />  }            
        </AnimatePresence>

    )
}

export default Rect; 