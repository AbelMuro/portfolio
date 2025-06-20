import React from 'react';
import {motion} from 'framer-motion';
import * as styles from './styles.module.css';

function Path({d, scale}) {
    return(
        <>
            <motion.path d={d} stroke='#0400ff' strokeWidth={1} style={scale ? scale : {}}/>
            <motion.path d={d} stroke='#0400ff' strokeWidth={0.9} filter={'url(#glowEffect)'} style={scale ? scale : {}}/>
        </>
        
    )
}

export default Path;

