import React, {Component} from 'react';
import {
    WiDayStormShowers, WiNightAltStormShowers,
    WiDayLightning, WiNightAltLightning,
    WiDayShowers, WiNightAltShowers,
    WiDayRain, WiNightAltRain,
    WiDaySnowWind, WiNightAltSnowWind,
    WiDaySleet, WiNightAltSleet,
    WiDayFog, WiNightFog,
    WiDaySunny, WiNightClear,
    WiDaySunnyOvercast, WiNightAltPartlyCloudy,
    WiNightAltCloudy, WiDayCloudy,
    WiNightAltCloudyHigh, WiDayCloudyHigh, WiAlien


} from 'weather-icons-react'


export default class WeatherIcon extends Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        let iconId = this.props.id;

    }

    render() {
        const {id, style} = this.props;
        let iconId = this.props.id;
        // const {iconId} = this.state.iconId;
        if (typeof iconId === 'number') {
            // thunderstorm
            // -with rain/drizzle
            if ((iconId >= 200 && iconId <= 202) || (iconId >= 230 && iconId <= 232)) {
                if (style === 'light') {
                    return <WiDayStormShowers/>
                }
                if (style === 'dark') {
                    return <WiNightAltStormShowers/>
                }

            }
            //normal
            if (iconId >= 210 && iconId <= 221) {
                if (style === 'light') {
                    return <WiDayLightning/>
                }
                if (style === 'dark') {
                    return <WiNightAltLightning/>
                }

            }
            //----------
            //Drizzle
            if (iconId >= 300 && iconId <= 321) {
                if (style === 'light') {
                    return <WiDayShowers/>
                }
                if (style === 'dark') {
                    return <WiNightAltShowers/>
                }

            }
            //Rain
            if (iconId >= 500 && iconId <= 531) {
                if (style === 'light') {
                    return <WiDayRain/>
                }
                if (style === 'dark') {
                    return <WiNightAltRain/>
                }

            }
//Snow
            if (iconId >= 600 && iconId <= 602) {
                if (style === 'light') {
                    return <WiDaySnowWind/>
                }
                if (style === 'dark') {
                    return <WiNightAltSnowWind/>
                }

            }

//Snow with rain
            if (iconId >= 611 && iconId <= 622) {
                if (style === 'light') {
                    return <WiDaySleet/>
                }
                if (style === 'dark') {
                    return <WiNightAltSleet/>
                }

            }
//Fog
            if (iconId >= 611 && iconId <= 622) {
                if (style === 'light') {
                    return <WiDayFog/>
                }
                if (style === 'dark') {
                    return <WiNightFog/>
                }

            }
//clear sky
            if (iconId === 800) {
                if (style === 'light') {
                    return <WiDaySunny/>
                }
                if (style === 'dark') {
                    return <WiNightClear/>
                }

            }
            //Clouds
            //few clouds
            if (iconId === 801) {
                if (style === 'light') {
                    return <WiDaySunnyOvercast/>
                }
                if (style === 'dark') {
                    return <WiNightAltPartlyCloudy/>
                }
            }
            // cloudy
            if (iconId === 801) {
                if (style === 'light') {
                    return <WiDayCloudy/>
                }
                if (style === 'dark') {
                    return <WiNightAltCloudy/>
                }
            }
            // high cloudy
            if (iconId === 803 || iconId === 804) {
                if (style === 'light') {
                    return <WiDayCloudyHigh/>
                }
                if (style === 'dark') {
                    return <WiNightAltCloudyHigh/>
                }
            }

        } else {
            return <WiAlien/>

        }
    }
}