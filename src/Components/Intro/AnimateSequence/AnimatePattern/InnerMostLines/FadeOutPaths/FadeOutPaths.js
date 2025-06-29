import React, {useContext, useState} from 'react';
import {ContainerContext} from '!/Intro'
import {motion, useTransform, useScroll, useSpring, useMotionValueEvent} from 'framer-motion';
import * as styles from './styles.module.css';

function FadeOutPath(props) {
    const [mount, setMount] = useState(true);
    const {MainContainer} = useContext(ContainerContext);
    const {scrollYProgress} = useScroll(MainContainer);
    const strokeDashoffset = useTransform(scrollYProgress, [0.20, 0.30], [0, 60]);
    const smoothDashoffset = useSpring(strokeDashoffset, {stiffness: 150, damping: 80});

    useMotionValueEvent(scrollYProgress, 'change', (value) => {
        if(value > 0.37)
            setMount(false);
        else
            setMount(true);
    })

    return mount && (
            <motion.path {...props} style={{strokeDashoffset: smoothDashoffset}} strokeDasharray='60' className={styles.path}/>
    )
}

export default FadeOutPath;