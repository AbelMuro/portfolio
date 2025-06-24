import React, {useEffect} from 'react';
import {useControlScrolling} from '~/Hooks';
import NavigationBar from './Components/NavigationBar';
import Intro from './Components/Intro';
import AnimateBackground from './Components/AnimateBackground';
import TrailingMouseAnimation from './Components/TrailingMouseAnimation';
import './styles.css';


function App() {

    useControlScrolling();

    useEffect(() => {
        window.addEventListener('beforeunload', () => {
            if ('scrollRestoration' in history) 
                history.scrollRestoration = 'manual';
            
            window.scrollTo(0, 0);
        });
    }, [])

    return(
        <>
            <AnimateBackground/>
            <NavigationBar/>
            <Intro/>
        </>
    )
}

export default App;
