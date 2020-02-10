import React, {Component} from 'react';
import {WiDaySunny} from 'weather-icons-react'
import ReactCountryFlag from "react-country-flag"

export default class WeatherPanel extends Component {
    state = {
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
                    let i = 0;
                    this.setState({
                        isLoaded: true,
                        // list-main
                        temp: result.list[i].main.temp,
                        pressure: result.list[i].main.pressure,
                        humidity: result.list[i].main.humidity,
                        //list-weather
                        id: result.list[i].weather[0].id,
                        weatherName: result.list[i].weather[0].main,
                        weatherDescription: result.list[i].weather[0].description,
                        weatherIcon: result.list[i].weather[0].icon,
                        //list clouds
                        clouds: result.list[i].clouds.all,
                        //list-wind
                        wind: result.list[i].wind.speed,
                        //dt_txt
                        date: result.list[i].dt_txt,
                        //city
                        cityFullName: result.city.name,
                        country: result.city.country

                    });
                    console.log(result.status);

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
                        <div className='weather-panel__place'>
                            <p className='weather-panel__place--place-info'>{cityFullName}, {country} </p>
                        </div>
                        <div className="weather-panel__date">{date.replace(/-/g,'/').slice(0,10)}</div>
                        <div className='weather-panel__temp'>
                            {Math.round(temp - 273.15)}°C
                        </div>
                    </>


                )


                }
            </div>

        );
    }
}