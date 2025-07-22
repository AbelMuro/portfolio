import React, {useState, memo} from 'react';
import {AnimatePresence, motion, LayoutGroup} from 'framer-motion';
import * as styles from './styles.module.css'

function EnterEmail() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleEmail = (e) => {
        setError('');
        e.target.setCustomValidity('');
        setEmail(e.target.value);
    }

    const handleBlur = (e) => {
        const isEmpty = e.target.validity.valueMissing;
        const isInvalid = e.target.validity.typeMismatch;

        if(isEmpty)
            setError("Can't be empty.");
        else if(isInvalid)
            setError("Email is invalid.");
    }

    const handleInvalid = (e) => {
        e.target.setCustomValidity(' ');
        setError("Can't be empty.");
    }



    return(
            <motion.fieldset layout={'position'} className={styles.container} transition={{ layout: { duration: 0.3, ease: "linear" } }}>
                <AnimatePresence mode="popLayout">
                    <motion.label layout className={styles.label} htmlFor='email' key='label'>
                        Enter email:
                    </motion.label>
                    <motion.input 
                        key='input'
                        layout
                        id='email' 
                        type='email'
                        value={email}
                        onChange={handleEmail}
                        onBlur={handleBlur}
                        onInvalid={handleInvalid}
                        className={styles.input} 
                        placeholder='abelmuro93@gmail.com'
                        required
                        />
                        {error && 
                            <motion.div layout className={styles.error_message} initial={{scale: 0}} animate={{scale: 1}} exit={{scale: 0}} key='error'>
                                {error}
                            </motion.div>
                        }
                </AnimatePresence>

            </motion.fieldset>            
    )
}


export default memo(EnterEmail);