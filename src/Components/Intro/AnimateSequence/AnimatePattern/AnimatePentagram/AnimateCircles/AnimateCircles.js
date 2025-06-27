import React, {useState, useContext} from 'react';
import { ContainerContext } from '!/Intro';
import Circle from './Circle';
import {useScroll, useMotionValueEvent} from 'framer-motion';

function AnimateCircles() {
    const [mount, setMount] = useState(false);
    const {MainContainerRef} = useContext(ContainerContext);
    const {scrollYProgress} = useScroll(MainContainerRef);

    useMotionValueEvent(scrollYProgress, 'change', (value) => {
        if(value >= 0.30)
            setMount(true);
        else
            setMount(false)
    })

    return mount && (
        <>
            <Circle scrollThresholds={[0.30, 0.35]} scaleTo={1.2} rotateX={[0, 360, 0]} rotateY={[0, -360, 0]}/>
            <Circle scrollThresholds={[0.33, 0.38]} scaleTo={1.4} rotateX={[0, 180, 0]} rotateY={[0, -180, 0]}/>
            <Circle scrollThresholds={[0.36, 0.41]} scaleTo={1.6} rotateX={[0, 90, 0]} rotateY={[0, -360, 0]}/>
        </>
    )
}

export default AnimateCircles;