import React, { Component } from 'react';
import audiTT from './auditt.jpg';

class Audi extends Component {
    render() {
        return (
            <div>
                <h1>Audi</h1>
                <img src={audiTT} alt="Audi TT photo" />
                <p>Model: TT</p>
            </div>
        )
    }
}
export default Audi;