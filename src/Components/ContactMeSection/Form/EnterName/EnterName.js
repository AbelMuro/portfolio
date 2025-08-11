import React, {useState, memo} from 'react';
import {motion, LayoutGroup, AnimatePresence} from 'framer-motion';
import * as styles from './styles.module.css';

function EnterName() {
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const handleName = (e) => {
        setError('');
        e.target.setCustomValidity('');
        setName(e.target.value);
    }

    const handleBlur = (e) => {
        const isEmpty = e.target.validity.valueMissing;

        if(isEmpty)
            setError("Can't be empty.");
    }

    const handleInvalid = (e) => {
        e.target.setCustomValidity(' ');
        setError("Can't be empty.");
    }



    return( 
            <motion.fieldset layout={'position'} className={styles.container} transition={{ layout: { duration: 0.3, ease: "linear" } }}>
                <AnimatePresence mode="popLayout">
                    <motion.label layout className={styles.label} htmlFor='name' key='label'>
                        Enter name:
                    </motion.label>
                    <motion.input 
                        name='name'
                        key='input'
                        layout
                        id='name' 
                        type='text' 
                        value={name}
                        onChange={handleName}
                        onBlur={handleBlur}
                        onInvalid={handleInvalid}
                        className={styles.input} 
                        placeholder='John Smith'
                        required/>
                    {error && 
                        <motion.div layout className={styles.error_message} initial={{scale: 0}} animate={{scale: 1}} exit={{scale: 0}} key='error'>
                            {error}
                        </motion.div>
                    }
                </AnimatePresence>
            </motion.fieldset>            
    )
}

export default memo(EnterName);