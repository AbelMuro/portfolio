import React, {useState, useRef} from 'react';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import {motion, useScroll, useMotionValueEvent, AnimatePresence} from 'framer-motion';
import * as styles from './styles.module.css';

function ProjectSection() {
    const [mount, setMount] = useState(true);
    const [clock, setClock] = useState('clock one');
    const {scrollY} = useScroll();

    useMotionValueEvent(scrollY, 'change', (value) => {
        if(value < 17800)
            setMount(true);
        else
            setMount(true);
    });

    useMotionValueEvent(scrollY, 'change', (value) => {
        if(value < 22000)
            setClock('clock one');
        else
            setClock('clock two');
    })

    

    return(
        <AnimatePresence>
            {
                mount &&                
                    <article>
                        <SectionOne/>
                        <SectionTwo clock={clock}/>
                        <SectionThree clock={clock}/>
                    </article>         
            }                   
        </AnimatePresence>
    )
}

export default ProjectSection;