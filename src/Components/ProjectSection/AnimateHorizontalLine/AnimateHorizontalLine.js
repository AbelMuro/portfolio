import React from 'react';
import * as styles from './styles.module.css';

function AnimateHorizontalLine() {
    return(
        <svg className={styles.container} viewBox={'0 0 206 206'}>
            <defs></defs>
            <path
                d="m 88.883685,67.074506 102.523485,-0.0073"
                id="path3"
                fill="#000000"
                stroke="#000000"
                strokeWidth={0.693}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={0}
                strokeDasharray="none"
                />
        </svg>
    )
}

export default AnimateHorizontalLine;