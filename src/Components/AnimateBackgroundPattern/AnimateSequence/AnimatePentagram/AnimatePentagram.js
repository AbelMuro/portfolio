import React, {useState, useRef} from 'react';
import AnimateTechTitles from './AnimateTechTitles';
import Rect from './Rect';
import TechIcon from './TechIcon';
import Circle from './Circle';
import {LinearPentagram, LinearRing} from '~/Transitions';
import {motion, useScroll, useTransform, useSpring, useMotionValueEvent, AnimatePresence, useMotionTemplate} from 'framer-motion';
import AnimateCircles from './AnimateCircles';
import * as styles from './styles.module.css';


function AnimatePentagram({scrollThresholds}) {
    const [mount, setMount] = useState(true);
    const timeout = useRef();
    const {scrollY} = useScroll(); 
    const scrollRange = [
        scrollThresholds[1], scrollThresholds[1] + 1000, 
        scrollThresholds[1] + 2000, scrollThresholds[1] + 3000,
        scrollThresholds[1] + 4000
    ];
    const rotate3DForY = useTransform(scrollY, scrollRange, [0, -35, 0, -35, 0]);
    const rotate3DForX = useTransform(scrollY, scrollRange, [0, 35, 0, -25, 0]);
    const rotate3DSpringY = useSpring(rotate3DForY, LinearPentagram);
    const rotate3DSpringX = useSpring(rotate3DForX, LinearPentagram);

    const scale = useTransform(scrollY, [800, 2000], [0.8, 5])
    const smoothScale = useSpring(scale, LinearRing);

    const transformGroup = useMotionTemplate`translate(-47.929077px, -13.484006px) scale(${smoothScale})`

    useMotionValueEvent(scrollY, 'change', (value) => {
        if(value > 7000)
            setMount(false)
        else
            setMount(true);
    });


    return( 
        <AnimatePresence>
            {mount &&
            <motion.div 
                id='pentagram'             
                className={styles.container}
                style={{rotateY: rotate3DSpringY, rotateX: rotate3DSpringX}}
                exit={{opacity: 0}}
                >
                <svg className={styles.svg} viewBox={"0 0 206.40488 206.40488"}>
                        <defs>
                            <filter id='glowEffectPentagramOuterCircles' filterUnits="userSpaceOnUse" x="-20%" y="-20%" width="140%" height="140%">
                                <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#0400ff" floodOpacity={1}/>
                            </filter>  
                            <filter id='glowEffectPentagramInnerCircles' filterUnits="userSpaceOnUse" x="-20%" y="-20%" width="140%" height="140%">
                                <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#0400ff" floodOpacity={1}/>
                            </filter>  
                            <filter id='glowEffectPentagramRect' filterUnits="userSpaceOnUse" x="-20%" y="-20%" width="140%" height="140%">
                                <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#0400ff" floodOpacity={1}/>
                            </filter>  
                        </defs>
                        <motion.g className={styles.group} style={{transform: transformGroup}}>   
                                <AnimateCircles/>                        
                                <Circle 
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
                                <TechIcon name={'react'} x={149.8} y={103.5} size={'2'} scrollThresholds={[3000, 3100]}/>
                                <Circle 
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
                                <Circle
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
                                <Circle 
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
                                <Circle 
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
                                <Circle 
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
                                <TechIcon name={'next'} x={142.73816 - 1.5} y={122.13708 - 1.7} size={'3.3'} scrollThresholds={[4500, 4600]}/>
                                <Circle 
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
                                <TechIcon name={'mongoDB'} x={140.04163 - 2.3} y={114.70116 - 2} size={'4'} scrollThresholds={[4800, 4900]}/>
                                <Circle 
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
                                <TechIcon name={'framermotion'} x={143.03781 - 1.65} y={107.51036 - 1.6} size={'3.5'} scrollThresholds={ [5100, 5200]}/>
                                <Circle 
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
                                <Rect 
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
                </svg>
            </motion.div>
            }             
        </AnimatePresence>

    )
}

export default AnimatePentagram;