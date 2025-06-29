import React, {useState} from 'react';
import {motion, useScroll, useTransform, useSpring, useMotionValueEvent, AnimatePresence, useMotionValue} from 'framer-motion';
import icons from '~/assets/icons';
import * as styles from './styles.module.css';


function TechIcon({name, x, y, size, scrollThresholds}) {
    const [mount, setMount] = useState(true);
    const {scrollYProgress} = useScroll();
    const opacity = useTransform(scrollYProgress, scrollThresholds, [0, 1])
    const scale = useTransform(scrollYProgress, [0.58, 0.63], [1, 0]);
    const smoothScale = useSpring(scale, {stiffness: 150, damping: 80});

    useMotionValueEvent(scrollYProgress, 'change', (value) => {
        if(value > 0.70)
            setMount(false)
        else
            setMount(true);
    })

    
    return mount && (
        <g transform={`translate(${x}, ${y})`}>
            <motion.image 
                width={size} 
                className={styles.icon} 
                href={icons[name]}
                initial={{opacity: 0}}
                style={{opacity, scale: smoothScale}}
                />  
        </g>
    )
}

export default TechIcon;