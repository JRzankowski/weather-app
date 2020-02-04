import React, {Component} from 'react';


export default class WeatherInput extends Component {
    render() {
        return (
            <div className='main-input'>
                <label
                    className={this.props.style === 'light' ? `main-input__label light` : "main-input__label dark"}> What's
                    the weather today?</label>
                <input placeholder='Where do you live?'
                       className={this.props.style === 'light' ? `main-input__label--input light` : "main-input__label--input dark"}/>
                <div className="check-icon">
                    <i className="material-icons">
                        arrow_forward
                    </i>
                </div>
            </div>
        );
    }
}

