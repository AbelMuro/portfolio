import React, {memo} from 'react';
import Circle from './Circle';

function AnimateCircles() {
    return(
        <>
            <Circle scrollThresholds={[3000, 3500]} scaleTo={1.2} rotateX={[0, 360, 0]} rotateY={[0, -360, 0]}/>
            <Circle scrollThresholds={[3300, 3800]} scaleTo={1.4} rotateX={[0, 180, 0]} rotateY={[0, -180, 0]}/>
            <Circle scrollThresholds={[3600, 4100]} scaleTo={1.6} rotateX={[0, 90, 0]} rotateY={[0, -360, 0]}/>
        </>
    )
}

export default memo(AnimateCircles);