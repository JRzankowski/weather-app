import React, {Component} from 'react';
import ToggleBtn from "./toggleBtn";
import WeatherInput from "./weatherInput";
import WeatherPanel from "./weatherPanel";


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
    setPlace = (place) => {
        this.setState({
            place: place
        });
    };

    clearPlace = ()=>{
        this.setState({
            place: ''
        });
    };


    render() {

        const isPlace = this.state.place;

        let containerStyle = `container ${this.state.style}`;
        return (
            <div className={containerStyle}>
                <div className='header'>
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
                    {isPlace ? (
                        <i onClick={this.clearPlace} className="material-icons">
                            clear
                        </i>
                    ) : (
                        <i className="material-icons"/>

                    )

                    }
                    <ToggleBtn setStyle={this.setStyle}/>

                </div>
                {!isPlace ? (
                    <WeatherInput style={this.state.style} setPlace={this.setPlace}/>
                ) : (
                    <WeatherPanel place={this.state.place} style={this.state.style}/>
                )}


                <footer className='footer'><a className='footer__link' target='_blank'
                                              href='https://github.com/JRzankowski'>Built by Jędrzej Rzankowski</a>
                </footer>
            </div>
        );
    }
}
