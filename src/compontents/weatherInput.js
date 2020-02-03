import React, {Component} from 'react';


export default class WeatherInput extends Component {
    render() {
        return (
            <div className='main-input'>
                <label className='main-input__label'> What's the weather today?</label>
                <input className='main-input__label--input'/>


            </div>
        );
    }
}

