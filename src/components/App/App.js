import React from 'react';
import NavigationBar from './NavigationBar';
import HomeSection from './HomeSection';
import AboutMeSection from './AboutMeSection';
import ProjectSection from './ProjectSection';
import './styles.css';


function App() {
    return(
        <main>
            <NavigationBar />
            <HomeSection />
            <AboutMeSection/>
            <ProjectSection/>
        </main>
    )
}

export default App;
