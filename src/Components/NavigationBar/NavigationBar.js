import React, {useState, useRef, useEffect} from 'react';
import * as styles from './styles.module.css';
import MobileNavBar from './MobileNavBar';
import {motion, useScroll, useMotionValueEvent, AnimatePresence} from 'framer-motion';
import {useMediaQuery} from '~/Hooks';
import audioFiles from './Audio';


function NavigationBar() {
    const [mount, setMount] = useState(true);
    const [play, setPlay] = useState(false);
    const timeoutRef = useRef();
    const {scrollYProgress} = useScroll();
    const [mobile] = useMediaQuery("(max-width: 600px)");
    const audioRef = useRef();

    const handleLink = () => {}

    useMotionValueEvent(scrollYProgress, 'change', () => {
        if(timeoutRef.current)
            clearTimeout(timeoutRef.current);

        setMount(false);

        timeoutRef.current = setTimeout(() => {
            setMount(true)
        }, 2000)
    })

    const handlePlay = () => {
        if(!audioRef.current){
            audioRef.current = new Audio(audioFiles['daysOfWonder']);
            audioRef.current.volume = 0.1;
        }
        
        audioRef.current.play();
        setPlay(true);
    }

    const handlePause = () => {
        if(!audioRef.current) return;
        audioRef.current.pause();
        setPlay(false);
    }

    useEffect(() => {
        if(!audioRef.current) return;

        const handleEnd = () => {
            setPlay(false);
        }

        audioRef.current.addEventListener('ended', handleEnd);

        return () => {
            audioRef.current.removeEventListener('ended', handleEnd)
        }
        
    }, [play])


    return (
        <AnimatePresence>
            {mount && <>
                        {mobile ? <MobileNavBar play={play} handlePlay={handlePlay} handlePause={handlePause}/>  : 
                            <motion.nav 
                                className={styles.navBar}
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                >
                                    <ul className={styles.navItems}>
                                        <li className={styles.navItem}>
                                            <a href="#home"> 
                                                Intro
                                            </a>
                                        </li>
                                        <li className={styles.navItem}>
                                            <a href="#aboutMe"> 
                                                About Me
                                            </a>
                                        </li>
                                        <li className={styles.navItem}>
                                            <a href="#projects">
                                                Projects
                                            </a>
                                        </li>
                                        <li className={styles.navItem}>
                                            <a href="#contactMe" onClick={handleLink}>        
                                                Contact Me
                                            </a>
                                        </li>                  
                                    </ul>
                                    {
                                        play ? 
                                            <button className={styles.pause} onClick={handlePause}/> :
                                            <button className={styles.play} onClick={handlePlay}/>
                                    }
                                    

                            </motion.nav>  
                        }            
                </>}

            </AnimatePresence> 
        )
}

export default NavigationBar;