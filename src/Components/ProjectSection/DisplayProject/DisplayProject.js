import React from 'react';
import images from '../ProjectData/images';
import {motion, useTransform, useMotionValue, useSpring} from 'framer-motion'
import * as styles from './styles.module.css';

function DisplayProject({projectTitle, src, href}) {
    const xMousePosition = useMotionValue(100);
    const yMousePosition = useMotionValue(83);
    const rotateX = useTransform(yMousePosition, [0, 166], [35, -35]);
    const rotateY = useTransform(xMousePosition, [0, 200], [-35, 35])
    const smoothRotateX = useSpring(rotateX, {stiffness: 150, damping: 40});
    const smoothRotateY = useSpring(rotateY, {stiffness: 150, damping: 40});

    const handleLink = () => {
        window.open(href, '_blank');
    }


    const handleMouseMove = (e) => {
        const x = e.nativeEvent.offsetX;
        const y = e.nativeEvent.offsetY;
        console.log(x, y);
        if(y > 166) {
            handleMouseLeave();
            return;
        }
        xMousePosition.set(x);
        yMousePosition.set(y);
    }

    const handleMouseLeave = () => {
        xMousePosition.set(100);
        yMousePosition.set(83);
    }


    return(
        <div className={styles.container}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            >
            <div className={styles.wrapper} onClick={handleLink}>
                <motion.div 
                    className={styles.mask} 
                    style={{rotateX: smoothRotateX, rotateY: smoothRotateY}}
                    >
                        <img className={styles.image} src={images[src]}/>  
                </motion.div>                
            </div>
            <h2 className={styles.title}>
                {projectTitle}
            </h2>
        </div>
    )
}

export default DisplayProject;