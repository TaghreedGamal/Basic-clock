import React from 'react'
import Switch from "react-switch";
import Datee from '../Date/date'
import './Clock.css';


class Clock extends React.Component {
    constructor() {
        super();
        this.state = { 
            checked: false,
            time: new Date() 
        };
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange(checked) {
        this.setState({ checked });
    }

    componentDidMount() { // create the interval once component is mounted
        this.update = setInterval(() => {
            this.setState({ time: new Date() });
        }, 1 * 1000); // every 1 seconds
    }

    componentWillUnmount() { // delete the interval just before component is removed
        clearInterval(this.update);
    }

    render() {
        return (
            <div className="clockPanel">
                <label htmlFor="material-switch">
                    <Switch
                    checked={this.state.checked}
                    onChange={this.handleChange}
                    onColor="#61DAFB"
                    onHandleColor="#2693e6"
                    handleDiameter={30}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                    height={30}
                    width={68}
                    className="react-switch"
                    id="material-switch"
                    />
                </label>
                <div className="clock">
                    <h2>
                        {/* print the string prettily */}
                        {this.state.time.toLocaleTimeString()}
                    </h2>
                    <Datee visible={this.state.checked}/>
                </div>
            </div>
        );
    }
}

export default Clock