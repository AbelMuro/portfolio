import React, {useState, useRef, useEffect} from 'react';
import AllProjects from '../ProjectData'
import AnimateClock from '../AnimateClock'
import DisplayProject from '../DisplayProject';
import {useMediaQuery} from '~/Hooks';
import {motion, AnimatePresence, useScroll, useMotionValueEvent} from 'framer-motion'
import * as styles from './styles.module.css';

/* 
    this is where i left off i need to combine sectionTwo and sectionthree into one component that displays all projects
*/

function SectionTwo({clock, setClock}) {
    const [mount, setMount] = useState(true);
    const [tablet] = useMediaQuery('(max-width: 705px)'); 
    const {scrollY} = useScroll();

    return (
        <motion.section className={styles.container} initial={{opacity: 0}} animate={{opacity: 1}}>
            {AllProjects.slice(19, 32).map((project) => {
                const title = project.projectTitle;
                const src = project.src;
                const href = project.href;

                return(
                    <div className={styles.project} key={title}>
                        <DisplayProject projectTitle={title} src={src} href={href}/>  
                    </div>
                )
            })}
            
                {!tablet && <motion.div className={styles.clock_container}>
                    {clock === 'clock one' && 
                        <motion.div layoutId='clock'> 
                            <AnimateClock/> 
                        </motion.div> 
                    }                             
                </motion.div>}
        </motion.section>
    )
}

export default SectionTwo;