import React, {useEffect} from 'react';
import {useMediaQuery} from '~/Hooks';
import AllProjects from '../ProjectData';
import AnimateLine from '../AnimateLine';
import AnimateVerticalText from './AnimateVerticalText';
import AnimateCircle from './AnimateCircle';
import DisplayProject from '../DisplayProject';
import {motion, useMotionValue, useSpring} from 'framer-motion';
import * as styles from './styles.module.css';

function SectionOne(){
    const [tablet] = useMediaQuery('(max-width: 940px)');
    const rotateLeftLine = useMotionValue(-25);
    const rotateRightLine = useMotionValue(25);
    const smoothRotateLeftLine = useSpring(rotateLeftLine, {stiffness: 150, damping: 80});
    const smoothRotateRightLine = useSpring(rotateRightLine, {stiffness: 150, damping: 80});

    useEffect(() => {
        if(tablet){
            rotateLeftLine.set(0);
            rotateRightLine.set(0);   
        }
        else{
            rotateLeftLine.set(-25);
            rotateRightLine.set(25);         
        }

    }, [tablet])

    return(
        <section className={styles.container}>
            {
                AllProjects.slice(0, 12).map((project) => {
                    const title = project.projectTitle;
                    const src = project.src;
                    const href = project.href;
                    return (
                        <div className={styles.project} key={title}>
                            <DisplayProject projectTitle={title} src={src} href={href}/>
                        </div>   
                    )
                })
            }
            <div className={styles.designText}>
                <AnimateVerticalText scrollThresholds={[18500, 19200]}/>
            </div>   
            <motion.div className={styles.designLineOne} style={{rotate: smoothRotateRightLine}}>
                <AnimateLine scrollThresholds={[18500, 18900]}/>
            </motion.div>
            <motion.div className={styles.designLineTwo} style={{rotate: smoothRotateLeftLine}}>
                <AnimateLine scrollThresholds={[18500, 18900]}/>
            </motion.div>
            <div className={styles.designCircle}>
                <AnimateCircle/>
            </div>
        </section>
    )
}

export default SectionOne;