import React from 'react';
import MainPanel from './compontents/mainPanel';
import {HashRouter, Route} from "react-router-dom";


function App() {
    return (
        <>
            <HashRouter>
                <Route exact path={'/'} component={MainPanel}/>
            </HashRouter>
        </>
    )
}

export default App;