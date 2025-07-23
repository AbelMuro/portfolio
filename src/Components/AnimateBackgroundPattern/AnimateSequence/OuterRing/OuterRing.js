import React, {useState} from 'react'
import * as styles from './styles.module.css';
import {LinearRing} from '~/Transitions';
import { motion, useScroll, useMotionValueEvent, AnimatePresence, useTransform, useSpring} from 'framer-motion';
import images from './images';


function OuterRing() {
    const [mount, setMount] = useState(true);
    const {scrollY} = useScroll();
    const scale = useTransform(scrollY, [200, 1400], [1, 5])
    const smoothScale = useSpring(scale, LinearRing);

    useMotionValueEvent(scrollY, 'change', (value) => {
        if(value > 1000)
            setMount(false)
        else
            setMount(true)
    })


    return(

        <AnimatePresence>
            {
                mount &&
                <motion.div      
                        id='outer ring'   
                        className={styles.container}                
                        initial={{rotate: 0, opacity: 1}} 
                        animate={{rotate: [0, 360], transition: {repeat: Infinity, duration: 18.9, ease: 'linear', delay: 1}}} 
                        exit={{opacity: 0}}
                        style={{scale: smoothScale}}
                        >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className={styles.svg} 
                        viewBox={"0 0 206.40488 206.40488"} 
                        >
                        <defs>
                            <filter id='glowEffectOuterRing'>
                                <motion.feGaussianBlur 
                                    in="SourceAlpha" 
                                    result="blur"
                                    initial={{stdDeviation: 4}}
                                    animate={{stdDeviation: [4, 2, 4], transition: {duration: 3, repeat: Infinity, ease: 'linear'}}}
                                    />
                                <feFlood floodColor="#0400ff" floodOpacity='0.8' result="color"/>
                                <feComposite in="color" in2="blur" operator="in" result="glow"/>
                                <feMerge>
                                    <feMergeNode in="glow"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                        </defs>
                            <image
                                x={103.20244 - 100.2}
                                y={103.20244 - 100.5}
                                filter={'url(#glowEffectOuterRing)'}
                                href={images['outerRing']}
                                className={styles.outerRing}
                            />
                    </svg>

               </motion.div>     
            }                    
        
        </AnimatePresence>
    )
}

export default OuterRing;