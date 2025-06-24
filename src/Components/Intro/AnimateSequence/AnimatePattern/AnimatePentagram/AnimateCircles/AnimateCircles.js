import React from 'react';
import Circle from './Circle';
import {motion} from 'framer-motion';

function AnimateCircles() {

    return(
        <>
            <Circle scrollThresholds={[0.40, 0.45]} scaleTo={1.2} rotateX={[0, 360, 0]} rotateY={[0, -360, 0]}/>
            <Circle scrollThresholds={[0.43, 0.48]} scaleTo={1.4} rotateX={[0, 180, 0]} rotateY={[0, -180, 0]}/>
            <Circle scrollThresholds={[0.46, 0.51]} scaleTo={1.6} rotateX={[0, 90, 0]} rotateY={[0, -360, 0]}/>
        </>
    )
}

export default AnimateCircles;