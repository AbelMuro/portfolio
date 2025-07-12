import React, {useContext, useState, useEffect} from 'react';
import {ContainerContext} from '!/AnimateBackgroundPattern';
import AnimateTechTitles from './AnimateTechTitles';
import Rect from './Rect';
import TechIcon from './TechIcon';
import Circle from './Circle';
import {motion, useScroll, useTransform, useSpring, useMotionValue, useMotionValueEvent, AnimatePresence} from 'framer-motion';
import AnimateCircles from './AnimateCircles';
import * as styles from './styles.module.css';

/* 
    this is where i left off, i need to fix the bug with AnimatePresence in this component, 

    then i can continue to optimize the app by removing the elements that have finished
    their animation, more specifically, the square design components
*/


function AnimatePentagram({scrollThresholds}) {
    const [mount, setMount] = useState(true);
    const x = useMotionValue(-47.929077);
    const y = useMotionValue(-13.484006);
    const {MainContainerRef} = useContext(ContainerContext);
    const {scrollY} = useScroll(MainContainerRef);
    const scrollRange = [
        scrollThresholds[1], scrollThresholds[1] + 1000, 
        scrollThresholds[1] + 2000, scrollThresholds[1] + 3000,
        scrollThresholds[1] + 4000
    ];
    const rotate3DForY = useTransform(scrollY, scrollRange, [0, -35, 0, -35, 0]);
    const rotate3DForX = useTransform(scrollY, scrollRange, [0, 35, 0, -25, 0]);
    const rotate3DSpringY = useSpring(rotate3DForY, {stiffness: 150, damping: 80});
    const rotate3DSpringX = useSpring(rotate3DForX, {stiffness: 150, damping: 80});

    const scale = useTransform(scrollY, [800, 2000], [0.8, 5])
    const smoothScale = useSpring(scale, {stiffness: 150, damping: 80});

    useMotionValueEvent(scrollY, 'change', (value) => {
        if(value > 7000)
            setMount(false)
        else
            setMount(true);
    })


    return( 
        <>
            {mount &&
            <motion.div 
                className={styles.container}
                >
                <motion.svg 
                    id='pentagram' 
                    className={styles.svg} 
                    preserveAspectRatio="xMidYMid meet"
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
                        <motion.g style={{rotateY: rotate3DSpringY, rotateX: rotate3DSpringX, x, y, scale: smoothScale}}>   
                                <AnimateCircles/>                        
                                <Circle filter={'url(#glowEffect)'}
                                    id="path695"
                                    cx={150.95853}
                                    cy={115.17852}
                                    r={14.348076}
                                    fill="none"
                                    stroke="#0400ff"
                                    strokeWidth={0.56101}
                                    strokeLinejoin="bevel"
                                    strokeMiterlimit={0}
                                    strokeDasharray={300}
                                    strokeDashoffset={0}
                                    strokeOpacity={1}
                                    />
                                <TechIcon name={'react'} x={150.71886 - 0.6} y={104.37801 - 0.6} size={'1.4'} scrollThresholds={[3000, 3100]}/>
                                <Circle filter={'url(#glowEffect)'}
                                        id="path697"
                                        cx={150.71886}
                                        cy={104.37801}
                                        r={1.6746536}
                                        fill="none"
                                        stroke="#0400ff"
                                        strokeWidth={0.334931}
                                        strokeLinejoin="bevel"
                                        strokeMiterlimit={0}
                                        strokeDasharray={10.5194}
                                        strokeDashoffset={0}
                                        strokeOpacity={1}
                                        />
                                <TechIcon name={'node'} x={158.61783 - 1.1} y={107.42867 - 1} size={'2.3'} scrollThresholds={[3300, 3400]}/>
                                <Circle filter={'url(#glowEffect)'}
                                    id="path702"
                                    cx={158.61783}
                                    cy={107.42867}
                                    r={1.6746536}
                                    fill="none"
                                    stroke="#0400ff"
                                    strokeWidth={0.334931}
                                    strokeLinejoin="bevel"
                                    strokeMiterlimit={0}
                                    strokeDasharray={10.5194}
                                    strokeDashoffset={0}
                                    strokeOpacity={1}
                                    />
                                <TechIcon name={'express'} x={161.7774 - 1.4} y={114.64666 - 1.5} size={'3.1'} scrollThresholds={[3600, 3700]}/>    
                                <Circle filter={'url(#glowEffect)'}
                                        id="path696"
                                        cx={161.7774}
                                        cy={114.64666}
                                        r={1.6746536}
                                        fill="none"
                                        stroke="#0400ff"
                                        strokeWidth={0.334931}
                                        strokeLinejoin="bevel"
                                        strokeMiterlimit={0}
                                        strokeDasharray={10.5194}
                                        strokeDashoffset={0}
                                        strokeOpacity={1}
                                        />              
                                <TechIcon name={'vue'} x={159.01715 - 1.1} y={122.11411 - 1.2} size={'2.3'} scrollThresholds={[3900, 4000]}/>                         
                                <Circle filter={'url(#glowEffect)'}
                                    id="path700-2"
                                    cx={159.01715}
                                    cy={122.11411}
                                    r={1.6746536}
                                    fill="none"
                                    stroke="#0400ff"
                                    strokeWidth={0.334931}
                                    strokeLinejoin="bevel"
                                    strokeMiterlimit={0}
                                    strokeDasharray={10.5194}
                                    strokeDashoffset={0}
                                    strokeOpacity={1}
                                    />
                                <TechIcon name={'mySQL'} x={151.39981 - 1.4} y={125.92314 - 1.4} size={'3.1'} scrollThresholds={[4200, 4300]}/>
                                <Circle filter={'url(#glowEffect)'}
                                        id="path701"
                                        cx={151.39981}
                                        cy={125.92314}
                                        r={1.6746536}
                                        fill="none"
                                        stroke="#0400ff"
                                        strokeWidth={0.334931}
                                        strokeLinejoin="bevel"
                                        strokeMiterlimit={0}
                                        strokeDasharray={10.5194}
                                        strokeDashoffset={0}
                                        strokeOpacity={1}
                                        />
                                <TechIcon name={'next'} x={142.73816 - 1.5} y={122.13708 - 1.7} size={'3.3'} scrollThresholds={[4500, 4700]}/>
                                <Circle filter={'url(#glowEffect)'}
                                    id="path700"
                                    cx={142.73816}
                                    cy={122.13708}
                                    r={1.6746536}
                                    fill="none"
                                    stroke="#0400ff"
                                    strokeWidth={0.334931}
                                    strokeLinejoin="bevel"
                                    strokeMiterlimit={0}
                                    strokeDasharray={10.5194}
                                    strokeDashoffset={0}
                                    strokeOpacity={1}
                                    />
                                <TechIcon name={'mongoDB'} x={140.04163 - 2.3} y={114.70116 - 2} size={'4'} scrollThresholds={[4900, 5000]}/>
                                <Circle filter={'url(#glowEffect)'}
                                    id="path699"
                                    cx={140.04163}
                                    cy={114.70116}
                                    r={1.6746536}
                                    fill="none"
                                    stroke="#0400ff"
                                    strokeWidth={0.334931}
                                    strokeLinejoin="bevel"
                                    strokeMiterlimit={0}
                                    strokeDasharray={10.5194}
                                    strokeDashoffset={0}
                                    strokeOpacity={1}
                                    />
                                <TechIcon name={'framermotion'} x={143.03781 - 1.65} y={107.51036 - 1.6} size={'3.5'} scrollThresholds={ [5200, 5300]}/>
                                <Circle filter={'url(#glowEffect)'}
                                    id="path698"
                                    cx={143.03781}
                                    cy={107.51036}
                                    r={1.6746536}
                                    fill="none"
                                    stroke="#0400ff"
                                    strokeWidth={0.334931}
                                    strokeLinejoin="bevel"
                                    strokeMiterlimit={0}
                                    strokeDasharray={10.5194}
                                    strokeDashoffset={0}
                                    strokeOpacity={1}
                                    />
                            
                                <AnimateTechTitles x={144.39165 + 6.50} y={108.76334 + 5.3}/>                      
                                <Rect filter={'url(#glowEffect)'}
                                    id="rect704"
                                    x={144.39165}
                                    y={108.76334}
                                    width={13.409038}
                                    height={12.420458}
                                    fill="none"
                                    stroke="#0400ff"
                                    strokeWidth={0.167469}
                                    strokeLinejoin="bevel"
                                    strokeMiterlimit={0}
                                    strokeOpacity={1}
                                    />                          
                        </motion.g>   
                </motion.svg>
            </motion.div>
            }             
        </>

    )
}

export default AnimatePentagram;