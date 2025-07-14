import React, {useState, useEffect, useRef} from 'react';
import images from '../ProjectData/images';
import {motion, useScroll, useTransform, useMotionValue, useSpring} from 'framer-motion'
import * as styles from './styles.module.css';

function DisplayProject({projectTitle, src, href}) {
    const containerImageRef = useRef();
    const xMousePosition = useMotionValue(100);
    const yMousePosition = useMotionValue(83);
    const rotateX = useTransform(yMousePosition, [0, 166], [45, -45]);
    const rotateY = useTransform(xMousePosition, [0, 200], [-45, 45])
    const smoothRotateX = useSpring(rotateX, {stiffness: 150, damping: 40});
    const smoothRotateY = useSpring(rotateY, {stiffness: 150, damping: 40});


    const handleMouseMove = (e) => {
        const x = e.nativeEvent.offsetX;
        const y = e.nativeEvent.offsetY;
        xMousePosition.set(x);
        yMousePosition.set(y);
    }

    const handleMouseLeave = () => {
        xMousePosition.set(100);
        yMousePosition.set(83);
    }


    return(
        <div className={styles.container}>
            <motion.div 
                ref={containerImageRef}
                className={styles.mask} 
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{rotateX: smoothRotateX, rotateY: smoothRotateY}}
                >
                    <a href={href} target='_blank'>
                        <img className={styles.image} src={images[src]}/>  
                    </a>  
            </motion.div>
            <h2 className={styles.title}>
                {projectTitle}
            </h2>
        </div>
    )
}

export default DisplayProject;