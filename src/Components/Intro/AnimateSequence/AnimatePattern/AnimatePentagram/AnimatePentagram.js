import React, {useContext} from 'react';
import {ContainerContext} from '!/Intro';
import Circle from '../Circle';
import Rect from './Rect';
import {motion, useScroll, useTransform} from 'framer-motion';
import * as styles from './styles.module.css';


/* 
    This is where i left off, i need to convert each of the circle elements
    below into its own component that will load icons that represents my tech stack. 

    i also want to animate blue circles that come out of the pentagram as the user scrolls down
*/

function AnimatePentagram({scrollThresholds, scaleThresholds}) {
    const {MainContainer} = useContext(ContainerContext);
    const {scrollYProgress} = useScroll(MainContainer);
    const scale = useTransform(scrollYProgress, scrollThresholds, scaleThresholds);
    const rotate3DForY = useTransform(scrollYProgress, [scrollThresholds[1], scrollThresholds[1] + 0.15], [0, -35])
    const rotate3DForX = useTransform(scrollYProgress, [scrollThresholds[1], scrollThresholds[1] + 0.15], [0, 25])
    const rotateY = useTransform(rotate3DForY, (value) => {return `${value}deg`});
    const rotateX = useTransform(rotate3DForX , (value) => {return `${value}deg`});

    return(
            <motion.g style={{scale, rotateY, rotateX}} className={styles.container}>
                <Circle
                    cx="151.34041"
                    cy="106.16869"
                    r="8.5677881" 
                    strokeWidth='0.335'
                    strokeLinejoin='bevel'
                    strokeMiterlimit='0'
                    strokeDasharray='none'
                    strokeDashoffset='0'
                    />
                <Circle
                    cx="157.80078"
                    cy="105.85111"
                    r="1" 
                    strokeWidth='0.2'
                    strokeLinejoin='bevel'
                    strokeMiterlimit='0'
                    strokeDasharray='none'
                    strokeDashoffset='0'
                    />
                <Circle
                    cx="151.1973"
                    cy="99.719322"
                    r="1" 
                    strokeWidth='0.2'
                    strokeLinejoin='bevel'
                    strokeMiterlimit='0'
                    strokeDasharray='none'
                    strokeDashoffset='0'
                    />
                <Circle
                    cx="146.61064"
                    cy="101.58975"
                    r="1" 
                    strokeWidth='0.2'
                    strokeLinejoin='bevel'
                    strokeMiterlimit='0'
                    strokeDasharray='none'
                    strokeDashoffset='0'
                    />
                <Circle
                    cx="144.82152"
                    cy="105.88365"
                    r="1" 
                    strokeWidth='0.2'
                    strokeLinejoin='bevel'
                    strokeMiterlimit='0'
                    strokeDasharray='none'
                    strokeDashoffset='0'
                    />
                <Circle
                    cx="146.43172"
                    cy="110.32393"
                    r="1" 
                    strokeWidth='0.2'
                    strokeLinejoin='bevel'
                    strokeMiterlimit='0'
                    strokeDasharray='none'
                    strokeDashoffset='0'
                    />
                <Circle
                    cx="151.60391"
                    cy="112.58473"
                    r="1" 
                    strokeWidth='0.2'
                    strokeLinejoin='bevel'
                    strokeMiterlimit='0'
                    strokeDasharray='none'
                    strokeDashoffset='0'
                    />
                <Circle
                    cx="155.91408"
                    cy="101.54097"
                    r="1" 
                    strokeWidth='0.2'
                    strokeLinejoin='bevel'
                    strokeMiterlimit='0'
                    strokeDasharray='none'
                    strokeDashoffset='0'
                    />
                <Circle
                    cx="156.15253"
                    cy="110.3102"
                    r="1" 
                    strokeWidth='0.2'
                    strokeLinejoin='bevel'
                    strokeMiterlimit='0'
                    strokeDasharray='none'
                    strokeDashoffset='0'
                    />
                <Rect
                    width="8.0070515"
                    height="7.4167333"
                    x="147.41908"
                    y="102.33794" 
                    strokeWidth='0.100002'
                    strokeLinejoin='bevel'
                    strokeMiterlimit='0'
                    strokeDasharray='none'
                    strokeDashoffset='0'
                    />
                <Rect
                    width="7.853334"
                    height="7.4065046"
                    x="178.38718"
                    y="-32.802994"
                    transform="matrix(0.71813035,0.69590861,-0.70235073,0.71183106,0,0)" 
                    strokeWidth='0.0989684'
                    strokeLinejoin='bevel'
                    strokeMiterlimit='0'
                    strokeDasharray='none'
                    strokeDashoffset='0'
                    />
            </motion.g>        
    )
}

export default AnimatePentagram;