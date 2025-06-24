import React, {useRef, useState, useContext} from 'react';
import { ContainerContext } from '!/Intro';
import {useScroll, useMotionValueEvent} from 'framer-motion';
import * as styles from './styles.module.css';

function AnimateTechTitles({children, x, y}) {
    const [title, setTitle] = useState('');
    const {MainContainer} = useContext(ContainerContext)
    const titles = useRef(['Node.js', 'Next.js', 'React', 'Framer-Motion', 'MongoDB', 'mySQL', 'Express.js', 'Vue'])
    const {scrollYProgress} = useScroll(MainContainer);

    useMotionValueEvent(scrollYProgress, 'change', (value) => {
        if(value < 0.50)
            setTitle('');
        else if(value >= 0.50 && value <= 0.51)
            setTitle(titles.current[0])
        else if(value >= 0.53 && value <= 0.54)
            setTitle(titles.current[1])
        else if(value >= 0.56 && value <= 0.57)
            setTitle(titles.current[2]);
        else if(value >= 0.58 && value <= 0.59)
            setTitle(titles.current[3]);
        else if(value >= 0.61 && value <= 0.62)
            setTitle(titles.current[4]);
        else if(value >= 0.64 && value <= 0.65)
            setTitle(titles.current[5])
        else if(value >= 0.67 && value <= 0.68)
            setTitle(titles.current[6]);
        else if(value >= 0.70)
            setTitle(titles.current[7]);
    }) 

    return(
        <>
            <text x={x} y={y}    
                fill="white"
                textAnchor='middle'
                fontSize={'0.07rem'}
                fontFamily="'AbelFont'"
                dy=".3em">
                    {title}
            </text>
            {children}
        </>
    )
}

export default AnimateTechTitles;