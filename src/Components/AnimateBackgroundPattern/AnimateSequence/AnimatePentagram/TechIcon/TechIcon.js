import React, {useState} from 'react';
import {LinearPentagram} from '~/Transitions';
import {motion, useScroll, useTransform, useSpring, useMotionValueEvent, useMotionTemplate} from 'framer-motion';
import icons from '~/assets/icons';
import * as styles from './styles.module.css';


function TechIcon({name, x, y, size, scrollThresholds}) {
    const {scrollY} = useScroll();
    const [mount, setMount] = useState(false);

    const scale = useTransform(scrollY, [5800, 6000], [1, 0]);
    const smoothScale = useSpring(scale, LinearPentagram);

    const opacity = useTransform(scrollY, scrollThresholds, [0, 1])

    const transform = useMotionTemplate`translate(${x}px, ${y}px) scale(${smoothScale})`;

    useMotionValueEvent(scrollY, 'change', (y) => {
        if(y < 5800)
            smoothScale.set(1)

        else if(y > 6700)
            smoothScale.jump(0);
    })

    useMotionValueEvent(scrollY, 'change', (value) => {
        if(value < scrollThresholds[0] - 300)
            setMount(false);
        else
            setMount(true);
    })
    
    return mount && (
        <motion.image 
            width={size} 
            className={styles.icon} 
            href={icons[name]}
            style={{opacity}}
            transform={transform}
            /> 
    )
}

export default TechIcon;