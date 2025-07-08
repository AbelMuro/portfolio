import React, {useState, useContext} from 'react';
import images from './images';
import {ContainerContext} from '!/AnimateBackgroundPattern';
import {motion, useTransform, useSpring, AnimatePresence, useScroll, useMotionValueEvent} from 'framer-motion';
import * as styles from './styles.module.css';

function InnerSquare(){
    const [mount, setMount] = useState(false);
    const {MainContainerRef} = useContext(ContainerContext);
    const {scrollY} = useScroll(MainContainerRef);

    const strokeDashoffset = useTransform(scrollY, [8300, 8800], [55, 0]);
    const smoothStrokeDashoffset = useSpring(strokeDashoffset, {stiffness: 150, damping: 80});

    const opacity = useTransform(scrollY, [8500, 9000], [0, 1])
    const opacitySmooth = useSpring(opacity, {stiffness: 150, damping: 80});

    const z = useTransform(scrollY, [8500, 9000], [0, 10]);
    const smoothZ = useSpring(z, {stiffness: 150, damping: 80});
    const transform = useTransform(smoothZ, (value) => {
        return `translateZ(${value}px)`;
    })

    const translateZBack = useTransform(scrollY, [11600, 12000], [10, 0]);

    useMotionValueEvent(translateZBack, 'change', (value) => {
        smoothZ.set(value);
    })

    useMotionValueEvent(scrollY, 'change', (value) => {
        if(value < 7000 || value > 12200)
            setMount(false);
        else
            setMount(true);
    })

    return(
        <AnimatePresence>
            {
            mount &&   
                <motion.div id='inner square' className={styles.container} style={{transform}} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
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
                        <g transform='translate(-47.8, -12.5)'>
                                <motion.path
                                    filter={'url(#glowEffect)'}
                                    stroke="#0400ff"
                                    strokeWidth={0.180642}
                                    fill='none'
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeMiterlimit={0}
                                    strokeDasharray={55}
                                    style={{strokeDashoffset: smoothStrokeDashoffset}}
                                    d="m 149.39848,111.34959 5.47999,2.4513 -2.35828,5.14715 -5.48001,-2.4513 z"
                                    id="rect704-3-9-2-1"
                                    />
                                
                                <motion.path
                                    filter={'url(#glowEffect)'}
                                    stroke="#0400ff"
                                    strokeWidth={0.180642}
                                    fill='none'
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeMiterlimit={0}
                                    strokeDasharray={55}
                                    style={{strokeDashoffset: smoothStrokeDashoffset}}
                                    d="m 149.73914,112.2145 4.29121,1.91952 -1.8467,4.03059 -4.29122,-1.91954 z"
                                    id="rect704-3-9-2-1-2"
                                />
                                <motion.g style={{opacity: opacitySmooth}}>
                                    <motion.image 
                                            className={styles.innerSquareDesign}
                                            x={147.1} // half of image width
                                            y={111.4} // half of image height
                                            href={images['innerSquareDesign']}
                                            filter={'url(#glowEffect)'}
                                            />                                    
                                </motion.g>
 
                        </g>
                    </motion.svg>
                </motion.div>  
            }

        </AnimatePresence>

    )
}

export default InnerSquare;