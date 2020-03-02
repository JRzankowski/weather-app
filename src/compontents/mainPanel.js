import React, {Component} from 'react';
import ToggleBtn from "./toggleBtn";
import WeatherInput from "./weatherInput";
import WeatherPanel from "./weatherPanel";

export default class MainPanel extends Component {
    state = {
        style: 'light',
        place: '',
        currentIndex: 0,
        slide: 0,
    };
    setMql = () => {
        if (window.matchMedia('(min-width: 1024px)').matches && this.state.place.length === 0) {
            document.querySelector('.header').classList.add('desktop');
        } else {
            document.querySelector('.header').classList.remove('desktop');
        }
    };

    componentDidMount() {
        this.setMql();
        window.addEventListener("resize", () => {
            this.setMql()
        })
    }

    setSlide = (number) => {
        this.setState({
            slide: number
        })
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
    clearPlace = () => {
        this.setState({
            place: ''
        });
        if (window.matchMedia('(min-width: 1024px)').matches && this.state.place !== "") {
            document.querySelector('.header').classList.add('desktop');
        }
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
                    <>
                        <div className="weather__panel-container">
                            <WeatherPanel place={this.state.place} style={this.state.style} slide={this.state.slide}
                                          setSlide={this.setSlide}/>
                            <WeatherPanel place={this.state.place} style={this.state.style} slide={this.state.slide + 1}
                                          setSlide={this.setSlide}/>
                            <WeatherPanel place={this.state.place} style={this.state.style} slide={this.state.slide + 2}
                                          setSlide={this.setSlide}/>
                            <WeatherPanel place={this.state.place} style={this.state.style} slide={this.state.slide + 3}
                                          setSlide={this.setSlide}/>
                        </div>
                    </>
                )}
                <footer className='footer'><a className='footer__link' rel="noopener noreferrer" target='_blank'
                                              href='https://github.com/JRzankowski'>Built by Jędrzej Rzankowski</a>
                </footer>
            </div>
        );
    }
}
