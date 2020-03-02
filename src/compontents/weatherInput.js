import React, {Component} from 'react';

export default class WeatherInput extends Component {
    state = {

        place: ''
    };
    handleClick = () => {
        let place = this.state.place;
        if (typeof this.props.setPlace === 'function') {
            this.props.setPlace(place);
        }
        if (this.state.place !== "") {
            document.querySelector('.header').classList.remove('desktop');
        }
    };
    handleInput = (e) => {
        const regex = /[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ_-]/;
        const chars = e.target.value.split('');
        const char = chars.pop();
        if (!regex.test(char)) {
            e.target.value = chars.join('');
        }
        const place = e.target.value;
        this.setState((state) => ({
            place: place
        }))
    };

    render() {
        return (
            <div className='main-input'>
                <label
                    className={this.props.style === 'light' ? `main-input__label light` : "main-input__label dark"}> What's
                    the weather today?</label>
                <input placeholder='Where do you live?'
                       className={this.props.style === 'light' ? `main-input__label--input light` : "main-input__label--input dark"}
                       type='text'
                       onInput={this.handleInput}/>
                <div onClick={this.handleClick} className="check-icon">
                    <i className="material-icons">
                        arrow_forward
                    </i>
                </div>
            </div>
        );
    }
}

