import React, {useState, useEffect, useRef} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import * as styles from './styles.module.css';

function TrailingMouseAnimation(){
    const [trail, setTrail] = useState([]);
    const timeout = useRef();
    const scale = useRef([1.8, 1.2, 2.5, 2.1, 0.5, 1.3, 2.0, 1.8, 1.7])

    useEffect(() => {
        const handleMouse = (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            setTrail((prev) => {
                if(prev.length >= 50)
                    return [...prev.slice(-10), { x: mouseX, y: mouseY, id: Date.now()}]
                else
                    return [...prev, { x: mouseX, y: mouseY, id: Date.now()}]
                
            });

            clearTimeout(timeout.current);
            timeout.current = setTimeout(() => {
                setTrail([]);
            }, 300)
        }

        document.addEventListener('mousemove', handleMouse);
        
        return () => {
            document.removeEventListener('mousemove', handleMouse)
        }
    }, [])

    return(
        
            <section className={styles.container}>
                <AnimatePresence>   
                    {trail.map(({x, y, id}, i) => {
                        const smokeEffect = i % 9;
                        const animateScale = scale.current[i % 9];

                        return(
                            <motion.div 
                                key={`${id} ${i}`} 
                                className={styles.trail} 
                                initial={{scale: 0, opacity: 0}}
                                animate={{scale: animateScale, opacity: 0.8}}
                                exit={{scale: animateScale, opacity: 0}}
                                transition={{duration: 0.8}}
                                style={{
                                    top: `${y}px`, 
                                    left: `${x}px`,
                                    filter: `url(#smokeEffect${smokeEffect})`
                                }}
                            />
                        )
                    })} 
                </AnimatePresence>
                <svg width='0' height='0' xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <filter id="smokeEffect1">
                                <feTurbulence type="fractalNoise" baseFrequency="0.08 0.1" numOctaves="138" result="noise"/>
                                <feDisplacementMap in="SourceGraphic" in2="noise" scale="10"/>
                            </filter>
                            <filter id="smokeEffect2">
                                <feTurbulence type="fractalNoise" baseFrequency="0.1 0.1" numOctaves="102" result="noise" seed="7"/>
                                <feDisplacementMap in="SourceGraphic" in2="noise" scale="27"/>
                            </filter>
                            <filter id="smokeEffect3">
                                <feTurbulence type="turbulence" baseFrequency="0.1" numOctaves="162" result="noise" seed="12"/>
                                <feDisplacementMap in="SourceGraphic" in2="noise" scale="17"/>
                            </filter>
                            <filter id="smokeEffect4">
                                <feTurbulence type="turbulence" baseFrequency="0.13" numOctaves="12" result="noise" seed="122"/>
                                <feDisplacementMap in="SourceGraphic" in2="noise" scale="17"/>
                            </filter>
                            <filter id="smokeEffect5">
                                <feTurbulence type="turbulence" baseFrequency="0.21" numOctaves="262" result="noise" seed="122"/>
                                <feDisplacementMap in="SourceGraphic" in2="noise" scale="137"/>
                            </filter>
                            <filter id="smokeEffect6">
                                <feTurbulence type="turbulence" baseFrequency="0.9" numOctaves="62" result="noise" seed="45"/>
                                <feDisplacementMap in="SourceGraphic" in2="noise" scale="137"/>
                            </filter>
                            <filter id="smokeEffect7">
                                <feTurbulence type="turbulence" baseFrequency="0.13" numOctaves="42" result="noise" seed="142"/>
                                <feDisplacementMap in="SourceGraphic" in2="noise" scale="17"/>
                            </filter>
                            <filter id="smokeEffect8">
                                <feTurbulence type="turbulence" baseFrequency="0.21" numOctaves="62" result="noise" seed="12"/>
                                <feDisplacementMap in="SourceGraphic" in2="noise" scale="137"/>
                            </filter>
                            <filter id="smokeEffect9">
                                <feTurbulence type="turbulence" baseFrequency="0.13" numOctaves="34" result="noise" seed="12"/>
                                <feDisplacementMap in="SourceGraphic" in2="noise" scale="17"/>
                            </filter>
                        </defs>            
                </svg>                
            </section>
    )
}

export default TrailingMouseAnimation;