import React, { Component } from 'react';
import modelY from './Model Y.jpg';

class Tesla extends Component {
    render() {
        return (
            <div>
                <h1>Tesla</h1>
                <img src={modelY} alt="Model Y photo" />
                <p>Model: Model Y</p>
            </div>
        )
    }
}
export default Tesla;