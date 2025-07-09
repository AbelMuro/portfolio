import React, {useEffect} from 'react';
import {useControlScrolling} from '~/Hooks';
import NavigationBar from './Components/NavigationBar';
import DisplayHeadings from './Components/DisplayHeadings';
import AnimateAboutMeText from './Components/AnimateAboutMeText';
import AnimateBackgroundPattern from './Components/AnimateBackgroundPattern';
import AnimateBackgroundClouds from './Components/AnimateBackgroundClouds';
import TrailingMouseAnimation from './Components/TrailingMouseAnimation';
import DisplayScrollDownMessage from './Components/DisplayScrollDownMessage';
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
            <NavigationBar/>
            <DisplayHeadings/>
            <AnimateAboutMeText/>
            <AnimateBackgroundPattern/>
            <AnimateBackgroundClouds/> 
            <DisplayScrollDownMessage/>
        </>
    )
}

export default App;
