import React, {useContext, useState} from 'react';
import { ContainerContext } from '!/AnimateBackgroundPattern';
import {motion, useTransform, useSpring, useScroll, useMotionValueEvent, AnimatePresence} from 'framer-motion';
import * as styles from './styles.module.css';

function OuterSquare() {
    const [mount, setMount] = useState(false);
    const {MainContainerRef} = useContext(ContainerContext);
    const {scrollY} = useScroll(MainContainerRef);

    const strokeDashoffset = useTransform(scrollY, [7300, 7800], [55, 0]);
    const smoothStrokeDashoffset = useSpring(strokeDashoffset, {stiffness: 150, damping: 80});
    
    const strokeWidth = useTransform(scrollY, [7800, 8300], [0.2, 0.926389]);
    const smoothStrokeWidth = useSpring(strokeWidth, {stiffness: 150, damping: 80})

    const opacity = useTransform(scrollY, [8000, 8300], [0, 1])
    const opacitySmooth = useSpring(opacity, {stiffness: 150, damping: 80});

    const z = useTransform(scrollY, [8300, 8600], [0, 5]);
    const smoothZ = useSpring(z, {stiffness: 150, damping: 80});
    const transform = useTransform(smoothZ, (value) => {
        return `translateZ(${value}px)`;
    });

    const translateZBack = useTransform(scrollY, [12000, 12400], [5, 0]);

    useMotionValueEvent(translateZBack, 'change', (value) => {
        smoothZ.set(value)
    })

    useMotionValueEvent(scrollY, 'change', (value) => {
        if(value < 6500 || value > 12500)
            setMount(false);
        else
            setMount(true);
    })


    return (
        <AnimatePresence>
            {
                mount &&
                <motion.div id='outer square' className={styles.container} style={{transform}} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                    <motion.svg className={styles.svg} viewBox={"0 0 206.40488 206.40488"}>
                    <defs>
                        <filter id='glowEffect'>
                            <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur">
                                <animate attributeName="stdDeviation" values="2;0;2" dur="3s" repeatCount="indefinite" calcMode="linear"/>
                            </feGaussianBlur>
                            <feFlood floodColor="#0400ff" floodOpacity='0.5' result="color"/>
                            <feComposite in="color" in2="blur" operator="in" result="glow"/>
                            <feMerge>
                                <feMergeNode in="glow"/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                    </defs>

                        <g transform={'translate(-47.8, -12.6)'}>
                            <motion.g>
                                <motion.path
                                    fill="none"
                                    stroke="#0400ff"
                                    filter={'url(#glowEffect)'}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeMiterlimit={0}
                                    strokeDasharray={55}
                                    style={{strokeDashoffset: smoothStrokeDashoffset, strokeWidth: smoothStrokeWidth}}
                                    d="m 149.75952,109.57877 7.01691,4.75075 -4.53987,6.57703 -7.01692,-4.75076 z"
                                    id="rect704-3-9-2"
                                />

                                <motion.text
                                    filter={'url(#glowEffect)'}
                                    xmlSpace="preserve"
                                    fontSize={0.478557}
                                    fontFamily="PMingLiU-ExtB"
                                    textAnchor="start"
                                    direction="ltr"
                                    fill="#000000"
                                    fillOpacity={1}
                                    stroke="#000000"
                                    strokeWidth={0}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeMiterlimit={0}
                                    strokeDasharray="none"
                                    strokeOpacity={1}
                                    transform="matrix(0.96108775,0,0,0.96108775,5.866061,4.534666)"
                                    id="text13"
                                    style={{opacity: opacitySmooth}}
                                    >
                                        <textPath
                                        xlinkHref="#rect704-3-9-2"
                                        id="textPath133"
                                        fontSize={0.478557}
                                        fill="#000000"
                                        fillOpacity={1}
                                        strokeWidth={0}
                                        strokeDasharray="none"
                                        >
                                        FORTUNA·ET·PROSPERITAS·PROPE·SUNT.·ARS·MEA·IN·PROGRESSIONEM·RETIS·TANTUM·AUGEBITUR.·POSSIBILITATES·INFINITAE·SUNT·CUM·MENTE·CRESCENDI.
                                        </textPath>
                                </motion.text>   
                            </motion.g>
                        </g>


                    </motion.svg>
                </motion.div>
            }
        </AnimatePresence>
    )
}

export default OuterSquare;