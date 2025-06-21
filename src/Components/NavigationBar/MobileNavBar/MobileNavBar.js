import React, {useState} from 'react';
import * as styles from './styles.module.css';
import {motion, AnimatePresence} from 'framer-motion';
import {menuVariant, menuItemVariant} from './Variants';

function MobileNavBar() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }

    return(
        <nav className={styles.container}>
            <button className={styles.hamburger} onClick={handleOpen}>
                
            </button>
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
                        </motion.li>
                        <motion.li className={styles.navItem} variants={menuItemVariant} onClick={handleOpen}>
                            <a href="#home"> 
                                Home
                            </a>
                        </motion.li>
                        <motion.li className={styles.navItem} variants={menuItemVariant} onClick={handleOpen}>
                            <a href="#aboutMe"> 
                                About Me
                            </a>
                        </motion.li>
                        <motion.li className={styles.navItem} variants={menuItemVariant} onClick={handleOpen}>
                            <a href="#projects">
                                Projects
                            </a>
                        </motion.li>
                        <motion.li className={styles.navItem} variants={menuItemVariant} onClick={handleOpen}>
                            <a href="#contactMe">
                                Contact Me
                            </a>
                        </motion.li>             
                    </ul>
                </motion.section>}                
            </AnimatePresence>
        </nav>
    )
}

export default MobileNavBar;