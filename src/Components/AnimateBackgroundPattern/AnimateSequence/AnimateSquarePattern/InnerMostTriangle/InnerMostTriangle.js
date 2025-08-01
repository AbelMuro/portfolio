import React, {useState} from 'react';
import images from './images';
import {LinearSquare} from '~/Transitions';
import {motion, useTransform, useSpring, useScroll, AnimatePresence, useMotionValueEvent, useMotionTemplate} from 'framer-motion';
import * as styles from './styles.module.css';

function InnerMostTriangle() {
    const [mount, setMount] = useState(false);
    const {scrollY} = useScroll();

    const opacity = useTransform(scrollY, [9500, 10000], [0, 1])
    const opacitySmooth = useSpring(opacity, LinearSquare);

    const strokeDashoffset = useTransform(scrollY, [9000, 9500], [130, 0]);
    const smoothStrokeDashoffset = useSpring(strokeDashoffset, LinearSquare);
    const strokeDashoffsetBack = useTransform(scrollY, [13200, 13500], [0, 130]);

    const z = useTransform(scrollY, [8500, 9000], [0, 150]);
    const smoothZ = useSpring(z, LinearSquare);
    const translateZBack = useTransform(scrollY, [12800, 13000], [150, 0]);        
    const transform = useMotionTemplate`translate3d(0px, 0px, ${smoothZ}px)`;

    useMotionValueEvent(strokeDashoffsetBack, 'change', (value) => {
        smoothStrokeDashoffset.set(value);
    })

    useMotionValueEvent(translateZBack, 'change', (value) => {
        smoothZ.set(value);
    });

    useMotionValueEvent(scrollY, 'change', (value) => {
        if(value < 8000 || value > 14000)
            setMount(false);
        else
            setMount(true);
    });

    return(
        <AnimatePresence>
            {
                mount &&  
                <motion.div id='inner most triangle' className={styles.container} style={{transform}} exit={{opacity: 0}}>
                    <motion.svg className={styles.svg} viewBox={"0 0 206.40488 206.40488"}>
                        <defs>
                            <filter id='glowEffectInnerTriangle' filterUnits="userSpaceOnUse" x="-20%" y="-20%" width="140%" height="140%">
                                <feDropShadow dx="0" dy="0" stdDeviation="7" floodColor="#0400ff" floodOpacity={1}/>
                            </filter>  
                            <clipPath clipPathUnits="userSpaceOnUse" id="clipPath30">
                                <path 
                                    style={{transform: 'translate(-77.5px, -78px)'}}
                                    d="m 153.32703,106.92437
                                    h 134.6184
                                    v 134.82855
                                    h -134.6184
                                    z
                                    m 74.6163,49.29462
                                        1.07145,3.99177
                                        -10.71036,10.2222
                                        -4.07439,-1.13067
                                        1.07262,3.996
                                        -9.21141,8.79093
                                        -3.98466,-1.07073
                                        1.12248,4.03884
                                        2.83176,-2.78001
                                        14.31774,4.04739
                                        1.08261,4.03245
                                        2.98935,-2.88126
                                        12.63456,3.57201
                                        1.05489,3.93867
                                        3.0177,-2.90556
                                        -4.00986,-1.11528
                                        -3.29652,-12.52836
                                        2.91528,-2.81007
                                        -3.9429,-1.09449
                                        -3.76245,-14.29893
                                        2.98304,-2.87649
                                    z"
                                />
                            </clipPath>
                        </defs>
                        {/* outer border for triangle*/}
                        <g transform='translate(-65, 36)'>
                            <motion.path
                                filter={'url(#glowEffectInnerTriangle)'}
                                className={styles.outer_border}
                                id="path26"
                                d="m 163.28463,116.90532
                                -39.6608,-11.0008
                                    29.35744,-28.8468
                                    z"
                                fill="none"
                                clipPath={'url(#clipPath30)'}
                                stroke="#0400ff"
                                strokeWidth={4}
                                strokeDasharray={130}
                                style={{strokeDashoffset: smoothStrokeDashoffset, transform: 'rotate(-15deg)'}}
                                />
                        </g>
                        <g transform='translate(-13, -14)'>
                            <motion.image
                                filter={'url(#glowEffectInnerTriangle)'}
                                width={25}
                                href={images['sunEarthText']}
                                style={{opacity: opacitySmooth}}
                                x={101.79}
                                y={102.1}
                            />                            
                        </g>

                    </motion.svg>
                </motion.div>  
            }            
        </AnimatePresence>

    )
}

export default InnerMostTriangle;