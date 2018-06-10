import React, { Component } from 'react';
import './CurrentTeam.css';

/*
 * Object create information about current team of player.
 * name - team name
 * teamType - type of team
 * shortName - short name
 * teamID - team id
 */
class CurrentTeam extends Component {
    constructor(props) {
        super(props);
        this.teamID = props.teamID;
        this.name = props.name;
        this.teamType = props.teamType;
        this.shortName = props.shortName;
    }

    // Function render control CurrentTeam
    render() {
        return (
            <div className="CurrentTeam">
                {this.name + " (" + this.shortName + ")"}
            </div>
        );
    }
}

export default CurrentTeam;