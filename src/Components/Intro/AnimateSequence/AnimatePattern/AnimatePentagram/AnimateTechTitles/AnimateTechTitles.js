import React, {useRef, useState, useContext} from 'react';
import { ContainerContext } from '!/Intro';
import {useScroll, useMotionValueEvent} from 'framer-motion';
import * as styles from './styles.module.css';

function AnimateTechTitles({children, x, y}) {
    const [title, setTitle] = useState('');
    const {MainContainer} = useContext(ContainerContext)
    const titles = useRef(['React', 'Node.js', 'Express', 'Vue', 'mySQL', 'Next.js', 'MongoDB', 'Framer-Motion'])
    const {scrollYProgress} = useScroll(MainContainer);

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

    return(
        <>
            <text x={x} y={y}    
                fill="white"
                textAnchor='middle'
                fontSize={'0.12rem'}
                fontFamily="'AbelFont'"
                dy=".3em">
                    {title}
            </text>
            {children}
        </>
    )
}

export default AnimateTechTitles;