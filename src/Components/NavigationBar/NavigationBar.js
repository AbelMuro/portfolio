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

    const handleLink = (link) => {
        if(link === 'intro')
            window.scrollTo({top: 0, behavior: 'smooth'});
        else if(link === 'about me')
            window.scrollTo({top: 10200, behavior: 'smooth'});
        else if(link === 'projects')
            window.scrollTo({top: 17800, behavior: 'smooth'});
        else
            window.scrollTo({top: 28071, behavior: 'instant'});
    }

    const handleMobileLink = (link) => {
        if(link === 'intro')
            window.scrollTo({top: 0, behavior: 'smooth'});
        else if(link === 'about me')
            window.scrollTo({top: 4700, behavior: 'smooth'});
        else if(link === 'projects')
            window.scrollTo({top: 5500, behavior: 'smooth'});
        else{
            window.scrollTo({top: 32289, behavior: 'instant'});
            setTimeout(() => {
                window.scrollTo({top: 32289, behavior: 'instant'});
            }, 10)
        }
    }

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
                        {mobile ? <MobileNavBar play={play} handlePlay={handlePlay} handlePause={handlePause} handleLink={handleMobileLink}/>  : 
                            <motion.nav 
                                className={styles.navBar}
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                >
                                    <ul className={styles.navItems}>
                                        <li className={styles.navItem}>
                                            <a onClick={() => handleLink('intro')}> 
                                                Intro
                                            </a>
                                        </li>
                                        <li className={styles.navItem}>
                                            <a onClick={() => handleLink('about me')}> 
                                                About Me
                                            </a>
                                        </li>
                                        <li className={styles.navItem}>
                                            <a onClick={() => handleLink('projects')}>
                                                Projects
                                            </a>
                                        </li>
                                        <li className={styles.navItem}>
                                            <a onClick={() => handleLink('contact me')}>        
                                                Contact Me
                                            </a>
                                        </li>                  
                                    </ul>
                                    {
                                        play ? 
                                            <button className={styles.play} onClick={handlePause}> 
                                                Pause Music
                                            </button> :
                                            <button className={styles.play} onClick={handlePlay}>
                                                Play Music
                                            </button>
                                    }
                                    

                            </motion.nav>  
                        }            
                </>}

            </AnimatePresence> 
        )
}

export default NavigationBar;