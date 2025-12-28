import React, {useState, useRef} from 'react';
import useMediaQuery from '~/Hooks/useMediaQuery.js';
import {useScroll, useMotionValueEvent, motion} from 'framer-motion';
import projects from '~/assets/ProjectData';
import DisplayProject from '../DisplayProject';
import * as styles from './styles.module.css';


function AllProjects() {
    const [tablet] = useMediaQuery('(max-width: 705px)');
    const [mobile] = useMediaQuery('(max-width: 500px)');
    const target = useRef();
    const {scrollYProgress} = useScroll({target: target, offset: ['start end', 'end end']});
    const [displayProjects, setDisplayProjects] = useState([]);

    useMotionValueEvent(scrollYProgress, 'change', (value) => {
        let temp;
        if(mobile)
            temp = 2.4;
        else if(tablet)
            temp = 2.2;
        else
            temp = 2.5;
        const index = ((value * projects.length)/2) * temp;
        setDisplayProjects(projects.slice(0, index));
    });


    return(
        <motion.section className={styles.container} ref={target} layout>       
            {displayProjects.map((project) => {
                    const title = project.projectTitle;
                    const src = project.src;
                    const href = project.href;

                    return (
                        <DisplayProject projectTitle={title} src={src} href={href} key={title}/>
                    )
                })}          

        </motion.section>
    )
};

export default AllProjects;