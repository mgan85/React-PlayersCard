import React, { Component } from 'react';
import './Stats.css';

/*
 * Object create stats for player. Each stat consist name
 * and value.
 * stats - collection stats which must be generate
 */
class Stats extends Component {
    constructor(props) {
        super(props);
        this.stats = props.stats;
    }

    /*
     * Function convert short into normal stats name. Also
     * make upper first letter of name.
     * short - shortcut for stat name
     */
    getName(short) {
        // Function make upper on first letter of name.
        function UpperFirstLetter(name) {
            return name.charAt(0).toUpperCase() + name.slice(1);
        }

        var name = "";
        switch (short) {
            case "fwd_pass":
                name = "Forward Pass";
                break;
            case "goal_assist":
                name = "Goal Assist";
                break;
            case "mins_played":
                name = "Played time";
                break;
            case "backward_pass":
                name = "Backward pass";
                break;
            default:
                name = UpperFirstLetter(short);
        }

        return name;
    }

    /*
     * Function convert stats value. Right now function only
     * convert played minutes in hours and minutes.
     * obj - object which represent stat
     */
    convertValue(obj) {
        if (obj.name === "mins_played") {
            var hours = Math.floor(obj.value / 60);
            var minutes = obj.value % 60;

            return hours + " h " + minutes + " min"
        }

        return obj.value;
    }

    // Function create one stat.
    renderStat(props) {
        return <span key={props.name}><p className="name">{this.getName(props.name)}: </p><p
            className="value">{this.convertValue(props)}</p></span>
    }

    // Function create all stats.
    renderStats() {
        return this.stats.map(this.renderStat.bind(this));
    }

    // Function render control Stats
    render() {
        return (
            <div className="Stats">
                {this.renderStats()}
            </div>
        );
    }
}

export default Stats;