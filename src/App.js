import React, {useEffect} from 'react';
import {useControlScrolling} from '~/Hooks';
import NavigationBar from './Components/NavigationBar';
import DisplayHeadings from './Components/DisplayHeadings';
import AnimateAboutMeText from './Components/AnimateAboutMeText';
import AnimateBackgroundPattern from './Components/AnimateBackgroundPattern';
import AnimateBackgroundClouds from './Components/AnimateBackgroundClouds';
import ProjectSection from './Components/ProjectSection'
import ContactMeSection from './Components/ContactMeSection';
import DisplayScrollDownMessage from './Components/DisplayScrollDownMessage';
import LoadingScreen from './Components/LoadingScreen';
import './styles.css';

/* 
    this is where i left off, i want to add a few more details to the loading component
    i want to change the message from  'Hold on.. let me think..' to 'OK im finished!'

    when the percent state reaches 100


*/


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
            <LoadingScreen/>
            <NavigationBar/>
            <DisplayHeadings/>
            <AnimateAboutMeText/>
            <AnimateBackgroundPattern/>
            <AnimateBackgroundClouds/> 
            <ProjectSection/>
            <ContactMeSection/>
            <DisplayScrollDownMessage/>
        </>
    )
}

export default App;
