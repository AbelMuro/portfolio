import React, {useRef, useEffect} from 'react';
import {motion} from 'framer-motion';
import useMediaQuery from '~/Hooks/useMediaQuery';
import { text_variant } from '../Variants';

function AnimateLetter({letter}) {
    const [mobile] = useMediaQuery('(max-width: 700px)');
    const svgRef = useRef();
    const textRef = useRef();

    useEffect(() => {
        if(!svgRef.current || !textRef.current) return;

        const svgElement = svgRef.current;
        const textElement = textRef.current;

        setTimeout(() => {
            document.fonts.ready.then(() => {
                const bbox = textElement.getBBox();
                svgElement.setAttribute('width', bbox.width + 10);                  
            })
        }, 200)


    }, [mobile])

    return(
        <svg 
            xmlns='http://www.w3.org/2000/svg' 
            height={mobile ? '70' : '90'}
            ref={svgRef}>
                <motion.text
                    x='50%'
                    y="45"
                    fill="white"
                    textAnchor='middle'
                    fontSize={mobile ? '2.7rem' : '6rem'}
                    fontFamily="'AbelFont'"
                    dy=".3em"
                    stroke="white"
                    strokeWidth="3"
                    strokeDasharray={'450'}
                    variants={text_variant}
                    ref={textRef}
                >
                    {letter}
                </motion.text>
        </svg>
    )
}

export default AnimateLetter;