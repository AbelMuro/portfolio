import React, {useEffect} from 'react';
import icons from './icons';
import {motion, useAnimationControls, useMotionValue} from 'framer-motion';
import * as styles from './styles.module.css';

/* 
    this is where i left off, i need to finish this component's animation and
    i also want to create a new glow effect via the filter element in svg
*/

function AnimateBackground() {
    const firstCloudControls = useAnimationControls();
    const secondCloudControls = useAnimationControls();
    const thirdCloudControls = useAnimationControls();
    const fourthCloudControls = useAnimationControls();

    const animateFirstCloud = async () => {
        await firstCloudControls.start({top: '100px', width: '250px', height: '100px', transition: {duration: 4}});
        await firstCloudControls.start({left: '100px', height: '200px', transition: {duration: 4}});
        await firstCloudControls.start({height: '300px', width: '100px', transition: {duration: 6.5}});
        await firstCloudControls.start({height: '400px', width: '600px', top: '300px', transition: {duration: 3.5}});
        await firstCloudControls.start({width: '300px', left: '0px', transition: {duration: 4.5}});
        await firstCloudControls.start({height: '0px', width: '0px', top: '0px', left: '0px', transition: {duration: 4.5}});
        animateFirstCloud();
    }
    const animateSecondCloud = async () => {
        await secondCloudControls.start({width: '100px', height: '250px', bottom: '50px', transition: {duration: 6}});
        await secondCloudControls.start({width: '100px', right: '150px', right: '100px' , transition: {duration: 4.5}});
        await secondCloudControls.start({width: '150px', right: '150px', bottom: '150px', transition: {duration: 4.5}});
        await secondCloudControls.start({width: '450px', height: '500px', right: '250px', right: '50px', transition: {duration: 2.5}});
        await secondCloudControls.start({width: '100px', right: '150px', right: '0px', bottom: '0px', transition: {duration: 2.5}});
        await secondCloudControls.start({width: '0px', right: '0px', transition: {duration: 5}});
        animateSecondCloud();
    }
    const animateThirdCloud = async () => {
        await thirdCloudControls.start({width: '500px', height: '100px', left: '400px', transition: {duration: 6}})
        await thirdCloudControls.start({height: '500px', bottom: '100px', transition: {duration: 4.5}});
        await thirdCloudControls.start({height: '100px', left: '100px', transition: {duration: 5.5}});
        await thirdCloudControls.start({width: '100px', left: '50px', transition: {duration: 2.5}});
        await thirdCloudControls.start({height: '300px', bottom: '100px', transition: {duration: 3.5}});
        await thirdCloudControls.start({height: '100px', bottom: '0px', transition: {duration: 4.5}});
        await thirdCloudControls.start({height: '0px', width: '0px', bottom: '0px', left: '0px', transition: {duration: 4.2}});
        animateThirdCloud();
    }
    const animateFourthCloud = async () => {
        await fourthCloudControls.start({width: '500px', height: '100px', right: '400px', transition: {duration: 6}});
        await fourthCloudControls.start({height: '500px', top: '100px', transition: {duration: 4.2}});
        await fourthCloudControls.start({height: '100px', right: '100px', transition: {duration: 3.2}});
        await fourthCloudControls.start({width: '100px', right: '50px', transition: {duration: 2.5}});
        await fourthCloudControls.start({height: '300px', top: '100px', transition: {duration: 3.5}});
        await fourthCloudControls.start({height: '100px', top: '0px', transition: {duration: 4.5}});
        await fourthCloudControls.start({height: '0px', width: '0px', top: '0px', right: '0px', transition: {duration: 4.2}});
        animateFourthCloud();
    }

    useEffect(() => {
        firstCloudControls.start({filter: ['blur(80px)', 'blur(50px)'], transition: {repeat: Infinity, duration: 2.5, repeatType: 'mirror'}});
        secondCloudControls.start({filter: ['blur(80px)', 'blur(50px)'], transition: {repeat: Infinity, duration: 4.5, repeatType: 'mirror'}});
        thirdCloudControls.start({filter: ['blur(140px)', 'blur(70px)'], transition: {repeat: Infinity, duration: 1.5, repeatType: 'mirror'}});
        fourthCloudControls.start({filter: ['blur(140px)', 'blur(70px)'], transition: {repeat: Infinity, duration: 2.5, repeatType: 'mirror'}});
        animateFirstCloud();
        animateSecondCloud();
        animateThirdCloud();
        animateFourthCloud()
    }, [])

    return(
        <section className={styles.container}>
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
        </section>
    )   
}

export default AnimateBackground;