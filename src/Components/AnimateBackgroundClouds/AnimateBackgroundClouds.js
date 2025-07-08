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
        await firstCloudControls.start({top: '200px', width: '350px', height: '100px', transition: {duration: 4}});
        await firstCloudControls.start({left: '200px', height: '300px', transition: {duration: 4}});
        await firstCloudControls.start({height: '400px', width: '200px', transition: {duration: 6.5}});
        await firstCloudControls.start({height: '400px', width: '700px', top: '300px', transition: {duration: 3.5}});
        await firstCloudControls.start({width: '400px', left: '0px', transition: {duration: 4.5}});
        await firstCloudControls.start({height: '0px', width: '0px', top: '0px', left: '0px', transition: {duration: 4.5}});
        animateFirstCloud();
    }
    const animateSecondCloud = async () => {
        await secondCloudControls.start({width: '200px', height: '350px', bottom: '50px', transition: {duration: 6}});
        await secondCloudControls.start({width: '200px', right: '150px', transition: {duration: 4.5}});
        await secondCloudControls.start({width: '250px', height: '400px', right: '150px', bottom: '150px', transition: {duration: 4.5}});
        await secondCloudControls.start({width: '550px', height: '600px', right: '250px', transition: {duration: 2.5}});
        await secondCloudControls.start({width: '200px', right: '250px', bottom: '0px', transition: {duration: 2.5}});
        await secondCloudControls.start({width: '0px', height: '0px', right: '0px', transition: {duration: 5}});
        animateSecondCloud();
    }
    const animateThirdCloud = async () => {
        await thirdCloudControls.start({width: '600px', height: '200px', left: '400px', transition: {duration: 6}})
        await thirdCloudControls.start({height: '600px', bottom: '100px', transition: {duration: 4.5}});
        await thirdCloudControls.start({height: '200px', left: '100px', transition: {duration: 5.5}});
        await thirdCloudControls.start({width: '200px', left: '50px', transition: {duration: 2.5}});
        await thirdCloudControls.start({height: '400px', bottom: '100px', transition: {duration: 3.5}});
        await thirdCloudControls.start({height: '200px', bottom: '0px', transition: {duration: 4.5}});
        await thirdCloudControls.start({height: '0px', width: '0px', bottom: '0px', left: '0px', transition: {duration: 4.2}});
        animateThirdCloud();
    }
    const animateFourthCloud = async () => {
        await fourthCloudControls.start({width: '600px', height: '200px', right: '400px', transition: {duration: 6}});
        await fourthCloudControls.start({height: '600px', top: '100px', transition: {duration: 4.2}});
        await fourthCloudControls.start({height: '200px', right: '100px', transition: {duration: 3.2}});
        await fourthCloudControls.start({width: '200px', right: '50px', transition: {duration: 2.5}});
        await fourthCloudControls.start({height: '400px', top: '100px', transition: {duration: 3.5}});
        await fourthCloudControls.start({height: '200px', top: '0px', transition: {duration: 4.5}});
        await fourthCloudControls.start({height: '0px', width: '0px', top: '0px', right: '0px', transition: {duration: 4.2}});
        animateFourthCloud();
    }

    useEffect(() => {
        firstCloudControls.start({filter: ['blur(100px)', 'blur(70px)'], transition: {repeat: Infinity, duration: 2.5, repeatType: 'mirror'}});
        secondCloudControls.start({filter: ['blur(100px)', 'blur(70px)'], transition: {repeat: Infinity, duration: 2.5, repeatType: 'mirror'}});
        thirdCloudControls.start({filter: ['blur(100px)', 'blur(70px)'], transition: {repeat: Infinity, duration: 2.5, repeatType: 'mirror'}});
        fourthCloudControls.start({filter: ['blur(100px)', 'blur(70px)'], transition: {repeat: Infinity, duration: 2.5, repeatType: 'mirror'}});
        animateFirstCloud();
        animateSecondCloud();
        animateThirdCloud();
        animateFourthCloud()
    }, [])

    return(
        <motion.section className={styles.container} style={{backgroundPosition}}>
            <motion.div 
                className={styles.smoke} 
                initial={{filter: 'blur(70px)', width: '0px', top: '0px', left: '0px', height: '0px'}}
                animate={firstCloudControls}/>
            <motion.div 
                className={styles.smoke} 
                initial={{filter: 'blur(70px)', width: '0px', bottom: '0px', right: '0px', height: '0px'}}
                animate={secondCloudControls}/>
            <motion.div 
                className={styles.smoke} 
                initial={{filter: 'blur(140px)', width: '0px', bottom: '0px', left: '0px', height: '0px'}}
                animate={thirdCloudControls}/>
            <motion.div 
                className={styles.smoke} 
                initial={{filter: 'blur(140px)', width: '0px', top: '0px', right: '0px', height: '0px'}}
                animate={fourthCloudControls}/>
        </motion.section>
    )   
}

export default AnimateBackgroundClouds;