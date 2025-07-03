import React, {useContext, useState} from 'react';
import { ContainerContext } from '!/AnimateBackgroundPattern';
import {motion, useTransform, useSpring, useScroll, useMotionValueEvent, AnimatePresence} from 'framer-motion';
import * as styles from './styles.module.css';

function OuterMostSquare() {
    const [mount, setMount] = useState(false);
    const {MainContainerRef} = useContext(ContainerContext);
    const {scrollY} = useScroll(MainContainerRef);
    const strokeDashoffsetOuterBorder = useTransform(scrollY, [2500, 4200], [55, 0]);
    const smoothDashoffsetOuterBorder = useSpring(strokeDashoffsetOuterBorder, {stiffness: 150, damping: 80});

    const strokeDashoffsetInnerBorder = useTransform(scrollY, [7000, 7500], [55, 0]);
    const smoothStrokeDashoffsetInnerBorder = useSpring(strokeDashoffsetInnerBorder, {stiffness: 150, damping: 80});

    const opacity = useTransform(scrollY, [6700, 7200], [0, 1]);
    const opacitySmooth = useSpring(opacity, {stiffness: 150, damping: 80});

    useMotionValueEvent(scrollY, 'change', (value) => {
        if(value < 6000)
            setMount(false);
        else
            setMount(true);
    })

    return(
            <svg className={styles.container} viewBox={"0 0 206.40488 206.40488"}>
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
                <g transform="translate(-47.8, -12.5)">        
                    {/* outer border*/}
                        <motion.path
                            fill="none"
                            stroke="#0400ff"
                            strokeWidth={0.164006}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit={0}
                            strokeDasharray={55}
                            style={{strokeDashoffset: smoothDashoffsetOuterBorder}}
                            d="m 150.67604,106.23255 9.34609,9.05688 -8.62065,8.73702 -9.3461,-9.05688 z"
                            id="rect704-3-9-6"
                            />
                    <AnimatePresence>
                        {/* inner border */}
                        {mount && <motion.path
                            fill="none"
                            stroke="#0400ff"
                            strokeWidth={0.138539}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit={0}
                            strokeDasharray={55}
                            style={{strokeDashoffset: smoothStrokeDashoffsetInnerBorder}}
                            d="m 182.95529,-27.496716 h 10.99335 v 10.367864 h -10.99335 z"
                            id="rect704-3-9"
                            transform="matrix(0.71813035,0.69590861,-0.70235073,0.71183106,0,0)"
                            initial={{opacity: 1}}
                            exit={{opacity: 0}}
                            />}
                        {mount && <motion.text
                            xmlSpace="preserve"
                            fontSize={0.485107}
                            fontFamily="PMingLiU-ExtB"
                            textAnchor="start"
                            fill="none"
                            fillOpacity={1}
                            stroke="#0400ff"
                            strokeWidth={0.0290147}
                            strokeLinecap="round"
                            strokeLinejoin="bevel"
                            strokeMiterlimit={0}
                            direction="ltr"
                            transform="matrix(1.0509263,0,0,1.0559941,-7.6488517,-6.5054218)"
                            id="text12"
                            style={{opacity: opacitySmooth}}
                            >
                                <textPath
                                    xlinkHref="#rect704-3-9"
                                    id="textPath12"
                                    fontSize={0.485107}
                                    strokeWidth={0.0290147}
                                    initial={{opacity: 1}}
                                    exit={{opacity: 0}}
                                >
                                    IN·ORBE·MEO·PULCHRITUDINEM·EX·NIHILO·CREABO.·TUA·SOCIETAS·CUM·INGENIIS·MEIS·FLOREBIT.·FORTUNA·APUD·ME·CRESCET·CUM·OMNI·CODICE·QUEM·EGO·SCRIBAM·HOC·POLLICEOR.
                                </textPath>
                            </motion.text>}
                    </AnimatePresence>
                    
                </g>
            </svg>
    )
}

export default OuterMostSquare;