import React, {Component} from 'react';

export default class WeatherPanel extends Component{

    state={
      error: null,
      isLoaded: false,
      city: this.props.place,
        country: '',
        weather : '',
        weatherDescription:'',
        temp: '',
        pressure:'',
        humidity:'',
        windSpeed:''
    };
    componentDidMount() {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city},&appid=726dd2967dfc533b5e31a92ffb2fe5aa`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        country: result.sys.country,
                        weatherId : result.weather[0].id,
                        weatherDescription:result.weather[0].description,
                        temp: result.main.temp,
                        pressure:result.main.pressure,
                        humidity:result.main.humidity,

                    });
                    console.log(result);
                },

                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    render() {
        return (
            <div>

            </div>
        );
    }
}