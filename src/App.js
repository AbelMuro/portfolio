import React, {lazy} from 'react';
import Intro from './Components/Intro';
import TrailingMouseAnimation from './Components/TrailingMouseAnimation';
import './styles.css';


function App() {
    return(
        <>
            <Intro/>
            <TrailingMouseAnimation/>
        </>
    )
}

export default App;
