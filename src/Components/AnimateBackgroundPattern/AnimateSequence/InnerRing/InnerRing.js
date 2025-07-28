import React, {useContext, useState} from 'react';
import {ContainerContext} from '!/AnimateBackgroundPattern';
import {LinearRing} from '~/Transitions';
import { motion, useScroll, useMotionValueEvent, AnimatePresence, useTransform, useSpring} from 'framer-motion';
import * as styles from './styles.module.css';
import images from './images';

function InnerRing() {
    const [mount, setMount] = useState(true);
    const {scrollY} = useScroll();
    const scale = useTransform(scrollY, [400, 1600], [1, 5])
    const smoothScale = useSpring(scale, LinearRing);

    useMotionValueEvent(scrollY, 'change', (value) => {
        if(value > 1400)
            setMount(false)
        else
            setMount(true)
    })

    return(
        <AnimatePresence>
            {
                mount &&
                <motion.div 
                    id='inner ring' 
                    className={styles.container}
                    initial={{rotate: 0, opacity: 1}} 
                    animate={{rotate: [360, 0], transition: {repeat: Infinity, duration: 21.9, ease: 'linear', delay: 2}}}
                    exit={{opacity: 0}}
                    style={{scale: smoothScale}}
                    >
                    <svg className={styles.svg} viewBox={"0 0 206.40488 206.40488"}>
                        <defs>
                            <filter id='glowEffectInnerRing'>
                                <motion.feGaussianBlur 
                                    in="SourceAlpha" 
                                    result="blur"
                                    initial={{stdDeviation: 4}}
                                    animate={{stdDeviation: [4, 2, 4], transition: {duration: 3, repeat: Infinity, ease: 'linear'}}}
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
                            x={103.20244 - 85}
                            y={103.20244 - 85}
                            className={styles.ring}
                            href={images['innerRing']}
                            filter={'url(#glowEffectInnerRing)'}
                            />
                    </svg>
                </motion.div>
            }
        </AnimatePresence>
    )
}

export default InnerRing;