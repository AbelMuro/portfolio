import React from 'react';
import AllProjects from '../ProjectData'
import AnimateClock from './AnimateClock'
import DisplayProject from '../DisplayProject';
import * as styles from './styles.module.css';

function SectionTwo() {
    return(
        <section className={styles.container}>
            {AllProjects.slice(12, 24).map((project) => {
                const title = project.projectTitle;
                const src = project.src;
                const href = project.href;

                return(
                    <div className={styles.project} key={title}>
                        <DisplayProject projectTitle={title} src={src} href={href}/>  
                    </div>
                    )
            })}
            <div className={styles.clock_container}>
                <AnimateClock/>
            </div>

        </section>
    )
}

export default SectionTwo;