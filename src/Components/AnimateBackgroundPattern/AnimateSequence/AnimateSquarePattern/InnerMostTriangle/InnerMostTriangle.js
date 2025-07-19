import React, {useState} from 'react';
import images from './images';
import {motion, useTransform, useSpring, useScroll, AnimatePresence, useMotionValueEvent} from 'framer-motion';
import * as styles from './styles.module.css';

function InnerMostTriangle() {
    const [mount, setMount] = useState(false);
    const {scrollY} = useScroll();

    const opacity = useTransform(scrollY, [9500, 10000], [0, 1])
    const opacitySmooth = useSpring(opacity, {stiffness: 150, damping: 80});

    const scale = useTransform(scrollY, [600, 1800], [1, 5]);
    const scaleSmooth = useSpring(scale, {stiffness: 150, damping: 80});
    const scaleMore = useTransform(scrollY, [6500, 7000], [5, 10]);

    const strokeDashoffset = useTransform(scrollY, [9000, 9500], [13, 0]);
    const smoothStrokeDashoffset = useSpring(strokeDashoffset, {stiffness: 150, damping: 80});
    const strokeDashoffsetBack = useTransform(scrollY, [13200, 13500], [0, 13]);

    const z = useTransform(scrollY, [8500, 9000], [0, 100]);
    const smoothZ = useSpring(z, {stiffness: 150, damping: 80});
    const transform = useTransform(smoothZ, (value) => {
        return `translateZ(${value}px)`;
    });

    const translateZBack = useTransform(scrollY, [12800, 13000], [100, 0]);    

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

    useMotionValueEvent(scaleMore, 'change', (value) => {
        scaleSmooth.set(value);
    });

    return(
        <AnimatePresence>
            {
                mount &&  
                <motion.div id='inner most triangle' className={styles.container} style={{transform}} exit={{opacity: 0}}>
                    <motion.svg className={styles.svg} viewBox={"0 0 206.40488 206.40488"} style={{scale: scaleSmooth}}>
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
                            <clipPath clipPathUnits="userSpaceOnUse" id="clipPath30">
                                <path
                                    id="path30"
                                    d="m 134.05969,108.63792 16.43165,-4.53017 4.42741,16.84449 -16.43165,4.53017 z
                                    m 10.72644,3.64752 0.26186,0.46265 -0.97164,1.63752 -0.53446,-0.004
                                    0.26214,0.46313 -0.83568,1.40826 -0.52154,3.9e-4 0.26964,0.46681
                                    0.25437,-0.44261 1.88053,0.0242 0.26456,0.46736 0.27027,-0.46056
                                    1.65948,0.0215 0.2581,0.45657 0.27293,-0.46455 -0.52607,-0.004
                                    -0.81377,-1.45427 0.26356,-0.44916 -0.51721,-0.004 -0.92878,-1.6598
                                    0.26977,-0.45977 z"
                                />
                            </clipPath>
                        </defs>
                        {/* outer border for triangle*/}
                        <g transform='translate(-47.8, -12.6)'>
                            <motion.path
                                id="path26"
                                d="M147.11259,116.31978 l -4.20203,-0.0286 l 2.1258,-3.62476 L147.11259,116.31978"
                                transform="matrix(0.76546385,-0.0051032,0.00512554,0.7623147,39.203144,28.293281)"
                                clipPath="url(#clipPath30)"
                                fill="none"
                                stroke="#0400ff"
                                strokeWidth={0.948164}
                                strokeDasharray={13}
                                style={{strokeDashoffset: smoothStrokeDashoffset}}
                                />
                        </g>
                        <motion.image
                            className={styles.image}
                            href={images['sunEarthText']}
                            style={{opacity: opacitySmooth}}
                            x={101.79}
                            y={102.1}
                        />
                    </motion.svg>
                </motion.div>  
            }            
        </AnimatePresence>

    )
}

export default InnerMostTriangle;