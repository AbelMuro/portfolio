import React from 'react';
import AllProjects from '../ProjectData';
import AnimateLine from '../AnimateLine';
import DisplayProject from '../DisplayProject';
import {useMediaQuery} from '~/Hooks';
import {motion, useMotionValue, useMotionTemplate} from 'framer-motion';
import * as styles from './styles.module.css';

function SectionFive() {
    const rotateLeftLine = useMotionValue(-90);
    const rotateRightLine = useMotionValue(90);
    const transformLeftLine = useMotionTemplate`scale(2) rotate(${rotateLeftLine}deg)`;
    const transformRightLine = useMotionTemplate`scale(2) rotate(${rotateRightLine}deg)`;
    const [tablet] = useMediaQuery('(max-width: 705px)');
    console.log(AllProjects.length);

    return(
        <section className={styles.container}>
            {
                AllProjects.slice(57, 73).map((project) => {
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
            {!tablet && <motion.div className={styles.designLineOne} style={{transform: transformLeftLine}}>
                <AnimateLine scrollThresholds={[26400, 26500]}/>
            </motion.div>}
            {!tablet && <motion.div className={styles.designLineTwo} style={{transform: transformRightLine}}>
                <AnimateLine scrollThresholds={[26400, 26500]}/>
            </motion.div>}
        </section>
    )
}

export default SectionFive;