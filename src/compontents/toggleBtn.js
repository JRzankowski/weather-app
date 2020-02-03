import React, {Component} from 'react';

export default class ToggleBtn extends Component {
    state = {
        style: 'light'
    };

    handleToggle = () => {

        this.setState((state) =>({
            style: state.style === 'light' ? 'dark' : 'light'
        }),()=>{
            let color  = this.state.style;
            if (typeof this.props.setStyle === 'function') {
                this.props.setStyle(color);
            }
        })

    };

    render() {

        let btnStyle = `toggle-btn ${this.state.style}`;
        let switchStyle = `toggle-btn__switch ${this.state.style}`;

        return (
            <div onClick={this.handleToggle} className={btnStyle}>
                <div className={switchStyle}/>

            </div>

        );
    }
}