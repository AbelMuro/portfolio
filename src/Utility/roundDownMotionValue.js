import React from 'react';
import {useTransform} from 'framer-motion';

function roundDownMotionValue(motionValue) {
    const roundedDownMotionValue = useTransform(motionValue, (v) => Math.floor(v * 1000) / 1000);
    return roundedDownMotionValue;

}

export default roundDownMotionValue;