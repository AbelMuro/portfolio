import React from 'react';
import * as styles from './styles.module.css';

function Path({d}) {
    return(
        <>
            <path d={d} stroke='#0400ff' strokeWidth={1}/>
            <path d={d} stroke='#0400ff' strokeWidth={0.9} filter={'url(#glowEffect)'}/>
        </>
        
    )
}

export default Path;

