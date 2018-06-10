import React, { Component } from 'react';
import './NationalTeam.css';

/*
 * Object create information about national team of player.
 * isoCode - country iso code
 * country - country name
 * demonym - nationality ???
 */
class NationalTeam extends Component {
    constructor(props) {
        super(props);
        this.isoCode= props.isoCode;
        this.country = props.country;
        this.demonym = props.demonym;
    }

    //function render control
    render() {
        return (
            <div className="NationalTeam">
                {this.demonym}
            </div>
        );
    }
}

export default NationalTeam;