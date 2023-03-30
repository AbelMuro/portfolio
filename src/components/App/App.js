import React, {lazy} from 'react';
import NavigationBar from './NavigationBar';
import HomeSection from './HomeSection';
import AboutMeSection from './AboutMeSection';
const ProjectSection = lazy(() => import('./ProjectSection'));
import ContactMeSection from './ContactMeSection';
import './styles.css';


function App() {
    return(
        <>
            <NavigationBar />
            <HomeSection />
            <AboutMeSection/>
            <ProjectSection/>
            <ContactMeSection/>
        </>
    )
}

export default App;
