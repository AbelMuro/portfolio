import React, {useContext} from 'react';
import {ContainerContext} from '!/Intro';
import AnimateTechTitles from './AnimateTechTitles';
import Rect from './Rect';
import TechIcon from './TechIcon';
import Circle from './Circle';
import {motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence} from 'framer-motion';
import AnimateCircles from './AnimateCircles';
import * as styles from './styles.module.css';


function AnimatePentagram({scrollThresholds = [0.09, 0.21]}) {
    const x = useMotionValue(-47.929077);
    const y = useMotionValue(-13.484006);
    const {MainContainerRef} = useContext(ContainerContext);
    const {scrollYProgress} = useScroll(MainContainerRef);
    const scrollRange = [
        scrollThresholds[1], scrollThresholds[1] + 0.10, 
        scrollThresholds[1] + 0.20, scrollThresholds[1] + 0.30,
        scrollThresholds[1] + 0.40
    ];
    const rotate3DForY = useTransform(scrollYProgress, scrollRange, [0, -35, 0, -35, 0]);
    const rotate3DForX = useTransform(scrollYProgress, scrollRange, [0, 35, 0, -25, 0]);
    const rotate3DSpringY = useSpring(rotate3DForY, {stiffness: 150, damping: 40});
    const rotate3DSpringX = useSpring(rotate3DForX, {stiffness: 150, damping: 40});
    const scale = useTransform(scrollYProgress, [0.06, 0.18], [1, 5])
    const smoothScale = useSpring(scale, {stiffness: 150, damping: 80});
    
    return( 
            <svg 
                id='pentagram' 
                className={styles.container} 
                viewBox={"0 0 206.40488 206.40488"}>
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
                                strokeDasharray="none"
                                strokeDashoffset={0}
                                strokeOpacity={1}
                                />
                            <TechIcon name={'react'} x={150.71886 - 0.6} y={104.37801 - 0.6} size={'1.4'} scrollThresholds={[0.30, 0.31]}/>
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
                                    strokeDasharray="none"
                                    strokeDashoffset={0}
                                    strokeOpacity={1}
                                    />
                            <TechIcon name={'node'} x={158.61783 - 1.1} y={107.42867 - 1} size={'2.3'} scrollThresholds={[0.33, 0.34]}/>
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
                                strokeDasharray="none"
                                strokeDashoffset={0}
                                strokeOpacity={1}
                                />
                            <TechIcon name={'express'} x={161.7774 - 1.4} y={114.64666 - 1.5} size={'3.1'} scrollThresholds={[0.36, 0.37]}/>    
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
                                    strokeDasharray="none"
                                    strokeDashoffset={0}
                                    strokeOpacity={1}
                                    />              
                            <TechIcon name={'vue'} x={159.01715 - 1.1} y={122.11411 - 1.2} size={'2.3'} scrollThresholds={[0.38, 0.39]}/>                         
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
                                strokeDasharray="none"
                                strokeDashoffset={0}
                                strokeOpacity={1}
                                />
                            <TechIcon name={'mySQL'} x={151.39981 - 1.4} y={125.92314 - 1.4} size={'3.1'} scrollThresholds={[0.41, 0.42]}/>
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
                                    strokeDasharray="none"
                                    strokeDashoffset={0}
                                    strokeOpacity={1}
                                    />
                            <TechIcon name={'next'} x={142.73816 - 1.5} y={122.13708 - 1.7} size={'3.3'} scrollThresholds={[0.44, 0.45]}/>
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
                                strokeDasharray="none"
                                strokeDashoffset={0}
                                strokeOpacity={1}
                                />
                            <TechIcon name={'mongoDB'} x={140.04163 - 2.3} y={114.70116 - 2} size={'4'} scrollThresholds={[0.47, 0.48]}/>
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
                                strokeDasharray="none"
                                strokeDashoffset={0}
                                strokeOpacity={1}
                                />
                            <TechIcon name={'framermotion'} x={143.03781 - 1.65} y={107.51036 - 1.6} size={'3.5'} scrollThresholds={ [0.50, 0.51]}/>
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
                                strokeDasharray="none"
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
                                strokeDasharray="none"
                                strokeDashoffset={0}
                                strokeOpacity={1}
                                />    
                            <Rect filter={'url(#glowEffect)'}
                                id="rect704-3"
                                x={181.80121}
                                y={-28.580276}
                                width={13.151613}
                                height={12.403329}
                                transform="matrix(0.71813035,0.69590861,-0.70235073,0.71183106,0,0)"
                                fill="none"
                                stroke="#0400ff"
                                strokeWidth={0.165738}
                                strokeLinejoin="bevel"
                                strokeMiterlimit={0}
                                strokeDasharray="none"
                                strokeDashoffset={0}
                                strokeOpacity={1}
                                />               
                    </motion.g>   
            </svg> 
    )
}

export default AnimatePentagram;