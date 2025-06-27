import React, {useContext, useState} from 'react';
import {ContainerContext} from '!/Intro';
import { useViewBoxZoom } from '~/Hooks';
import { motion, useScroll, useMotionValueEvent, AnimatePresence, useMotionValue} from 'framer-motion';
import * as styles from './styles.module.css';

function InnerRing() {
    const [mount, setMount] = useState(true);
    const x = useMotionValue(-47.929077);
    const y = useMotionValue(-13.484006);
    const {MainContainerRef} = useContext(ContainerContext);
    const [viewBox] = useViewBoxZoom([0.08, 0.14], 1, 4, MainContainerRef)
    const {scrollYProgress} = useScroll(MainContainerRef);

    useMotionValueEvent(scrollYProgress, 'change', (value) => {
        if(value > 0.14)
            setMount(false)
        else
            setMount(true)
    })

    return(
        <AnimatePresence>
            {
                mount &&
                <motion.svg 
                    id='inner ring' 
                    className={styles.container} 
                    viewBox={viewBox} 
                    initial={{opacity: 1}}
                    exit={{opacity: 0, transition: {duration: 0.7}}}>
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
                    <motion.g                     
                        initial={{rotate: 0}} 
                        animate={{rotate: [360, 0]}} 
                        transition={{repeat: Infinity, duration: 21.9, ease: 'linear'}}
                        style={{x, y}}>
                            <circle filter={'url(#glowEffect)'}
                                fill="none"
                                fillOpacity={1}
                                stroke="#0400ff"
                                strokeWidth={0.784}
                                strokeLinecap="round"
                                strokeLinejoin="bevel"
                                strokeMiterlimit={0}
                                strokeDasharray="63.8888, 1.6642, 0.832106, 1.6642"
                                strokeDashoffset={0}
                                strokeOpacity={1}
                                id="path1874"
                                cx={150.88811}
                                cy={115.90026}
                                r={50.127975}
                                />

                                <path filter={'url(#glowEffect)'}
                                id="path1881"
                                d="m 133.16036,63.282743 -5.28436,0.244594 2.43035,-4.698683 z"
                                transform="matrix(0.60546262,0.55945453,-0.55945453,0.60546262,139.45712,-35.314765)"
                                fill="#0400ff"
                                fillOpacity={1}
                                stroke="#0400ff"
                                strokeWidth={0.2}
                                strokeLinecap="round"
                                strokeLinejoin="bevel"
                                strokeMiterlimit={0}
                                strokeDasharray="none"
                                strokeDashoffset={0}
                                strokeOpacity={1}
                                />


                                <path filter={'url(#glowEffect)'}
                                fill="none"
                                fillOpacity={1}
                                stroke="#0400ff"
                                strokeWidth={0.5}
                                strokeLinecap="round"
                                strokeLinejoin="bevel"
                                strokeMiterlimit={0}
                                strokeDasharray="none"
                                strokeDashoffset={0}
                                strokeOpacity={1}
                                id="path1882"
                                d="m 147.61295,64.077871 -5.22505,0.02326 2.59238,-4.536659 z"
                                transform="matrix(1.0194808,0.87028653,-0.87028653,1.0194808,90.672152,-115.15014)"
                                />
                                <path filter={'url(#glowEffect)'}
                                fill="#0400ff"
                                fillOpacity={1}
                                stroke="#0400ff"
                                strokeWidth={0.2}
                                strokeLinecap="round"
                                strokeLinejoin="bevel"
                                strokeMiterlimit={0}
                                strokeDasharray="none"
                                strokeDashoffset={0}
                                strokeOpacity={1}
                                id="path1881-8"
                                d="m 133.16036,63.282743 -5.28436,0.244594 2.43035,-4.698683 z"
                                transform="matrix(-0.61635705,0.54742884,-0.54742884,-0.61635705,302.30176,119.29641)"
                                />
                                <path filter={'url(#glowEffect)'}
                                    fill="none"
                                    fillOpacity={1}
                                    stroke="#0400ff"
                                    strokeWidth={0.5}
                                    strokeLinecap="round"
                                    strokeLinejoin="bevel"
                                    strokeMiterlimit={0}
                                    strokeDasharray="none"
                                    strokeDashoffset={0}
                                    strokeOpacity={1}
                                    id="path1882-6"
                                    d="m 147.61295,64.077871 -5.22505,0.02326 2.59238,-4.536659 z"
                                    transform="matrix(-0.9664479,0.92882635,-0.92882635,-0.9664479,386.55312,78.610161)"
                                    />
                                <path filter={'url(#glowEffect)'}
                                fill="#0400ff"
                                fillOpacity={1}
                                stroke="#0400ff"
                                strokeWidth={0.2}
                                strokeLinecap="round"
                                strokeLinejoin="bevel"
                                strokeMiterlimit={0}
                                strokeDasharray="none"
                                strokeDashoffset={0}
                                strokeOpacity={1}
                                id="path1881-5"
                                d="m 133.16036,63.282743 -5.28436,0.244594 2.43035,-4.698683 z"
                                transform="matrix(-0.56320627,-0.60197429,0.60197429,-0.56320627,150.02737,266.18221)"
                                />
                                <path filter={'url(#glowEffect)'}
                                fill="none"
                                fillOpacity={1}
                                stroke="#0400ff"
                                strokeWidth={0.5}
                                strokeLinecap="round"
                                strokeLinejoin="bevel"
                                strokeMiterlimit={0}
                                strokeDasharray="none"
                                strokeDashoffset={0}
                                strokeOpacity={1}
                                id="path1882-8"
                                d="m 147.61295,64.077871 -5.22505,0.02326 2.59238,-4.536659 z"
                                transform="matrix(-0.9535417,-0.94207115,0.94207115,-0.9535417,192.88173,349.35171)"
                                />
                                <path filter={'url(#glowEffect)'}
                                fill="#0400ff"
                                fillOpacity={1}
                                stroke="#0400ff"
                                strokeWidth={0.2}
                                strokeLinecap="round"
                                strokeLinejoin="bevel"
                                strokeMiterlimit={0}
                                strokeDasharray="none"
                                strokeDashoffset={0}
                                strokeOpacity={1}
                                id="path1881-3"
                                d="m 133.16036,63.282743 -5.28436,0.244594 2.43035,-4.698683 z"
                                transform="matrix(0.64583158,-0.51232405,0.51232405,0.64583158,1.6094002,102.33684)"
                                />
                                <path filter={'url(#glowEffect)'}
                                fill="none"
                                fillOpacity={1}
                                stroke="#0400ff"
                                strokeWidth={0.5}
                                strokeLinecap="round"
                                strokeLinejoin="bevel"
                                strokeMiterlimit={0}
                                strokeDasharray="none"
                                strokeDashoffset={0}
                                strokeOpacity={1}
                                id="path1882-9"
                                d="m 147.61295,64.077871 -5.22505,0.02326 2.59238,-4.536659 z"
                                transform="matrix(1.0165801,-0.87367307,0.87367307,1.0165801,-84.773145,138.27731)"
                                />
                                
                                <text
                                xmlSpace="preserve"
                                fontSize="2.87823px"
                                fontWeight='600'
                                fontFamily="PMingLiU-ExtB"                   
                                fill="#0400ff"
                                fillOpacity={1}
                                stroke="none"
                                strokeWidth={0}
                                x={144.22142}
                                y={64.169212}
                                id="text1884"
                                >
                                <tspan
                                    id="tspan1884"
                                    x={144.22142}
                                    y={64.169212}
                                >
                                    INFINITAS
                                </tspan>
                                </text>

                                <text
                                    xmlSpace="preserve"
                                    fontSize="2.80857px"                   
                                    fontFamily="PMingLiU-ExtB"
                                    fontWeight='600'
                                    fill="#0400ff"
                                    fillOpacity={1}
                                    stroke="none"
                                    strokeWidth={0}
                                    x={111.80479}
                                    y={-202.24454}
                                    id="text1885"
                                    transform="rotate(90)"
                                    >
                                <tspan
                                    id="tspan1885"
                                    x={111.80479}
                                    y={-202.24454}
                                >
                                    INFINITUS
                                </tspan>
                                </text>

                                <text
                                    xmlSpace="preserve"
                                    fontSize="3.00258px"
                                    fontFamily="PMingLiU-ExtB"
                                    fontWeight='600'
                                    fill="#0400ff"
                                    stroke="none"
                                    strokeWidth={0}
                                    x={-155.90329}
                                    y={-169.69052}
                                    id="text1886"
                                    transform="rotate(179.16841)"
                                    >
                                <tspan
                                    id="tspan1886"
                                    x={-155.90329}
                                    y={-169.69052}
                                >
                                    PERSTARE
                                </tspan>
                                </text>

                                <text
                                xmlSpace="preserve"
                                fontSize="3.02242px"
                                fontFamily="PMingLiU-ExtB"
                                fontWeight='600'
                                fill="#0400ff"
                                stroke="none"
                                strokeWidth={0}
                                x={-124.78553}
                                y={97.127647}
                                id="text1887"
                                transform="rotate(-91.149087)"
                                >
                                <tspan
                                    id="tspan1887"
                                    x={-124.78553}
                                    y={97.127647}
                                >
                                    DECISUS
                                </tspan>
                                </text>
                                    <path filter={'url(#glowEffect)'}
                                        id="path1424-5-9"
                                        fill="none"
                                        stroke="#0400ff"
                                        strokeWidth={0.712409}
                                        strokeLinejoin="bevel"
                                        strokeMiterlimit={0}
                                        strokeDasharray="none"
                                        strokeOpacity={1}
                                        transform="matrix(-0.04320334,0.9990663,-0.99907186,-0.04307447,0,0)"
                                        d="m 122.59863,-107.0206 a 10.559102,6.6924191 0 0 1 -4.80193,6.19738 10.559102,6.6924191 0 0 1 -10.8885,0.20942 10.559102,6.6924191 0 0 1 -5.38596,-6.00144"
                                        />
                                        <path filter={'url(#glowEffect)'}
                                        id="path1424-6"
                                        fill="none"
                                        stroke="#0400ff"
                                        strokeWidth={0.712409}
                                        strokeLinejoin="bevel"
                                        strokeMiterlimit={0}
                                        strokeDasharray="none"
                                        strokeOpacity={1}
                                        transform="matrix(-0.99990914,-0.01348023,0.01335125,-0.99991087,0,0)"
                                        d="m -140.83584,-64.98838 a 10.559102,6.6924191 0 0 1 -4.80193,6.19738 10.559102,6.6924191 0 0 1 -10.8885,0.209415 10.559102,6.6924191 0 0 1 -5.38597,-6.001439"
                                        />
                                        <path filter={'url(#glowEffect)'}
                                        id="path1424-5-8"
                                        fill="none"
                                        stroke="#0400ff"
                                        strokeWidth={0.712409}
                                        strokeLinejoin="bevel"
                                        strokeMiterlimit={0}
                                        strokeDasharray="none"
                                        strokeOpacity={1}
                                        transform="matrix(0.06511698,-0.99787764,0.99788603,0.06498827,0,0)"
                                        d="m -94.621317,207.16005 a 10.559102,6.6924191 0 0 1 -4.801926,6.19738 10.559102,6.6924191 0 0 1 -10.888497,0.20941 10.559102,6.6924191 0 0 1 -5.38597,-6.00143"
                                        />
                                        <path filter={'url(#glowEffect)'}
                                        id="path1424-5-5"
                                        fill="none"
                                        stroke="#0400ff"
                                        strokeWidth={0.712409}
                                        strokeLinejoin="bevel"
                                        strokeMiterlimit={0}
                                        strokeDasharray="none"
                                        strokeOpacity={1}
                                        transform="matrix(0.99997,0.00774618,-0.00761719,0.99997099,0,0)"
                                        d="m 163.15807,163.91393 a 10.559102,6.6924191 0 0 1 -4.80192,6.19738 10.559102,6.6924191 0 0 1 -10.8885,0.20941 10.559102,6.6924191 0 0 1 -5.38597,-6.00144"
                                        />
                            </motion.g>
                </motion.svg>
            }
        </AnimatePresence>
    )
}

export default InnerRing;