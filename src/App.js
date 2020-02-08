import React from 'react';
import MainPanel from './compontents/mainPanel';
import {HashRouter, Route, Switch} from "react-router-dom";
import WeatherPanel from "./compontents/weatherPanel";




function App() {
    return (
        <>
            <HashRouter>
            <Route exact path={'/'} component={MainPanel}/>
            <Route path={'/weather'} component={WeatherPanel}/>
            </HashRouter>
        </>
    )


}

export default App;