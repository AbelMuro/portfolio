import React, {useContext, useState} from 'react'
import {ContainerContext} from '!/Intro'
import {useViewBoxZoom} from '~/Hooks'
import * as styles from './styles.module.css';
import { motion, useScroll, useMotionValueEvent, AnimatePresence, useTransform, useSpring} from 'framer-motion';
import images from './images';



function OuterRing() {
    const [mount, setMount] = useState(true);
    const {MainContainerRef} = useContext(ContainerContext);
    //const [viewBox] = useViewBoxZoom([0.04, 0.10], 1, 4, MainContainerRef)
    const {scrollYProgress} = useScroll(MainContainerRef);
    const scale = useTransform(scrollYProgress, [0.04, 0.10], [1, 3])
    const smoothScale = useSpring(scale, {stiffness: 150, damping: 80});

    useMotionValueEvent(scrollYProgress, 'change', (value) => {
        if(value > 0.10)
            setMount(false)
        else
            setMount(true)
    })
    

    return(

        <AnimatePresence>
            {
                mount &&
                <motion.div         
                        className={styles.container}                
                        initial={{rotate: 0, opacity: 1}} 
                        animate={{rotate: [0, 360], transition: {repeat: Infinity, duration: 18.9, ease: 'linear', delay: 1}}} 
                        exit={{opacity: 0, transition: {duration: 0.7}}}
                        style={{scale: smoothScale}}
                        >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg"
                        id='outer ring' 
                        className={styles.svg} 
                        viewBox={"0 0 206.40488 206.40488"} 
                        >
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
                            <image
                                x={103.20244 - 146.2}
                                y={103.20244 - 144.5}
                                filter={'url(#glowEffect)'}
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