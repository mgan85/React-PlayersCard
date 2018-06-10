import React, { Component } from 'react';
import './Dropdown.css';
import data from './../../data/player-stats.json'

class Dropdown extends Component {
    constructor(props) {
        super();
        this.id = props.id;
        this.data = data;
    }

    getPlayerList() {
        var playerList =[]
        this.data.players.forEach((elem) => {
            var player = {
                id: elem.player.id,
                name: elem.player.name.first + " " + elem.player.name.last
            }
            playerList.push(player)
        })

        return playerList;
    }

    renderOption (props) {
        return <option key={props.id} value={props.name} />
    }

    //function create all options for combobox
    renderOptions() {
        return this.getPlayerList().map(this.renderOption);
    }

    //function render control
    render() {
        return (
            <div className="Dropdown">
                <input list={this.id} placeholder="Select a player ..."/>
                <datalist id={this.id}>
                    {this.renderOptions()}
                </datalist>
            </div>
        );
    }
}

export default Dropdown;