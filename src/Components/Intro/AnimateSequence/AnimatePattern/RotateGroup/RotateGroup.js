import React from 'react';
import {motion} from 'framer-motion';
import * as styles from './styles.module.css';

function RotateGroup({children, from, to, duration}) {
    return(
        <motion.g
            className={styles.group}
            initial={{rotate: from}}
            animate={{rotate: to}}
            transition={{repeat: Infinity, ease: 'linear', duration}}
        >
            {children}
        </motion.g>  
    )
}

export default RotateGroup;