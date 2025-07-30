import React, {useState} from 'react';
import {LinearSquare, LinearPentagram} from '~/Transitions';
import {motion, useTransform, useSpring, useScroll, useMotionValueEvent, AnimatePresence, useMotionTemplate} from 'framer-motion';
import images from './images';
import * as styles from './styles.module.css';

/* 
    this is where i left off, i need to continue optimizing the components for safari
*/

function OuterMostSquare() {
    const [mount, setMount] = useState(false);
    const [mountTextInnerBorder, setMountTextInnerBorder] = useState(false);
    const {scrollY} = useScroll();
    const scrollRange = [
        2100, 3100, 
        4100, 5100,
        6100
    ];

    const scale = useTransform(scrollY, [6500, 7000], [1, 2]);
    const scaleSmooth = useSpring(scale, LinearSquare);
    
    const strokeDashoffsetOuterBorder = useTransform(scrollY, [2500, 4200], [252.88, 0]);
    const smoothDashoffsetOuterBorder = useSpring(strokeDashoffsetOuterBorder, LinearPentagram);

    const strokeDashoffsetInnerBorder = useTransform(scrollY, [7000, 7500], [213.61, 0]);
    const smoothStrokeDashoffsetInnerBorder = useSpring(strokeDashoffsetInnerBorder, LinearSquare);

    const opacity = useTransform(scrollY, [6700, 7200], [0, 1]);
    const opacitySmooth = useSpring(opacity, LinearPentagram);

    const rotateY = useTransform(scrollY, scrollRange, [0, -35, 0, -35, 0]);
    const rotateX = useTransform(scrollY, scrollRange, [0, 35, 0, -25, 0]);
    const rotateSmoothY = useSpring(rotateY, LinearPentagram);
    const rotateSmoothX = useSpring(rotateX, LinearPentagram);

    const transform = useMotionTemplate`scale(${scaleSmooth}) rotateX(${rotateSmoothX}deg) rotateY(${rotateSmoothY}deg)`


    useMotionValueEvent(scrollY, 'change', (value) => {
        if(value < 2000 || value > 12800)
            setMount(false);
        else
            setMount(true);
    })

    useMotionValueEvent(scrollY, 'change', (value) => {
        if(value > 6000)
            setMountTextInnerBorder(true);
        else
            setMountTextInnerBorder(false);
    })

    return(
        <AnimatePresence>
            {
                mount && 
                <motion.div 
                    id='outer most square/pentagram square' 
                    className={styles.container} 
                    exit={{opacity: 0}}
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" className={styles.svg} viewBox={"0 0 206.40488 206.40488"}>
                        <defs>
                            <filter id='glowEffectOuterMostSquare' filterUnits="userSpaceOnUse" x="-20%" y="-20%" width="140%" height="140%">
                                <feDropShadow dx="0" dy="0" stdDeviation="1" floodColor="#0400ff" floodOpacity={1}/>
                            </filter>
                        </defs>   
                        <motion.g transform={transform}>
                            {/* outer border*/}
                                <motion.path
                                    fill="none"
                                    stroke="#0400ff"
                                    strokeWidth={0.6}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeDasharray={252.88}
                                    strokeDashoffset={smoothDashoffsetOuterBorder}
                                    transform='translate(-49, -55)'
                                    d="m 150.67604,106.23255 46.73045,45.2844 -43.10325,43.6851 -46.7305,-45.2844 z"
                                    id="rect704-3-9-6"
                                    />
                                {/* inner border */}
                                {mountTextInnerBorder && <motion.path
                                    fill="none"
                                    stroke="#0400ff"
                                    strokeWidth={0.7}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeDasharray={213.61}
                                    strokeDashoffset={smoothStrokeDashoffsetInnerBorder}
                                    transform='translate(-56.5, -53) rotate(44)'
                                    d="m 192.10305,-28.871552 h 53.227188 v 50.197738 h -53.227188 z"
                                    id="rect704-3-9"
                                    />}
                                {mountTextInnerBorder && <motion.image 
                                    href={images['text']}
                                    width={82.5}
                                    transform={'translate(62.6, 55.3)'}
                                    opacity={opacitySmooth}
                                    />}                            
                        </motion.g>

                    </svg>
                </motion.div>  
            } 
        </AnimatePresence> 
    )
}

export default OuterMostSquare;