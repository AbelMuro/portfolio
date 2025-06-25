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
        if(value < 0.30)
            setTitle('');
        else if(value >= 0.30 && value <= 0.31)
            setTitle(titles.current[0])
        else if(value >= 0.33 && value <= 0.34)
            setTitle(titles.current[1])
        else if(value >= 0.36 && value <= 0.37)
            setTitle(titles.current[2]);
        else if(value >= 0.38 && value <= 0.39)
            setTitle(titles.current[3]);
        else if(value >= 0.41 && value <= 0.42)
            setTitle(titles.current[4]);
        else if(value >= 0.44 && value <= 0.45)
            setTitle(titles.current[5])
        else if(value >= 0.47 && value <= 0.48)
            setTitle(titles.current[6]);
        else if(value >= 0.50)
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