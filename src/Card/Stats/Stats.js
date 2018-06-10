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

    getName(short) {
        function UpperFirstLetter(name) {
            return name.charAt(0).toUpperCase() + name.slice(1);
        }

        var name = "";
        switch (short) {
            case "fwd_pass":
               name = "Forward Pass";
               break;
            case "goal_assist":
                name = "Assist";
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

    convertValue(obj) {
        if(obj.name === "mins_played") {
            var hours = Math.floor(obj.value / 60);
            var minutes = obj.value % 60;

            return hours +" h " + minutes + " min"
        }

        return obj.value;
    }

    //function create one stat
    renderStat(props) {
        return <span key={props.name}><p className="name">{this.getName(props.name)}: </p><p className="value">{this.convertValue(props)}</p></span>
    }

    //function render all stats
    renderStats() {
        return this.stats.map(this.renderStat.bind(this));
    }

    //function render control
    render() {
        return (
            <div className="Stats">
                {this.renderStats()}
            </div>
        );
    }
}

export default Stats;