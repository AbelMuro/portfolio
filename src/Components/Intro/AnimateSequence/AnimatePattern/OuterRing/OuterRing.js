import React, {useContext, useState} from 'react'
import {ContainerContext} from '!/Intro'
import {useViewBoxZoom} from '~/Hooks'
import * as styles from './styles.module.css';
import { motion, useScroll, useMotionValueEvent, AnimatePresence} from 'framer-motion';

function OuterRing() {
    const [mount, setMount] = useState(true);
    const {MainContainerRef} = useContext(ContainerContext);
    const [viewBox] = useViewBoxZoom([0.04, 0.10], 1, 4, MainContainerRef)
    const {scrollYProgress} = useScroll(MainContainerRef);

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
                <motion.svg 
                    id='outer ring' 
                    className={styles.container} 
                    viewBox={viewBox} 
                    initial={{opacity: 1}}
                    exit={{opacity: 0, transition: {duration: 0.7}}}
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
                        <path
                            id="midCirclePath"
                            d="
                                M 167.784871,102.63359
                                A 64.582431,64.582431 0 1,0 38.619999,102.63359
                                A 64.582431,64.582431 0 1,0 167.784871,102.63359
                            "
                            />
                    </defs>
                    <motion.g                 
                        initial={{rotate: 0}} 
                        animate={{rotate: [0, 360]}} 
                        transition={{repeat: Infinity, duration: 18.9, ease: 'linear'}}>
                            <circle filter={'url(#glowEffect)'}
                                id="path1-82"
                                cx={103.20244}
                                cy={102.63359}
                                r={70.577517}
                                fill="none"
                                stroke="#0400ff"
                                strokeWidth={0.816548}
                                strokeLinejoin="bevel"
                                strokeMiterlimit={0}
                                strokeDasharray="none"
                                />


                                <path filter={'url(#glowEffect)'}
                                id="path1-8-4"
                                d="M 103.20244,102.63359
                                    m -58.587345,0
                                    a 58.587345,58.587345 0 1,0 117.17469,0
                                    a 58.587345,58.587345 0 1,0 -117.17469,0"
                                fill="none"
                                stroke="#0400ff"
                                strokeWidth={0.819517}
                                strokeLinejoin="bevel"
                                strokeMiterlimit={0}
                                strokeDasharray="none"
                                />

                                <text
                                    xmlSpace="preserve"
                                    fontSize="6.35px"   
                                    fontFamily="PMingLiU-ExtB"                           
                                    fill="#0400ff"
                                    stroke="none"
                                    strokeWidth={0}
                                    id="text1874"

                                    >
                                    <textPath xlinkHref="#midCirclePath" id="textPath1874">
                                        <tspan id="tspan1874" dominantBaseline="central">
                                            ECCE⋅OMNIA⋅MEA⋅OPERA⋅QVAE⋅NEGOTIVM⋅TVVM⋅IN⋅SOMNIVM⋅QVOD⋅PER⋅VITAM⋅TVAM⋅CONCEPISTI⋅CONVERTENT⋅
                                        </tspan>
                                    </textPath>
                            </text>
                                            
                    </motion.g>
                </motion.svg>
            }
        </AnimatePresence>
    )
}

export default OuterRing;