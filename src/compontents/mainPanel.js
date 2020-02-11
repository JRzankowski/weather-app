import React, {Component} from 'react';
import ToggleBtn from "./toggleBtn";
import WeatherInput from "./weatherInput";
import WeatherPanel from "./weatherPanel";

import {CarouselProvider, Slider, Slide, ButtonBack, ButtonNext} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


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

    clearPlace = () => {
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
                    <CarouselProvider naturalSlideWidth={100}
                                      naturalSlideHeight={150} totalSlides={5}>
                        <Slider>
                            <Slide index={0}>
                                <WeatherPanel place={this.state.place} style={this.state.style} slide={0}/>
                            </Slide>
                            <Slide index={1}>
                                <WeatherPanel place={this.state.place} style={this.state.style} slide={1}/>
                            </Slide>
                            <Slide index={3}>
                                <WeatherPanel place={this.state.place} style={this.state.style} slide={2}/>
                            </Slide>
                            <Slide index={4}>
                                <WeatherPanel place={this.state.place} style={this.state.style} slide={3}/>
                            </Slide>
                            <Slide index={5}>
                                <WeatherPanel place={this.state.place} style={this.state.style} slide={4}/>
                            </Slide>
                        </Slider>
                        <div className="buttons">
                            <ButtonBack className='button buttonBack'><i className="material-icons">
                                keyboard_arrow_left
                            </i></ButtonBack>
                            <ButtonNext className='button buttonNext'><i className="material-icons">
                                keyboard_arrow_right
                            </i></ButtonNext>
                        </div>

                    </CarouselProvider>

                )}


                <footer className='footer'><a className='footer__link' target='_blank'
                                              href='https://github.com/JRzankowski'>Built by Jędrzej Rzankowski</a>
                </footer>
            </div>
        );
    }
}
