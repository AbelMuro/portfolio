import React, {useState} from 'react';
import {LinearSquare, LinearPentagram} from '~/Transitions';
import {motion, useTransform, useSpring, useScroll, useMotionValueEvent, AnimatePresence} from 'framer-motion';
import images from './images';
import * as styles from './styles.module.css';

function OuterMostSquare() {
    const [mount, setMount] = useState(false);
    const {scrollY} = useScroll();

    const scale = useTransform(scrollY, [1800, 2000], [0.8, 5]);
    const scaleSmooth = useSpring(scale, LinearSquare);
    const scaleMore = useTransform(scrollY, [6500, 7000], [5, 10])
    
    const strokeDashoffsetOuterBorder = useTransform(scrollY, [2500, 4200], [55, 0]);
    const smoothDashoffsetOuterBorder = useSpring(strokeDashoffsetOuterBorder, LinearPentagram);

    const strokeDashoffsetInnerBorder = useTransform(scrollY, [7000, 7500], [55, 0]);
    const smoothStrokeDashoffsetInnerBorder = useSpring(strokeDashoffsetInnerBorder, LinearSquare);

    const opacity = useTransform(scrollY, [6700, 7200], [0, 1]);
    const opacitySmooth = useSpring(opacity, LinearPentagram);

    useMotionValueEvent(scrollY, 'change', (value) => {
        if(value < 2000 || value > 12800)
            setMount(false);
        else
            setMount(true);
    })

    useMotionValueEvent(scaleMore, 'change', (value) => {
        scaleSmooth.set(value);
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
                    <motion.svg xmlns="http://www.w3.org/2000/svg"  className={styles.svg} viewBox={"0 0 206.40488 206.40488"} style={{scale: scaleSmooth}}>
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
                                filter={'url(#glowEffectOuterMostSquare)'}
                                fill="none"
                                stroke="#0400ff"
                                strokeWidth={0.164006}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeDasharray={55}
                                strokeDashoffset={smoothDashoffsetOuterBorder}
                                transform='translate(-47.8, -13.5)'
                                d="m 150.67604,106.23255 9.34609,9.05688 -8.62065,8.73702 -9.3461,-9.05688 z"
                                id="rect704-3-9-6"
                                />
                            {/* inner border */}
                            <motion.path
                                filter={'url(#glowEffectOuterMostSquare)'}
                                fill="none"
                                stroke="#0400ff"
                                strokeWidth={0.138539}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit={0}
                                strokeDasharray={55}
                                strokeDashoffset={smoothStrokeDashoffsetInnerBorder}
                                transform='translate(-47.8, -13.5) matrix(0.71813035,0.69590861,-0.70235073,0.71183106,0,0)'
                                d="m 182.95529,-27.496716 h 10.99335 v 10.367864 h -10.99335 z"
                                id="rect704-3-9"
                                />
                            <motion.image 
                                filter={'url(#glowEffectOuterMostSquare)'}
                                href={images['text']}
                                width={16.5}
                                transform={'translate(95, 93.5)'}
                                opacity={opacitySmooth}
                                />
                        </motion.svg>
                </motion.div>  
            } 
        </AnimatePresence> 
    )
}

export default OuterMostSquare;