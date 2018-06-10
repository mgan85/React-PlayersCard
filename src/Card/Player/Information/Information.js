import React, { Component } from 'react';
import './Information.css';


/*
 * Object create general information about player.
 * position - position symbol
 * shirtNum - shirt number
 * positionInfo - information about position
 */
class Information extends Component {
    constructor(props) {
        super(props);
        this.position = props.position;
        this.shirtNum = props.shirtNum;
        this.positionInfo = props.positionInfo;
    }

    getShortPozitionName() {
        let elem = this.positionInfo.split(" ");
        return  elem[elem.length - 1];
    }
    //function render control
    render() {
        return (
            <div className="Information">
                {this.getShortPozitionName()}
            </div>
        );
    }
}

export default Information;