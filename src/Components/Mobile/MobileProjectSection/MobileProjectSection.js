import React, {useState} from 'react';
import DisplayProject from './DisplayProject';
import allProjects from '~/assets/ProjectData'
import * as styles from './styles.module.css';

function MobileProjectSection() {

    return (
        <section className={styles.container}>
            {
                allProjects.map((project) => {
                    return (
                        <DisplayProject title={project.projectTitle} src={project.src} href={project.href} key={project.projectTitle}/>
                    )
                })
            }            
        </section>

    )
}

export default MobileProjectSection;