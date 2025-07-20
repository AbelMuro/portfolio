import React, {useRef} from 'react';
import AllProjects from '../ProjectData'
import AnimateClock from '../AnimateClock'
import DisplayProject from '../DisplayProject';
import {useMediaQuery, useMount} from '~/Hooks';
import {motion} from 'framer-motion'
import * as styles from './styles.module.css';


function SectionTwo({clock}) {
    const [mount, target] = useMount('section two');
    const projects = useRef(AllProjects.slice(19, 32));
    const [tablet] = useMediaQuery('(max-width: 705px)'); 

    return (
        <motion.section className={styles.container} initial={{opacity: 0}} animate={{opacity: 1}} ref={target}>
            {mount &&
                <>
                    {projects.current.map((project) => {
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
                </>
            }

        </motion.section>
    )
}

export default SectionTwo;