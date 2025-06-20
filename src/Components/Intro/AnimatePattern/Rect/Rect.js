import React from 'react';

function Rect(props) {
    return(
        <>
            <rect {...props} fill='none' stroke='#0400ff'/>
            <rect {...props} fill='none' stroke='#0400ff' strokeWidth={Number(props.strokeWidth) * 1.2} filter={'url(#glowEffect)'}/>
        </>
        
    )
}

export default Rect; 