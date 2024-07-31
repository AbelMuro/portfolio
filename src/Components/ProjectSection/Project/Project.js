import React, {useEffect} from 'react';
import styles from './styles.module.css';

function Project({href, src, projectTitle, setCount}) {

    useEffect(() => {
        setCount((prev) => {
            return prev + 1;
        })
    }, [])

    return(
        <div className={styles.projectContainer}>
            <a className={styles.imageLink} target="_blank" href={href}>
                <img className={styles.projectImage} src={src}/>
            </a>
            <p className={styles.projectTitle}>
                {projectTitle}
            </p>
        </div>
    )
}

export default Project;