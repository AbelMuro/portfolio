import React, {useState, useRef} from 'react';
import AllProjects from '../ProjectData';
import DisplayProject from '../DisplayProject';
import AnimateClock from '../AnimateClock';
import { useMediaQuery, useMount } from '~/Hooks';
import {motion, useScroll, useMotionValueEvent} from 'framer-motion';
import * as styles from './styles.module.css';

function SectionFour({clock}) {
    const [mount, target] = useMount('section four');
    const projects = useRef(AllProjects.slice(44, 57));
    const [tablet] = useMediaQuery('(max-width: 705px)'); 

    return(
        <motion.section className={styles.container} ref={target}>
            {
                mount && 
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
                            {clock === 'clock three' && 
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

export default SectionFour;