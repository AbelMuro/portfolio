import React, {useRef} from 'react';
import AllProjects from '../ProjectData'
import DisplayProject from '../DisplayProject';
import {useMount} from '~/Hooks';
import {motion} from 'framer-motion'
import * as styles from './styles.module.css';


function SectionTwo() {
    const [mount, target] = useMount('section two');
    const projects = useRef(AllProjects.slice(19, 32));

    return (
        <motion.section className={styles.container} initial={{opacity: 0}} animate={{opacity: 1}} ref={target}>
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

export default SectionTwo;