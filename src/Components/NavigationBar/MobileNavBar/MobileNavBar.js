import React, {useState} from 'react';
import * as styles from './styles.module.css';
import {motion, AnimatePresence} from 'framer-motion';
import {menuVariant, menuItemVariant} from './Variants';

function MobileNavBar({play, handlePlay, handlePause, handleLink}) {
    const [open, setOpen] = useState(false);

    const handleOpen = (link) => {
        handleLink(link)
        setOpen(!open);
    }

    return(
        <nav className={styles.container}>
            <button className={styles.open} onClick={handleOpen}/>
            <AnimatePresence>
                {open && 
                <motion.section 
                    className={styles.menu} 
                    initial='hide' 
                    animate='show' 
                    exit='exit'
                    variants={menuVariant}>
                    <ul className={styles.navItems}>
                        <motion.li className={styles.navClose} onClick={handleOpen} variants={menuItemVariant}>
                            <button className={styles.close}/>
                        </motion.li>
                        <motion.li className={styles.navItem} variants={menuItemVariant}>
                            <a onClick={() => handleOpen('intro')}> 
                                Intro
                            </a>
                        </motion.li>
                        <motion.li className={styles.navItem} variants={menuItemVariant}>
                            <a onClick={() => handleOpen('about me')}> 
                                About Me
                            </a>
                        </motion.li>
                        <motion.li className={styles.navItem} variants={menuItemVariant}>
                            <a onClick={() => handleOpen('projects')}>
                                Projects
                            </a>
                        </motion.li>
                        <motion.li className={styles.navItem} variants={menuItemVariant}>
                            <a onClick={() => handleOpen('contact me')}>
                                Contact Me
                            </a>
                        </motion.li>  
                        <motion.li className={styles.navPlay}variants={menuItemVariant}>
                            {
                                play ? 
                                    <button className={styles.pause} onClick={handlePause}/> :
                                    <button className={styles.play} onClick={handlePlay}/>
                            }
                        </motion.li>           
                    </ul>
                </motion.section>}                
            </AnimatePresence>
        </nav>
    )
}

export default MobileNavBar;