import React, {useRef, useState} from 'react';
import images from '../ProjectData/images';
import {useScroll, useMotionValueEvent, motion, useTransform, useMotionValue, useSpring} from 'framer-motion'
import * as styles from './styles.module.css';

function DisplayProject({projectTitle, src, href}) {
    const [mount, setMount] = useState(true);
    const projectRef = useRef();
    const xMousePosition = useMotionValue(100);
    const yMousePosition = useMotionValue(83);
    const rotateX = useTransform(yMousePosition, [0, 166], [35, -35]);
    const rotateY = useTransform(xMousePosition, [0, 200], [-35, 35])
    const smoothRotateX = useSpring(rotateX, {stiffness: 150, damping: 40});
    const smoothRotateY = useSpring(rotateY, {stiffness: 150, damping: 40});
    const {scrollYProgress} = useScroll({target: projectRef, offset: ['end end', 'end -20vh']});

    const handleLink = () => {
        window.open(href, '_blank');
    }

    const handleMouseMove = (e) => {
        const x = e.nativeEvent.offsetX;
        const y = e.nativeEvent.offsetY;
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

    useMotionValueEvent(scrollYProgress, 'change', (value) => {
        if(value === 1)
            setMount(false);
        else
            setMount(true);
    })


    return (
        <motion.div className={styles.container} ref={projectRef} layout>
            {mount && <div className={styles.project}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                >
                <motion.div className={styles.wrapper} onClick={handleLink}>
                    <motion.div 
                        className={styles.mask} 
                        initial={{scale: 0}}
                        animate={{scale: 1}}
                        style={{rotateX: smoothRotateX, rotateY: smoothRotateY}}
                        >
                            <img className={styles.image} src={images[src]}/>  
                    </motion.div>                
                </motion.div>
                <motion.h2 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    className={styles.title}>
                    {projectTitle}
                </motion.h2>
            </div> }          
        </motion.div>

    )
}

export default DisplayProject;