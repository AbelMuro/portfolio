import React, {useRef, useState, useContext} from 'react';
import { ContainerContext } from '!/AnimateBackgroundPattern';
import {useScroll, useMotionValueEvent, useTransform, useSpring, motion} from 'framer-motion';
import * as styles from './styles.module.css';

function AnimateTechTitles({x, y}) {
    const [title, setTitle] = useState('');
    const {MainContainerRef} = useContext(ContainerContext)
    const titles = useRef(['React', 'Node.js', 'Express', 'Vue', 'mySQL', 'Next.js', 'MongoDB', 'Framer-Motion'])
    const {scrollY} = useScroll(MainContainerRef);

    const opacity = useTransform(scrollY, [5800, 6000], [1, 0]);
    const smoothOpacity = useSpring(opacity, {stiffness: 150, damping: 80});

    useMotionValueEvent(scrollY, 'change', (y) => {
        if(y < 5800)
            smoothOpacity.set(1);
        else if(y > 6700)
            smoothOpacity.jump(0);
    })

    useMotionValueEvent(scrollY, 'change', (value) => {
        if(value < 3000)
            setTitle('');
        else if(value >= 3000 && value <= 3200)
            setTitle(titles.current[0])
        else if(value >= 3300 && value <= 3500)
            setTitle(titles.current[1])
        else if(value >= 3600 && value <= 3800)
            setTitle(titles.current[2]);
        else if(value >= 3900 && value <= 4100)
            setTitle(titles.current[3]);
        else if(value >= 4200 && value <= 4400)
            setTitle(titles.current[4]);
        else if(value >= 4500 && value <= 4800)
            setTitle(titles.current[5])
        else if(value >= 4900 && value <= 5000)
            setTitle(titles.current[6]);
        else if(value >= 5100)
            setTitle(titles.current[7]);
    }) 

    return (
        <motion.text x={x} y={y}    
            className={styles.title}
            fill="white"
            textAnchor='middle'
            fontSize={'0.12rem'}
            fontFamily="'AbelFont'"
            style={{opacity: smoothOpacity}}
            dy=".3em"
            exit={{opacity: 0}}
            >
                {title}
        </motion.text>
    )
}

export default AnimateTechTitles;