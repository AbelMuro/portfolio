import React from 'react';
import images from './images';
import {motion} from 'framer-motion';
import * as styles from './styles.module.css'


function AnimateClock() {
    return(
        <svg className={styles.container} viewBox={'0 0 306 306'}>
            <defs>
                <filter id='glowEffect'>
                    <feGaussianBlur 
                        in="SourceAlpha" 
                        result="blur"
                        stdDeviation={2}
                        />
                    <feFlood floodColor="#0400ff" floodOpacity='1' result="color"/>
                    <feComposite in="color" in2="blur" operator="in" result="glow"/>
                    <feMerge>
                        <feMergeNode in="glow"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            <image 
                filter={'url(#glowEffect)'}
                className={styles.clock}
                href={images['innerClock']}
                />
            <motion.image 
                filter={'url(#glowEffect)'}
                className={styles.clock}
                initial={{rotate: 0}}
                animate={{rotate: [0, 360], transition: {duration: 4.9, repeat: Infinity, repeatType: 'loop', ease: 'linear'}}}
                href={images['clockBorder']}
            />
            <g transform='translate(32, 7)' id='minute hand'>
                <motion.image 
                    initial={{rotate: 0}}
                    animate={{rotate: [0, 360], transition: {duration: 0.9, repeat: Infinity, repeatType: 'loop', ease: 'linear'}}}
                    className={styles.clockHands}
                    href={images['minuteHand']}   
                    />
            </g>
            <g transform='translate(32, 9)' id='hour hand'>
                <motion.image 
                    initial={{rotate: 0}}
                    animate={{rotate: [0, 360], transition: {duration: 2.3, repeat: Infinity, repeatType: 'loop', ease: 'linear'}}}
                    className={styles.clockHands}
                    href={images['hourHand']}   
                    />
            </g>
        </svg>
    )
}

export default AnimateClock;