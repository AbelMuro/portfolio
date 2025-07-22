import React, {useState, memo} from 'react';
import {motion, LayoutGroup, AnimatePresence} from 'framer-motion';
import * as styles from './styles.module.css';

function EnterMessage(){
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleMessage = (e) => {
        setError('');
        e.target.setCustomValidity('');
        setMessage(e.target.value);
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
                <AnimatePresence mode='popLayout'>
                    <motion.label layout className={styles.label} htmlFor='message' key='label'>
                        Enter message:
                    </motion.label>
                    <motion.textarea 
                        key='textarea'
                        layout
                        id='message' 
                        type='text' 
                        value={message}
                        onChange={handleMessage}
                        onBlur={handleBlur}
                        onInvalid={handleInvalid}
                        className={styles.textarea} 
                        placeholder='Message goes here...'
                        required
                        />
                        {error && 
                            <motion.div 
                                layout
                                key='error'
                                className={styles.error_message} 
                                initial={{scale: 0}} 
                                animate={{scale: 1}} 
                                exit={{scale: 0}}>
                                    {error}
                            </motion.div>
                        }
                </AnimatePresence>
            </motion.fieldset>            
    )
}

export default memo(EnterMessage);