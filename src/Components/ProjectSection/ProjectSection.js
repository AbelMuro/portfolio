import React, {useState} from 'react';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import SectionFour from './SectionFour';
import SectionFive from './SectionFive';
import {motion, useScroll, useMotionValueEvent, AnimatePresence} from 'framer-motion';
import * as styles from './styles.module.css';

function ProjectSection() {
    const [mount, setMount] = useState(false);
    const [clock, setClock] = useState('clock one');
    const {scrollY} = useScroll();

    useMotionValueEvent(scrollY, 'change', (value) => {
        if(value < 17800)
            setMount(false);
        else
            setMount(true);
    });

    useMotionValueEvent(scrollY, 'change', (value) => {
        if(value < 22400)
            setClock('clock one');
        else if (value >= 22400 && value <= 24300)
            setClock('clock two');
        else
            setClock('clock three');
    })

    

    return(
        <AnimatePresence>
            {
                mount &&                
                    <article>
                        <SectionOne/>
                        <SectionTwo clock={clock} setClock={setClock}/>
                        <SectionThree clock={clock} setClock={setClock}/>
                        <SectionFour clock={clock} setClock={setClock}/>
                        <SectionFive/>
                    </article>         
            }                   
        </AnimatePresence>
    )
}

export default ProjectSection;