import React from 'react';
import Form from './Form';
import { LayoutGroup, motion } from 'framer-motion';
import * as styles from './styles.module.css';

function ContactMeSection() {

    const handleLink = (link) => {
        if(link === 'linkedin')
            window.open('https://www.linkedin.com/in/abel-muro-38a262173/', '_blank');
        else if(link === 'github') 
            window.open('https://github.com/AbelMuro', '_blank');
        else if(link === 'frontendmentor')
            window.open('https://www.frontendmentor.io/profile/AbelMuro', '_blank');
        else if(link === 'resume')
            window.open('https://drive.google.com/file/d/1RsuLDZb1Cv7HFm2BN6QaFTLbt7O_hymB/view?usp=sharing', '_blank');
    }

    return(
            <section className={styles.container}>
                <LayoutGroup>
                    <motion.h2 layout>
                        Contact Me
                    </motion.h2>  
                    <motion.ul layout className={styles.links}>
                        <li>
                            <button className={styles.linkedin} onClick={() => handleLink('linkedin')}/>
                        </li>
                        <li>
                            <button className={styles.github} onClick={() => handleLink('github')}/>
                        </li>
                        <li>
                            <button className={styles.frontendmentor} onClick={() => handleLink('frontendmentor')}/>
                        </li>
                        <li>
                            <button className={styles.resume} onClick={() => handleLink('resume')}/>
                        </li>
                    </motion.ul>
                    <Form/>
                </LayoutGroup>
            </section>
        )
}


export default ContactMeSection;