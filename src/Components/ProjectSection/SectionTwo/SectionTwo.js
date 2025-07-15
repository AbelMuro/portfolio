import React, {useState, useRef} from 'react';
import AllProjects from '../ProjectData'
import AnimateClock from '../AnimateClock'
import DisplayProject from '../DisplayProject';
import {motion, AnimatePresence} from 'framer-motion'
import * as styles from './styles.module.css';

/* 
    this is where i left off i need to combine sectionTwo and sectionthree into one component that displays all projects
*/

function SectionTwo({clock}) {
    const [mount, setMount] = useState(true);

    return (
        <motion.section className={styles.container} initial={{opacity: 0}} animate={{opacity: 1}}>
            {AllProjects.slice(12, 24).map((project) => {
                const title = project.projectTitle;
                const src = project.src;
                const href = project.href;

                return(
                    <div className={styles.project} key={title}>
                        <DisplayProject projectTitle={title} src={src} href={href}/>  
                    </div>
                )
            })}
            <AnimatePresence>
                <motion.div className={styles.clock_container}>
                    {clock === 'clock one' && 
                        <motion.div layoutId='clock'> 
                            <AnimateClock/> 
                        </motion.div> }                           
                </motion.div>
            </AnimatePresence>

        </motion.section>
    )
}

export default SectionTwo;