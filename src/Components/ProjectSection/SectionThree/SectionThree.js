import React, {useRef} from 'react';
import AllProjects from '../ProjectData';
import DisplayProject from '../DisplayProject';
import {useMount} from '~/Hooks';
import {motion} from 'framer-motion'
import * as styles from './styles.module.css';

function SectionThree() {
    const [mount, target] = useMount('section three');
    const projects = useRef(AllProjects.slice(36, 48));

    return(
        <motion.section className={styles.container} ref={target}>
            {mount &&
                    projects.current.map((project) => {
                        const title = project.projectTitle;
                        const src = project.src;
                        const href = project.href;

                        return(
                            <DisplayProject projectTitle={title} src={src} href={href} key={title}/>  
                        )
                    })
            
            }

        </motion.section>
    )
}

export default SectionThree;