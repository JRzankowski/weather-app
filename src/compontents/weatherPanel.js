import React, {Component} from 'react';
import {WiAlien, WiCloudy, WiDaySunny, WiHumidity, WiStrongWind, WiThermometer} from 'weather-icons-react'
import ReactCountryFlag from "react-country-flag"
import WeatherIcon from "./weatherIcon";

export default class WeatherPanel extends Component {
    state = {
        //slide


        error: null,
        isLoaded: false,
        city: this.props.place,
        //list
        //list-main
        temp: '',
        pressure: '',
        humidity: '',
        //list-weather
        id: '',
        weatherName: '',
        weatherDescription: '',
        weatherIcon: '',
        //list clouds
        clouds: '',
        //list-wind
        wind: '',
        //dt_txt
        date: '',
        //city
        cityFullName: '',
        country: ''
    };

    componentDidMount() {
        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city},&appid=726dd2967dfc533b5e31a92ffb2fe5aa`)
            .then(res => res.json())
            .then(
                (result) => {


                    this.setState(() => ({
                            isLoaded: true,
                            // list-main
                            temp: result.list[this.props.slide].main.temp,
                            pressure: result.list[this.props.slide].main.pressure,
                            humidity: result.list[this.props.slide].main.humidity,
                            //list-weather
                            id: result.list[this.props.slide].weather[0].id,
                            weatherName: result.list[this.props.slide].weather[0].main,
                            weatherDescription: result.list[this.props.slide].weather[0].description,
                            weatherIcon: result.list[this.props.slide].weather[0].icon,
                            //list clouds
                            clouds: result.list[this.props.slide].clouds.all,
                            //list-wind
                            wind: result.list[this.props.slide].wind.speed,
                            //dt_txt
                            date: result.list[this.props.slide].dt_txt,
                            //city
                            cityFullName: result.city.name,
                            country: result.city.country
                        })
                    );
                    console.log(result);

                })

            .catch(e => {
                    this.setState({
                        isLoaded: true,
                        error: e
                    });
                }
            )
    }

    render() {
        const {style} = this.props;

        const {
            error, isLoaded, items,
            city,
            temp,
            pressure,
            humidity,
            //list-weather
            id,
            weatherName,
            weatherDescription,
            weatherIcon,
            //list clouds
            clouds,
            //list-wind
            wind,
            //dt_txt
            date,
            //city
            cityFullName,
            country,
        } = this.state;


        return (
            <div className='weather-panel'>
                {error ? (
                    <p>Something went wrong</p>


                ) : (
                    <>
                        <div className="weather-panel__date">{date}</div>
                        <div className='weather-panel__place'>
                            <p className='weather-panel__place--place-info'>{cityFullName}, {country} </p>
                        </div>
                        <div className='weather-panel__temp'>
                            {Math.round(temp - 273.15)}°C
                        </div>
                        <div className="weather-panel__weather-info">
                            <div className="weather-panel__weather-info--container">
                                <WeatherIcon id={id} style={style}/>
                                <p className='weather-icon__description'>{weatherDescription}</p>
                            </div>
                            <div className="weather-panel__weather-info--container">
                                <div className="weather-info-box weather-info-box__wind">
                                    <WiStrongWind/>
                                    <p className='weather-info-box__value'>{wind} km/h</p>

                                </div>
                                <div className="weather-info-box weather-info-box__pressure">
                                    <WiThermometer/>
                                    <p className='weather-info-box__value'>{pressure} hPa</p>

                                </div>
                                <div className="weather-info-box weather-info-box__humidity">
                                    <WiHumidity/>
                                    <p className='weather-info-box__value'>{humidity} %</p>

                                </div>
                                <div className="weather-info-box weather-info-box__clouds">
                                    <WiCloudy/>
                                    <p className='weather-info-box__value'>{clouds} %</p>

                                </div>

                            </div>
                        </div>


                    </>


                )


                }
            </div>

        );
    }
}