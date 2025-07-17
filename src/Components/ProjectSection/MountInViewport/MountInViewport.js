import React, {useRef,  useState} from 'react';
import {useScroll, useMotionValueEvent} from 'framer-motion';
import * as styles from './styles.module.css';

function MountInViewport({children, ParentComponent}) {
    const container = useRef();
    const [mount, setMount] = useState(false);
    const {scrollYProgress} = useScroll({target: container, offset: ['start 110vh', 'start 110vh']});

    useMotionValueEvent(scrollYProgress, 'change', (y) => {
        if(y === 1)
            setMount(true)
        else
            setMount(false);
    });

    return (
        <ParentComponent ref={container}> 
            {mount && children }                 
        </ParentComponent>
    )
}

export default MountInViewport;