import React, {lazy, useState, useEffect} from 'react';
import {useIntersectionObserver} from '../../Hooks';
import projectData from './ProjectData';
const Project = lazy(() => import('./Project'));
import styles from './styles.module.css';
import images from './images';

const ITEM_HEIGHT = 282; 
const VISIBLE_COUNT = Math.ceil(window.innerHeight / ITEM_HEIGHT) * 3;

function ProjectSection () {
    const [startIndex, setStartIndex] = useState(0); 
    const [visibleItems, setVisibleItems] = useState(projectData.slice(0, VISIBLE_COUNT));
    const [inView, setInView] = useState(false);

    const handleIntersection = (entries) => { 
        entries.forEach(entry => { 
            if (entry.isIntersecting) 
                setInView(true); 
            else
                setInView(false);
        }); 
    };
    const setTarget = useIntersectionObserver(handleIntersection, {threshold: 0.1});


    const handleScroll = () => { 
        const container = document.querySelector('.' + styles.container);
        let relativeScrollPosition = container.getBoundingClientRect().top;
        relativeScrollPosition = relativeScrollPosition > 0 ? 0 : Math.abs(relativeScrollPosition);
        const newIndex = Math.floor(Math.abs(relativeScrollPosition) / ITEM_HEIGHT) * 3; 
        console.log(newIndex);
        if(newIndex !== startIndex) { 
            setStartIndex(newIndex); 
            setVisibleItems(projectData.slice(0, newIndex + VISIBLE_COUNT)); 
        } 
    }; 

    useEffect(() => { 
        if(inView)
            window.addEventListener('scroll', handleScroll); 
        else
            window.removeEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll); 
    }, [inView]);

    return(
        <section className={styles.container} ref={setTarget}>
            <h1 className={styles.title}>
                My Projects ({projectData.length})
            </h1>
            <div className={styles.container_list}>
                {visibleItems.map((project) => {
                    const href = project.href;
                    const src = project.src;
                    const title = project.projectTitle;

                    return(<Project href={href} src={images[src]} projectTitle={title} key={title}/>)
                })}               
            </div>             
                
        </section>

    )
}

export default ProjectSection;