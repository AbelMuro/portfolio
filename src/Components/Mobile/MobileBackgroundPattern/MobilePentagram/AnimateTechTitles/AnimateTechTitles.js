import React, {useRef, useState} from 'react';
import {motion, useMotionValueEvent, useScroll} from 'framer-motion';
import * as styles from './styles.module.css';

function AnimateTechTitles() {
    const {scrollY} = useScroll();
    const [title, setTitle] = useState('');
    const [fontSize, setFontSize] = useState('0.2rem');
    const titles = useRef(['React', 'Node.js', 'Express', 'Vue', 'mySQL', 'Next.js', 'MongoDB', 'Framer-Motion'])


    useMotionValueEvent(scrollY, 'change', (value) => {
        if(value < 1200)
            setTitle('');
        else if(value >= 1200 && value <= 1300){
            setTitle(titles.current[0]);
            setFontSize('0.2rem');
        }
            
        else if(value >= 1500 && value <= 1600){
            setTitle(titles.current[1])
            setFontSize('0.2rem');
        }
            
        else if(value >= 1800 && value <= 1900){
            setTitle(titles.current[2]);
            setFontSize('0.2rem');
        }
            
        else if(value >= 2100 && value <= 2200){
            setTitle(titles.current[3]);
            setFontSize('0.2rem');
        }
            
        else if(value >= 2400 && value <= 2500){
            setTitle(titles.current[4]);
            setFontSize('0.2rem')
        }
        else if(value >= 2700 && value <= 2800){
            setTitle(titles.current[5]);
            setFontSize('0.2rem')
        }
            
        else if(value >= 3000 && value <= 3100){
            setTitle(titles.current[6]);
            setFontSize('0.17rem')
        }
            
        else if(value >= 3300){
            setTitle(titles.current[7]);
            setFontSize('0.11rem')
        }
            
    }) 

    return (
        <motion.text 
            x={150.9} 
            y={116}  
            fill="white"
            textAnchor='middle'
            fontSize={fontSize}
            fontFamily="'AbelFont'"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            >
                {title}
        </motion.text>
    )
}

export default AnimateTechTitles;