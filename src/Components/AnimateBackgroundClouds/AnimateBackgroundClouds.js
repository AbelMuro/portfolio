import React, {useEffect} from 'react';
import icons from './icons';
import {motion, useAnimationControls, useScroll, useTransform, useMotionTemplate, useSpring, useMotionValueEvent} from 'framer-motion';
import * as styles from './styles.module.css';

/* 
    this is where i left off, i need to finish this component's animation and
    i also want to create a new glow effect via the filter element in svg
*/

function AnimateBackgroundClouds() {
    const {scrollY} = useScroll();
    const scrollRange = [
        2100, 3100, 
        4100, 5100,
        6100
    ];
    const backgroundPositionX = useTransform(scrollY, scrollRange, [0, -105, 0, 95, 0] );
    const smoothBackgroundPositionX = useSpring(backgroundPositionX, {stiffness: 150, damping: 80});
    const backgroundPositionY = useTransform(scrollY, scrollRange, [0, -105, 0, -105, 0]);
    const smoothBackgroundPositionY = useSpring(backgroundPositionY, {stiffness: 150, damping: 80});
    const moveBackgroundPositionYMore = useTransform(scrollY, [7000, 8000], [0, -105]);
    const backgroundPositionYBack = useTransform(scrollY, [13000, 13200], [-105, 0]);
    const firstCloudControls = useAnimationControls();
    const secondCloudControls = useAnimationControls();
    const thirdCloudControls = useAnimationControls();
    const fourthCloudControls = useAnimationControls();

    const backgroundPosition = useMotionTemplate`${smoothBackgroundPositionX}px ${smoothBackgroundPositionY}px`;

    useMotionValueEvent(moveBackgroundPositionYMore, 'change', (value) => {
        smoothBackgroundPositionY.set(value);
    })

    useMotionValueEvent(backgroundPositionYBack, 'change', (value) => {
        smoothBackgroundPositionY.set(value);
    })

    const animateFirstCloud = async () => {
        await firstCloudControls.start({top: '200px', skewX: '15deg', skewY: '-25deg', transition: {duration: 4}});
        await firstCloudControls.start({left: '200px', skewX: '-15deg', skewY: '3deg', transition: {duration: 4}});
        await firstCloudControls.start({left: '500px', skewX: '0deg', skewY: '-25deg' ,transition: {duration: 3.5}});
        await firstCloudControls.start({top: '400px', skewX: '-25deg', skewY: '30deg', transition: {duration: 3.5}});
        await firstCloudControls.start({left: '0px', skewX: '15deg', skewY: '-25deg', transition: {duration: 2.5}});
        await firstCloudControls.start({top: '0px', left: '0px',  skewX: '-30deg', skewY: '25deg', transition: {duration: 1.5}});
        animateFirstCloud();
    }
    const animateSecondCloud = async () => {
        await secondCloudControls.start({skewX: '-25deg', skewY: '30deg', bottom: '50px', transition: {duration: 2}});
        await secondCloudControls.start({skewX: '15deg', skewY: '-25deg', right: '150px', transition: {duration: 3.5}});
        await secondCloudControls.start({skewX: '-15deg', skewY: '15deg', right: '250px', bottom: '150px', transition: {duration: 4}});
        await secondCloudControls.start({skewX: '25deg', skewY: '-5deg', right: '100px', transition: {duration: 2.5}});
        await secondCloudControls.start({skewX: '-30deg', skewY: '25deg', bottom: '0px', transition: {duration: 2.5}});
        await secondCloudControls.start({right: '0px', transition: {duration: 5}});
        animateSecondCloud();
    }
    const animateThirdCloud = async () => {
        await thirdCloudControls.start({skewX: '25deg', skewY: '-25deg', left: '400px', transition: {duration: 4}})
        await thirdCloudControls.start({skewX: '-15deg', skewY: '25deg', bottom: '100px', transition: {duration: 3.5}});
        await thirdCloudControls.start({skewX: '25deg', skewY: '-15deg', left: '200px', transition: {duration: 1.5}});
        await thirdCloudControls.start({skewX: '-15deg', skewY: '25deg', left: '50px', transition: {duration: 3.5}});
        await thirdCloudControls.start({skewX: '25deg', skewY: '-25deg', bottom: '200px', transition: {duration: 3.5}});
        await thirdCloudControls.start({skewX: '-25deg', skewY: '15deg', bottom: '0px', transition: {duration: 1.5}});
        await thirdCloudControls.start({bottom: '0px', left: '0px', transition: {duration: 3.2}});
        animateThirdCloud();
    }
    const animateFourthCloud = async () => {
        await fourthCloudControls.start({skewX: '15deg', skewY: '25deg', right: '400px', transition: {duration: 4}});
        await fourthCloudControls.start({skewX: '-15deg', skewY: '-25deg', top: '100px', transition: {duration: 3.2}});
        await fourthCloudControls.start({skewX: '30deg', skewY: '25deg', right: '100px', transition: {duration: 2.2}});
        await fourthCloudControls.start({skewX: '15deg', skewY: '-25deg', right: '50px', transition: {duration: 2.5}});
        await fourthCloudControls.start({skewX: '15deg', skewY: '25deg', top: '200px', transition: {duration: 3.5}});
        await fourthCloudControls.start({skewX: '-30deg', skewY: '25deg', top: '0px', transition: {duration: 1.5}});
        await fourthCloudControls.start({top: '0px', right: '0px', transition: {duration: 4}});
        animateFourthCloud();
    }

    useEffect(() => {
        firstCloudControls.start({filter: ['blur(150px)', 'blur(110px)'], transition: {repeat: Infinity, duration: 2.5, repeatType: 'mirror'}});
        secondCloudControls.start({filter: ['blur(150px)', 'blur(110px)'], transition: {repeat: Infinity, duration: 2.5, repeatType: 'mirror'}});
        thirdCloudControls.start({filter: ['blur(150px)', 'blur(110px)'], transition: {repeat: Infinity, duration: 2.5, repeatType: 'mirror'}});
        fourthCloudControls.start({filter: ['blur(150px)', 'blur(110px)'], transition: {repeat: Infinity, duration: 2.5, repeatType: 'mirror'}});
        animateFirstCloud();
        animateSecondCloud();
        animateThirdCloud();
        animateFourthCloud()
    }, [])

    return(
        <motion.section className={styles.container} style={{backgroundPosition}}>
            <motion.div 
                className={styles.cloudOne} 
                initial={{filter: 'blur(70px)', top: '0px', left: '0px'}}
                animate={firstCloudControls}/>
            <motion.div 
                className={styles.cloudTwo} 
                initial={{filter: 'blur(70px)', bottom: '0px', right: '0px'}}
                animate={secondCloudControls}/>
            <motion.div 
                className={styles.cloudThree} 
                initial={{filter: 'blur(140px)', bottom: '0px', left: '0px'}}
                animate={thirdCloudControls}/>
            <motion.div 
                className={styles.cloudFour} 
                initial={{filter: 'blur(140px)', top: '0px', right: '0px'}}
                animate={fourthCloudControls}/>
        </motion.section>
    )   
}

export default AnimateBackgroundClouds;