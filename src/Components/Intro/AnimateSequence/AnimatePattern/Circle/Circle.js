import React from 'react';
import * as styles from './styles.module.css';

function Circle(props) {

    return(
        <>
            <circle {...props} fill='none' stroke='#0400ff' filter={'url(#glowEffect)'}/>
        </>
        
    )
}

export default Circle;