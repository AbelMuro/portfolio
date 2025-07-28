import React, {useState} from 'react';
import {LinearRing} from '~/Transitions';
import {motion, useMotionValueEvent, useScroll, AnimatePresence, useTransform, useSpring} from 'framer-motion';
import * as styles from './styles.module.css';
import images from './images';

function OuterMostRing(){
    const [mount, setMount] = useState(true);
    const {scrollY} = useScroll();
    const scale = useTransform(scrollY, [0, 1200], [1, 5])
    const smoothScale = useSpring(scale, LinearRing);

    useMotionValueEvent(scrollY, 'change', (value) => {
        if(value > 600)
            setMount(false)
        else
            setMount(true)
    })

    return(
        <AnimatePresence>
            {
                mount &&
                <motion.div 
                    id='outer most ring'
                    className={styles.container}
                    initial={{opacity: 1, rotate: 0}} 
                    animate={{rotate: [360, 0], transition: {repeat: Infinity, duration: 31.9, ease: 'linear'}}} 
                    exit={{opacity: 0}}
                    style={{scale: smoothScale}}
                    >
                    <svg className={styles.container} viewBox="0 0 206.40488 205.26718">
                        <defs>
                            <filter id='glowEffectOuterMostRing'>
                                <feGaussianBlur 
                                    in="SourceAlpha" 
                                    result="blur"
                                    stdDeviation={3}
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
                            key='ring' 
                            x={103.20244 - 101} // half of image width
                            y={102.63359 - 100} // half of image height
                            className={styles.ring} 
                            href={images['outerMostRing']} 
                            filter='url(#glowEffectOuterMostRing)'
                        />

                    </svg>
                </motion.div>
            }
        </AnimatePresence>
    )
}

export default OuterMostRing;
