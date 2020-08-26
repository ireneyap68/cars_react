import React, { Component } from 'react';
import bmw3series from './bmw3series.jpg';

class BMW extends Component {
    render() {
        return (
            <div>
                <h1>BMW</h1>
                <img src={bmw3series} alt="3 series photo" />
                <p>Model: 3 series</p>
            </div>
        )
    }
}
export default BMW;