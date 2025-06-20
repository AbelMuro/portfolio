import React from 'react';
import * as styles from './styles.module.css';

function Circle(props) {

    return(
        <>
            <circle {...props} fill='none' stroke='#0400ff'/>
            <circle {...props} fill='none' stroke='#0400ff' strokeWidth={Number(props.strokeWidth) * 2} filter={'url(#glowEffect)'}/>
        </>
        
    )
}

export default Circle;