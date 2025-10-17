import React, {useEffect} from 'react';
import {useControlScrolling, useMediaQuery} from '~/Hooks';

import {Provider} from 'react-redux';
import Store from '~/Store';

import NavigationBar from './Components/NavigationBar';
import DisplayHeadings from './Components/DisplayHeadings';
import AnimateAboutMeText from './Components/AnimateAboutMeText';
import AnimateBackgroundPattern from './Components/AnimateBackgroundPattern';

import AnimateBackgroundClouds from './Components/AnimateBackgroundClouds';
import ProjectSection from './Components/ProjectSection'
import ContactMeSection from './Components/ContactMeSection';
import DisplayScrollDownMessage from './Components/DisplayScrollDownMessage';

import MobileBackgroundPattern from './Components/Mobile/MobileBackgroundPattern';
import DisplayMobileHeadings from './Components/Mobile/DisplayMobileHeadings';
import MobileProjectSection from './Components/Mobile/MobileProjectSection';
import MobileBackgroundClouds from './Components/Mobile/MobileBackgroundClouds';

import LoadingScreen from './Components/LoadingScreen';
import './styles.css';

function App() {
    const [mobile] = useMediaQuery('(max-width: 600px)');

    useControlScrolling();

    useEffect(() => {
        window.addEventListener('beforeunload', () => {
            if ('scrollRestoration' in history) 
                history.scrollRestoration = 'manual';
            
            window.scrollTo(0, 0);
        });
    }, [])


    return(
        <Provider store={Store}>
            <LoadingScreen/>
            <NavigationBar/>
            {
                mobile ? 
                <>
                    <MobileBackgroundClouds/>
                    <DisplayMobileHeadings/> 
                    <MobileBackgroundPattern/> 
                    <MobileProjectSection/>
                </> : 
                <> 
                    <AnimateBackgroundClouds/> 
                    <DisplayHeadings/>
                    <AnimateAboutMeText/>
                    <AnimateBackgroundPattern/>
                    <ProjectSection/>
                </>
            }
            <ContactMeSection/>
            <DisplayScrollDownMessage/>
        </Provider>
    )
}

export default App;
