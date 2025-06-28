import React, {useContext, useState} from 'react';
import {ContainerContext} from '!/Intro';
import {useViewBoxZoom} from '~/Hooks';
import {motion, useMotionValueEvent, useScroll, AnimatePresence, useTransform, useSpring} from 'framer-motion';
import * as styles from './styles.module.css';
import images from './images';

//viewBox="0 0 206.40488 205.26718"

function OuterMostRing(){
    const [mount, setMount] = useState(true);
    const {MainContainerRef} = useContext(ContainerContext);
    //const [viewBox] = useViewBoxZoom([0, 0.06], 1, 3.5, MainContainerRef);
    const {scrollYProgress} = useScroll(MainContainerRef);
    const scale = useTransform(scrollYProgress, [0, 0.06], [1, 3])
    const smoothScale = useSpring(scale, {stiffness: 150, damping: 80});

    useMotionValueEvent(scrollYProgress, 'change', (value) => {
        if(value > 0.06)
            setMount(false)
        else
            setMount(true)
    })

    return(
        <AnimatePresence>
            {
                mount &&
                    <motion.svg className={styles.container} viewBox="0 0 206.40488 205.26718" initial={{opacity: 1}} exit={{opacity: 0}}>
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
                        <motion.image
                            key='outer most ring' 
                            x={103.20244 - 101} // half of image width
                            y={102.63359 - 100} // half of image height
                            className={styles.outerRing} 
                            href={images['outerMostRing']} 
                            filter='url(#glowEffect)'
                            style={{scale: smoothScale}}
                        />

                    </motion.svg>
            }

        </AnimatePresence>
    )
}

export default OuterMostRing;
