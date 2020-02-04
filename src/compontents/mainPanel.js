import React, {Component} from 'react';
import ToggleBtn from "./toggleBtn";
import WeatherInput from "./weatherInput";


export default class MainPanel extends Component {
    state = {
        style: 'light',
        place: ''
    };

    setStyle = (style) => {
        this.setState({
            style: style

        });
    };

    render() {

        let containerStyle = `container ${this.state.style}`;
        return (
            <div className={containerStyle}>
                <header className='header'>
                    <div className={this.state.style === 'light' ? `header__logo light` : "header__logo dark"}>
                        <div
                            className={this.state.style === 'light' ? `header__logo--water light` : "header__logo--water dark"}/>
                        <div
                            className={this.state.style === 'light' ? `header__logo--island light` : "header__logo--island dark"}/>
                        <div
                            className={this.state.style === 'light' ? `header__logo--sun light` : "header__logo--sun dark"}/>
                        <div
                            className={this.state.style === 'light' ? `header__logo--cloud light` : "header__logo--cloud dark"}/>
                        <div
                            className={this.state.style === 'light' ? `header__logo--cloud light` : "header__logo--cloud dark"}/>
                    </div>
                    <ToggleBtn setStyle={this.setStyle}/>
                </header>
                <WeatherInput style={this.state.style}/>
                <footer className='footer'><a className='footer__link' target='_blank' href='https://github.com/JRzankowski'>Built by Jędrzej Rzankowski</a></footer>
            </div>
        );
    }
}
