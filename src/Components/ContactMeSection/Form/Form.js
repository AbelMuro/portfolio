import React, {useState} from 'react';
import EnterName from './EnterName';
import EnterEmail from './EnterEmail';
import EnterMessage from './EnterMessage';
import {motion, LayoutGroup} from 'framer-motion';
import * as styles from './styles.module.css';

function Form() {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <form className={styles.form} onSubmit={handleSubmit}>
            <LayoutGroup>
                <motion.h2 layout>
                    Contact Me
                </motion.h2>                
                <EnterName />            
                <EnterEmail />
                <EnterMessage />
                <motion.button className={styles.submit} layout> 
                    Submit
                </motion.button>                 
            </LayoutGroup>
        </form>
    )
}

export default Form;