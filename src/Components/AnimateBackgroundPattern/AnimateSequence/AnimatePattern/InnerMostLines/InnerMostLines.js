import React, {useContext} from 'react';
import {ContainerContext} from '!/AnimateBackgroundPattern'
import FadeOutPath from './FadeOutPaths';
import {motion, useTransform, useSpring, useScroll} from 'framer-motion';
import * as styles from './styles.module.css';

function InnerMostLines() {
    const {MainContainerRef} = useContext(ContainerContext)
    const {scrollY} = useScroll(MainContainerRef);
    const scale = useTransform(scrollY, [600, 1800], [1, 5])
    const smoothScale = useSpring(scale, {stiffness: 150, damping: 80});


    return(
        <motion.div 
            id='inner most lines'
            className={styles.container}
            style={{scale: smoothScale}}
        >
            <svg className={styles.svg} viewBox={"0 0 206.40488 206.40488"}>
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
                { /* north line */ }
                    <FadeOutPath
                        id="path1429"
                        d="M 103.191,0.876 L 103.191,46.316"
                        fill="none"
                        fillOpacity={1}
                        stroke="#0400ff"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="bevel"
                        strokeMiterlimit={0}
                        strokeDasharray="none"
                        strokeOpacity={1}
                        />
                    {/* east line*/}
                    <FadeOutPath
                        id="path1429-7"
                        d="M 210.403,103.396 L 154.008,103.993"
                        fill="none"
                        fillOpacity={1}
                        stroke="#0400ff"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="bevel"
                        strokeMiterlimit={1}
                        strokeDasharray="none"
                        strokeOpacity={1}
                        />
                    {/* south line*/}
                    <FadeOutPath
                        id="path1429-7-8"
                        d="M 101.223,207.389 L 100.809,148.945"
                        fill="none"
                        fillOpacity={1}
                        stroke="#0400ff"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="bevel"
                        strokeMiterlimit={0}
                        strokeDasharray="none"
                        strokeOpacity={1}
                        />

                    {/* west line*/}
                    <FadeOutPath
                        id="path1429-5"
                        d="M 1.923,104.057 L 52.723,104.002"
                        fill="none"
                        fillOpacity={1}
                        stroke="#0400ff"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="bevel"
                        strokeMiterlimit={0}
                        strokeDasharray="none"
                        strokeOpacity={1}
                        />
                </svg>
        </motion.div>

    )
}

export default InnerMostLines;