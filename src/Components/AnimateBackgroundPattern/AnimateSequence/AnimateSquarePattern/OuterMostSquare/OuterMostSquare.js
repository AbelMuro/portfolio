import React, {useState} from 'react';
import {LinearSquare, LinearPentagram} from '~/Transitions';
import {motion, useTransform, useSpring, useScroll, useMotionValueEvent, AnimatePresence} from 'framer-motion';
import images from './images';
import * as styles from './styles.module.css';


/* 
    this is where i left off, i need to continue optimizing the components for safari
*/


function OuterMostSquare() {
    const [mount, setMount] = useState(false);
    const {scrollY} = useScroll();

    const scale = useTransform(scrollY, [6500, 7000], [1, 2]);
    const scaleSmooth = useSpring(scale, LinearSquare);
    
    const strokeDashoffsetOuterBorder = useTransform(scrollY, [2500, 4200], [252.88, 0]);
    const smoothDashoffsetOuterBorder = useSpring(strokeDashoffsetOuterBorder, LinearPentagram);

    const strokeDashoffsetInnerBorder = useTransform(scrollY, [7000, 7500], [213.61, 0]);
    const smoothStrokeDashoffsetInnerBorder = useSpring(strokeDashoffsetInnerBorder, LinearSquare);

    const opacity = useTransform(scrollY, [6700, 7200], [0, 1]);
    const opacitySmooth = useSpring(opacity, LinearPentagram);

    useMotionValueEvent(scrollY, 'change', (value) => {
        if(value < 2000 || value > 12800)
            setMount(false);
        else
            setMount(true);
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
                    <motion.svg xmlns="http://www.w3.org/2000/svg" className={styles.svg} viewBox={"0 0 206.40488 206.40488"} style={{scale: scaleSmooth}}>
                        <defs>
                            <filter id='glowEffectOuterMostSquare'>
                                <feGaussianBlur 
                                    in="SourceAlpha" 
                                    result="blur"
                                    stdDeviation={0.4}
                                    /> 
                                <feFlood floodColor="#0400ff" floodOpacity='1' result="color"/>
                                <feComposite in="color" in2="blur" operator="in" result="glow"/>
                                <feMerge>
                                    <feMergeNode in="glow"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                        </defs>   
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
                            <motion.path
                                filter={'url(#glowEffectOuterMostSquare)'}
                                fill="none"
                                stroke="#0400ff"
                                strokeWidth={0.7}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeDasharray={213.61}
                                strokeDashoffset={smoothStrokeDashoffsetInnerBorder}
                                transform='translate(-49, -46) rotate(44)'
                                d="m 182.95529,-27.496716 h 50.69256 v 47.80737 h -50.69256 z"
                                id="rect704-3-9"
                                />
                            <motion.image 
                                filter={'url(#glowEffectOuterMostSquare)'}
                                href={images['text']}
                                width={80}
                                transform={'translate(63.7, 56)'}
                                opacity={opacitySmooth}
                                />
                        </motion.svg>
                </motion.div>  
            } 
        </AnimatePresence> 
    )
}

export default OuterMostSquare;