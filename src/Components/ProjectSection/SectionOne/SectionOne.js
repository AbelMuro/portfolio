import React, {useRef, forwardRef} from 'react';
import AllProjects from '../ProjectData';
import AnimateVerticalText from './AnimateVerticalText';
import AnimateCircle from './AnimateCircle';
import DisplayProject from '../DisplayProject';
import MountInViewport from '../MountInViewport';
import * as styles from './styles.module.css';

/* this is where i left off, i need to find a way to prevent the grid from shifting upwards immediately when a new item is added*/

function SectionOne(){
    const projects = useRef(AllProjects.slice(0, 19));   

    return(
        <section className={styles.container}>
            {projects.current.map((project) => {
                    const title = project.projectTitle;
                    const src = project.src;
                    const href = project.href;
                    return (
                        <MountInViewport key={title} ParentComponent={forwardRef(({children}, ref) => {
                            return (
                                <div className={styles.project} ref={ref}>
                                    {children}
                                </div>
                            )
                        })}>
                            <DisplayProject projectTitle={title} src={src} href={href}/>
                        </MountInViewport>
                    )
                })}
            <div className={styles.designText}>
                <AnimateVerticalText scrollThresholds={[18500, 19200]}/>
            </div>   
            <div className={styles.designCircle}>
                <AnimateCircle/>
            </div>
        </section>
    )
}

export default SectionOne;