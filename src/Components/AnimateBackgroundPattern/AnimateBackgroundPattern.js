import React, {useRef, createContext} from 'react';
import AnimateSequence from './AnimateSequence';
import {useScroll, useMotionValueEvent} from 'framer-motion'
import * as styles from './styles.module.css';

export const ContainerContext = createContext();

function AnimateBackgroundPattern() {
    const {scrollYProgress, scrollY} = useScroll();
    const MainContainerRef = useRef();

    useMotionValueEvent(scrollY, 'change', (value) => {
        console.log(value);
    })

    return(
        <ContainerContext.Provider value={{MainContainerRef}}>
            <header className={styles.container} id={"home"} ref={MainContainerRef}>
                <AnimateSequence/>
            </header>            
        </ContainerContext.Provider>

    )
}
export default AnimateBackgroundPattern;
