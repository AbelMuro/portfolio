import React, {useContext, useState} from 'react';
import {ContainerContext} from '!/AnimateBackgroundPattern'
import {motion, useTransform, useScroll, useSpring, useMotionValueEvent} from 'framer-motion';
import * as styles from './styles.module.css';

function FadeOutPath(props) {
    const [mount, setMount] = useState(true);
    const {MainContainerRef} = useContext(ContainerContext);
    const {scrollY} = useScroll(MainContainerRef);
    const strokeDashoffset = useTransform(scrollY, [2000, 3000], [0, 60]);
    const smoothDashoffset = useSpring(strokeDashoffset, {stiffness: 150, damping: 80});

    useMotionValueEvent(scrollY, 'change', (value) => {
        if(value > 3700)
            setMount(false);
        else
            setMount(true);
    })

    return mount && (
            <motion.path {...props} style={{strokeDashoffset: smoothDashoffset}} strokeDasharray='60' className={styles.path}/>
    )
}

export default FadeOutPath;