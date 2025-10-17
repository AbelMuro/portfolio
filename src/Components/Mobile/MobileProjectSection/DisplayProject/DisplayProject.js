import React, {useState, useRef, useEffect} from 'react';
import {useScroll, useMotionValueEvent, motion} from 'framer-motion';
import {useSelector} from 'react-redux';
import images from '~/assets/ProjectData/images';
import * as styles from './styles.module.css';

function DisplayProject({title, src, href}){
    const containerRef = useRef();    
    const {scrollYProgress} = useScroll({target: containerRef, offset: ['start end', 'start end']});
    const [mount, setMount] = useState(false);
    const display = useSelector(state => state.display);

    useMotionValueEvent(scrollYProgress, 'change', (value) => {
        if(display) return;

        if(value === 1)
            setMount(true);
        else
            setMount(false);
    })

    useEffect(() => {
        if(display)
            setMount(true);
    }, [display])

    return (
        <div className={styles.project} ref={containerRef}>
            {
                mount && 
                <>
                    <motion.a 
                        href={href} 
                        target='_blank' 
                        initial={{scale: 0}} 
                        animate={{scale: 1}} 
                        transition={{duration: 0.6}}>
                        <img className={styles.project_image} src={images[src]} />
                    </motion.a>
                    
                    <h2 className={styles.project_title}>
                        {title}
                    </h2>                
                </>
            }

        </div>
    )
}

export default DisplayProject;