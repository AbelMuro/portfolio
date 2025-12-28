import React, {useState} from 'react';
import AllProjects from './AllProjects';
import {useScroll, useMotionValueEvent, AnimatePresence} from 'framer-motion';
import * as styles from './styles.module.css';


function ProjectSection() {
    const [mount, setMount] = useState(false);
    const {scrollY} = useScroll();

    useMotionValueEvent(scrollY, 'change', (value) => {
        if(value < 17800)
            setMount(false);
        else
            setMount(true);
    });


    return(
        <AnimatePresence>
            {
                mount &&                
                    <article className={styles.container}>
                        <AllProjects />
                    </article>         
            }                   
        </AnimatePresence>
    )
}

export default ProjectSection;