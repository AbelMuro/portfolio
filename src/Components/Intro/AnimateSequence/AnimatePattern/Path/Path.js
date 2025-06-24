import React from 'react';
import {motion} from 'framer-motion';
import * as styles from './styles.module.css';

function Path({d, scale}) {
    return(
        <>
            <motion.path d={d} fill='none' stroke='#0400ff' strokeWidth={1} style={scale ? scale : {}} filter={'url(#glowEffect)'}/>
        </>
        
    )
}

export default Path;

