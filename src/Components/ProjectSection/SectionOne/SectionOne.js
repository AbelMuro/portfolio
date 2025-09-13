import React, {useRef} from 'react';
import AllProjects from '../ProjectData';
import DisplayProject from '../DisplayProject';
import {useMount} from '~/Hooks';
import * as styles from './styles.module.css';

function SectionOne() {
    const [mount, target] = useMount('section one')
    const projects = useRef(AllProjects.slice(0, 21));   

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
                                <DisplayProject projectTitle={title} src={src} href={href} key={title}/>
                            )
                        })}          
                </>
            } 
        </section>
    )
}

export default SectionOne;