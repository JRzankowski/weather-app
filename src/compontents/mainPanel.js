import React, {Component} from 'react';
import ToggleBtn from "./toggleBtn";
import WeatherInput from "./weatherInput";

export default class MainPanel extends Component {
    state = {

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
                <ToggleBtn setStyle={this.setStyle}/>
                <WeatherInput/>
            </div>
        );
    }
}
