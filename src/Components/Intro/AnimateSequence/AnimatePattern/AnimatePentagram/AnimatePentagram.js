import React, {useContext} from 'react';
import {ContainerContext} from '!/Intro';
import AnimateTechTitles from './AnimateTechTitles';
import Rect from './Rect';
import TechIcon from './TechIcon';
import Circle from './Circle';
import {motion, useScroll, useTransform, useSpring, useMotionValue} from 'framer-motion';
import AnimateCircles from './AnimateCircles';
import * as styles from './styles.module.css';


/* 
    this is where i left off, i need to create another circle for each rotating circle in the svg,
    the circle will be an invisible circle that  extends the original circle, this may prevent the cliping that happens with the circles

    i also want to change the stroke color of all svg elements based on the scroll position

    dont forget to add icons to the MobileNavBar component
*/

function AnimatePentagram({scrollThresholds, scaleThresholds}) {
    const x = useMotionValue(-74.1383963);
    const y = useMotionValue(-25.048764);
    const {MainContainer} = useContext(ContainerContext);
    const {scrollYProgress} = useScroll(MainContainer);
    const scale = useTransform(scrollYProgress, scrollThresholds, scaleThresholds)
    const scaleSpring = useSpring(scale, {stiffness: 150, damping: 40})
    const scrollRange = [
        scrollThresholds[1], scrollThresholds[1] + 0.10, 
        scrollThresholds[1] + 0.20, scrollThresholds[1] + 0.30,
        scrollThresholds[1] + 0.40
    ];
    const rotate3DForY = useTransform(scrollYProgress, scrollRange, [0, -35, 0, -35, 0]);
    const rotate3DForX = useTransform(scrollYProgress, scrollRange, [0, 35, 0, -25, 0]);
    const rotate3DSpringY = useSpring(rotate3DForY, {stiffness: 150, damping: 40});
    const rotate3DSpringX = useSpring(rotate3DForX, {stiffness: 150, damping: 40});
    

    return(      
        <motion.g className={styles.pentagram} style={{rotateY: rotate3DSpringY, rotateX: rotate3DSpringX, scale: scaleSpring, x, y}}>   
                <AnimateCircles/>                        
                <Circle
                    cx="151.34041"
                    cy="106.16869"
                    r="8.5677881" 
                    fill='none' 
                    stroke='#0400ff'
                    strokeWidth='0.335'
                    strokeLinejoin='bevel'
                    strokeMiterlimit='0'
                    dasharray='300'
                    filter={'url(#glowEffect)'}
                    />
                <TechIcon name={'react'} x={157.80078 - 0.6} y={105.85111 - 0.6} size={'1.3'} scrollThresholds={[0.36, 0.37]}>
                    <Circle
                        cx="157.80078"
                        cy="105.85111"
                        r="1" 
                        fill='none' 
                        stroke='#0400ff'
                        strokeWidth='0.2'
                        strokeLinejoin='bevel'
                        strokeMiterlimit='0'
                        dasharray='100'
                        filter={'url(#glowEffect)'}
                        />
                </TechIcon>
                <TechIcon name={'node'} x={151.1973 - 0.65} y={99.719322 - 0.6} size={'1.5'} scrollThresholds={[0.30, 0.31]}>
                    <Circle
                        cx="151.1973"
                        cy="99.719322"
                        r="1" 
                        fill='none' 
                        stroke='#0400ff'
                        strokeWidth='0.2'
                        strokeLinejoin='bevel'
                        strokeMiterlimit='0'
                        dasharray='100'
                        filter={'url(#glowEffect)'}
                        />
                </TechIcon>
                <TechIcon name={'vue'} x={146.61064 - 0.6} y={101.58975 - 0.6} size={'1.3'} scrollThresholds={[0.50, 0.51]}>
                    <Circle
                        cx="146.61064"
                        cy="101.58975"
                        r="1" 
                        fill='none' 
                        stroke='#0400ff'
                        strokeWidth='0.2'
                        strokeLinejoin='bevel'
                        strokeMiterlimit='0'
                        strokeDasharray='none'
                        strokeDashoffset='0'
                        filter={'url(#glowEffect)'}
                        />

                </TechIcon>
                <TechIcon name={'express'} x={144.82152 - 0.9} y={105.88365 - 0.9} size={'2'} scrollThresholds={[0.47, 0.48]}>
                    <Circle
                        cx="144.82152"
                        cy="105.88365"
                        r="1" 
                        fill='none' 
                        stroke='#0400ff'
                        strokeWidth='0.2'
                        strokeLinejoin='bevel'
                        strokeMiterlimit='0'
                        dasharray='100'
                        filter={'url(#glowEffect)'}
                        />
                </TechIcon>
                <TechIcon name={'mySQL'} x={146.43172 - 0.9} y={110.32393 - 0.9} size={'2'} scrollThresholds={[0.44, 0.45]}>
                    <Circle
                        cx="146.43172"
                        cy="110.32393"
                        r="1" 
                        fill='none' 
                        stroke='#0400ff'
                        strokeWidth='0.2'
                        strokeLinejoin='bevel'
                        strokeMiterlimit='0'
                        dasharray='100'
                        filter={'url(#glowEffect)'}
                        />
                </TechIcon>
                <TechIcon name={'mongoDB'} x={151.60391 - 1.3} y={112.58473 - 1.2} size={'2.3'} scrollThresholds={[0.41, 0.42]}>
                    <Circle
                        cx="151.60391"
                        cy="112.58473"
                        r="1" 
                        fill='none' 
                        stroke='#0400ff'
                        strokeWidth='0.2'
                        strokeLinejoin='bevel'
                        strokeMiterlimit='0'
                        dasharray='100'
                        filter={'url(#glowEffect)'}
                        />
                </TechIcon>
                <TechIcon name={'next'} x={155.91408 - 1.1} y={101.54097 - 1.2} size={'2.3'} scrollThresholds={[0.33, 0.34]}>
                    <Circle
                        cx="155.91408"
                        cy="101.54097"
                        r="1" 
                        fill='none' 
                        stroke='#0400ff'
                        strokeWidth='0.2'
                        strokeLinejoin='bevel'
                        strokeMiterlimit='0'
                        dasharray='100'
                        filter={'url(#glowEffect)'}
                        />                            
                </TechIcon>
                <TechIcon name={'framermotion'} x={156.15253 - 1.1} y={110.3102 - 1.2} size={'2.3'} scrollThresholds={[0.38, 0.39]}>
                    <Circle
                        cx="156.15253"
                        cy="110.3102"
                        r="1" 
                        fill='none' 
                        stroke='#0400ff'
                        strokeWidth='0.2'
                        strokeLinejoin='bevel'
                        strokeMiterlimit='0'
                        dasharray='100'
                        filter={'url(#glowEffect)'}
                        />                    
                </TechIcon>
                <AnimateTechTitles x={147.41908 + 4.50} y={102.33794 + 3.3}>
                    <Rect
                        width="8.0070515"
                        height="7.4167333"
                        x="147.41908"
                        y="102.33794" 
                        strokeWidth='0.100002'
                        strokeLinejoin='bevel'
                        strokeMiterlimit='0'
                        />                            
                </AnimateTechTitles>
                <Rect
                    width="7.853334"
                    height="7.4065046"
                    x="178.38718"
                    y="-32.802994"
                    transform="matrix(0.71813035,0.69590861,-0.70235073,0.71183106,0,0)" 
                    strokeWidth='0.0989684'
                    strokeLinejoin='bevel'
                    strokeMiterlimit='0'
                    />                
        </motion.g>       
    )
}

export default AnimatePentagram;