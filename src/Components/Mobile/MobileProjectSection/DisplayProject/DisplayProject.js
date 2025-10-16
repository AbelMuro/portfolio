import React, {useState, useRef} from 'react';
import {useScroll, useMotionValueEvent, motion} from 'framer-motion';
import images from '~/assets/ProjectData/images';
import * as styles from './styles.module.css';

function DisplayProject({title, src, href}){
    const containerRef = useRef();    
    const {scrollYProgress} = useScroll({target: containerRef, offset: ['start end', 'start end']});
    const [mount, setMount] = useState(false);

    useMotionValueEvent(scrollYProgress, 'change', (value) => {
        if(value === 1)
            setMount(true);
        else
            setMount(false);

    })

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