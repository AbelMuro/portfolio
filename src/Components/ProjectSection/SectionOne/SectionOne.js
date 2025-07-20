import React, {useRef, useState} from 'react';
import AllProjects from '../ProjectData';
import AnimateVerticalText from './AnimateVerticalText';
import AnimateCircle from './AnimateCircle';
import DisplayProject from '../DisplayProject';
import {useMount} from '~/Hooks';
import {useScroll, useMotionValueEvent} from 'framer-motion';
import * as styles from './styles.module.css';

function SectionOne() {
    const [mount, target] = useMount('section one')
    const projects = useRef(AllProjects.slice(0, 19));   

    return(
        <section className={styles.container} ref={target}>       
            {
                mount &&
                <>
                    {projects.current.map((project) => {
                            const title = project.projectTitle;
                            const src = project.src;
                            const href = project.href;
                            return (
                                    <div className={styles.project} key={title}>
                                        <DisplayProject projectTitle={title} src={src} href={href}/>
                                    </div>
                            )
                        })}
                    <div className={styles.designText}>
                        <AnimateVerticalText scrollThresholds={[18500, 19200]}/>
                    </div>   
                    <div className={styles.designCircle}>
                        <AnimateCircle/>
                    </div>            
                </>
            } 
        </section>
    )
}

export default SectionOne;