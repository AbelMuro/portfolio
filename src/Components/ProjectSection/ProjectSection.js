import React, {useState} from 'react';
import SectionOne from './SectionOne';
import {useScroll, useMotionValueEvent, AnimatePresence} from 'framer-motion';
import * as styles from './styles.module.css';

/* 
    this is where i left off,  i want to refactor the ProjectSection component
    into displaying a certain amount of projects at a time based on the scroll position
*/

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
                        <SectionOne />
                    </article>         
            }                   
        </AnimatePresence>
    )
}

export default ProjectSection;