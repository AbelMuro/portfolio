import React from 'react';
import AllProjects from '../ProjectData';
import DisplayProject from '../DisplayProject';
import AnimateClock from '../AnimateClock';
import { useMediaQuery } from '~/Hooks';
import {motion} from 'framer-motion';
import * as styles from './styles.module.css';

function SectionFour({clock}) {
    const [tablet] = useMediaQuery('(max-width: 705px)');

    return(
        <motion.section className={styles.container}>
            {AllProjects.slice(37, 50).map((project) => {
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
        </motion.section>
    )
}

export default SectionFour;