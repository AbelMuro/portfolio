import React, {useMemo, useState, useEffect} from 'react';
import {useMotionValue, useMotionValueEvent} from 'framer-motion';
import * as styles from './styles.module.css';

function DisplayLetter({letter}) {
    const randomText = useMemo(() => {
        if(letter === '•') return letter;

        let random = `QWERTYUIOPASDFGHJKLZXCVBNM`.split('');
        let newRandom = '';
        let index;

        for(let i = 0; i < random.length; i++){
            index = Math.floor(Math.random() * random.length);
            newRandom += random[index];
        }
        return `${newRandom}${letter}`

    });
    const index = useMotionValue(-1);
    const [currentLetter, setCurrentLetter] = useState('');

    useMotionValueEvent(index, 'change', (i) => {
        setCurrentLetter(randomText[i])
    })

    useEffect(() => {
        if(letter === '•') {
            index.jump(0);
            return;
        }

        setInterval(() => {
            const currentIndex = index.get();

            if(currentIndex < randomText.length - 1)
                index.jump(currentIndex + 1)
        }, 50)
    }, [letter])

    return(
        <>
            {currentLetter}
        </>
    )
}

export default DisplayLetter;