import React, {lazy} from 'react';
import NavigationBar from './Components/NavigationBar';
import Intro from './Components/Intro';
import TrailingMouseAnimation from './Components/TrailingMouseAnimation';
import './styles.css';


function App() {
    return(
        <>
            <NavigationBar/>
            <Intro/>
        </>
    )
}

export default App;
