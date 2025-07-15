import React from 'react';
import AllProjects from '../ProjectData';
import DisplayProject from '../DisplayProject';
import AnimateClock from '../AnimateClock'
import {motion, AnimatePresence} from 'framer-motion'
import * as styles from './styles.module.css';

function SectionThree({clock}) {
    return(
        <motion.section className={styles.container}>
            {AllProjects.slice(24, 36).map((project) => {
                const title = project.projectTitle;
                const src = project.src;
                const href = project.href;

                return(
                    <div className={styles.project} key={title}>
                        <DisplayProject projectTitle={title} src={src} href={href}/>  
                    </div>
                    )
            })}

            <motion.div className={styles.clock_container}>
                {clock === 'clock two' && 
                    <motion.div layoutId='clock'>
                        <AnimateClock/>
                    </motion.div>
                }                  
            </motion.div>
        </motion.section>
    )
}

export default SectionThree;