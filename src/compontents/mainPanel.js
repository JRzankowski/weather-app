import React, {Component} from 'react';
import ToggleBtn from "./toggleBtn";
import WeatherInput from "./weatherInput";
import WeatherPanel from "./weatherPanel";


import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css";


export default class MainPanel extends Component {
    state = {
        style: 'light',
        place: '',
        currentIndex: 0,
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
        // const getWeather = ()=>{
        //     for(let i =0;i<=40;i++){
        //
        //     }
        // };

        const {currentIndex} = this.state
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
                        <AliceCarousel
                            responsive={this.responsive}
                            fadeOutAnimation={true}
                            mouseTrackingEnabled={true}
                            dotsDisabled={true}
                            infinite={false}
                            slideToIndex={currentIndex}

                         >
                            {<WeatherPanel place={this.state.place} style={this.state.style} slide={0}/> === null ?
                                null : <WeatherPanel place={this.state.place} style={this.state.style} slide={0}
                                                     onDragStart={this.handleOnDragStart}/>}
                            {<WeatherPanel place={this.state.place} style={this.state.style}
                                           slide={1}/> === null ? null :
                                <WeatherPanel place={this.state.place} style={this.state.style} slide={1}
                                              onDragStart={this.handleOnDragStart}/>}
                            {<WeatherPanel place={this.state.place} style={this.state.style}
                                           slide={2}/> === null ? null :
                                <WeatherPanel place={this.state.place} style={this.state.style} slide={2}
                                              onDragStart={this.handleOnDragStart}/>}
                            {<WeatherPanel place={this.state.place} style={this.state.style}
                                           slide={3}/> === null ? null :
                                <WeatherPanel place={this.state.place} style={this.state.style} slide={3}
                                              onDragStart={this.handleOnDragStart}/>}
                            {<WeatherPanel place={this.state.place} style={this.state.style}
                                           slide={4}/> === null ? null :
                                <WeatherPanel place={this.state.place} style={this.state.style} slide={4}
                                              onDragStart={this.handleOnDragStart}/>}
                            {<WeatherPanel place={this.state.place} style={this.state.style}
                                           slide={5}/> === null ? null :
                                <WeatherPanel place={this.state.place} style={this.state.style} slide={5}
                                              onDragStart={this.handleOnDragStart}/>}
                            {<WeatherPanel place={this.state.place} style={this.state.style}
                                           slide={6}/> === null ? null :
                                <WeatherPanel place={this.state.place} style={this.state.style} slide={6}
                                              onDragStart={this.handleOnDragStart}/>}
                            {<WeatherPanel place={this.state.place} style={this.state.style}
                                           slide={7}/> === null ? null :
                                <WeatherPanel place={this.state.place} style={this.state.style} slide={7}
                                              onDragStart={this.handleOnDragStart}/>}
                            {<WeatherPanel place={this.state.place} style={this.state.style}
                                           slide={8}/> === null ? null :
                                <WeatherPanel place={this.state.place} style={this.state.style} slide={8}
                                              onDragStart={this.handleOnDragStart}/>}
                            {<WeatherPanel place={this.state.place} style={this.state.style}
                                           slide={9}/> === null ? null :
                                <WeatherPanel place={this.state.place} style={this.state.style} slide={9}
                                              onDragStart={this.handleOnDragStart}/>}
                            {<WeatherPanel place={this.state.place} style={this.state.style}
                                           slide={10}/> === null ? null :
                                <WeatherPanel place={this.state.place} style={this.state.style} slide={10}
                                              onDragStart={this.handleOnDragStart}/>}
                        </AliceCarousel>



                    </>
                )}


                <footer className='footer'><a className='footer__link' target='_blank'
                                              href='https://github.com/JRzankowski'>Built by Jędrzej Rzankowski</a>
                </footer>
            </div>
        );
    }
}
