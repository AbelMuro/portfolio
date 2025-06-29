import React, {useRef, useState, useContext} from 'react';
import { ContainerContext } from '!/Intro';
import {useScroll, useMotionValueEvent, useTransform, useSpring, motion, AnimatePresence} from 'framer-motion';
import * as styles from './styles.module.css';

function AnimateTechTitles({x, y}) {
    const [mount, setMount] = useState(true);
    const [title, setTitle] = useState('');
    const {MainContainer} = useContext(ContainerContext)
    const titles = useRef(['React', 'Node.js', 'Express', 'Vue', 'mySQL', 'Next.js', 'MongoDB', 'Framer-Motion'])
    const {scrollYProgress} = useScroll(MainContainer);
    const opacity = useTransform(scrollYProgress, [0.58, 0.63], [1, 0]);
    const smoothOpacity = useSpring(opacity, {stiffness: 150, damping: 80});

    useMotionValueEvent(scrollYProgress, 'change', (value) => {
        if(value < 0.30)
            setTitle('');
        else if(value >= 0.30 && value <= 0.32)
            setTitle(titles.current[0])
        else if(value >= 0.34 && value <= 0.35)
            setTitle(titles.current[1])
        else if(value >= 0.37 && value <= 0.38)
            setTitle(titles.current[2]);
        else if(value >= 0.39 && value <= 0.40)
            setTitle(titles.current[3]);
        else if(value >= 0.42 && value <= 0.43)
            setTitle(titles.current[4]);
        else if(value >= 0.45 && value <= 0.46)
            setTitle(titles.current[5])
        else if(value >= 0.48 && value <= 0.49)
            setTitle(titles.current[6]);
        else if(value >= 0.51)
            setTitle(titles.current[7]);
    }) 

    useMotionValueEvent(scrollYProgress, 'change', (value) => {
        if(value > 0.70)
            setMount(false)
        else
            setMount(true);
    })

    return (
        <AnimatePresence>
            {mount && 
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
            }
        </AnimatePresence>
    )
}

export default AnimateTechTitles;