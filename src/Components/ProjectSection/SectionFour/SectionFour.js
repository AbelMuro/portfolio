import React, {useRef} from 'react';
import AllProjects from '../ProjectData';
import DisplayProject from '../DisplayProject';
import { useMount } from '~/Hooks';
import {motion} from 'framer-motion';
import * as styles from './styles.module.css';

function SectionFour() {
    const [mount, target] = useMount('section four');
    const projects = useRef(AllProjects.slice(48, 63));

    return(
        <motion.section className={styles.container} ref={target}>
            {
                mount &&   
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

export default SectionFour;