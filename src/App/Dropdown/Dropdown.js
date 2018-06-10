import React, { Component } from 'react';
import './Dropdown.css';
import data from './../../data/player-stats.json'

/*
 * Object create control dropdown which allows choose player.
 * id - control id
 * data - data with information about players
 * playerList - list of player which will be available form dropdown
 */
class Dropdown extends Component {
    constructor(props) {
        super();
        this.id = props.id;
        this.data = data;
        this.playerList = this.getPlayerList();
    }

    // Function get list of all players.
    getPlayerList() {
        let playerList = [];
        playerList.push({id: "selectInfo", name: "Select a palyer ..."});
        this.data.players.forEach((elem) => {
            var player = {
                id: elem.player.id,
                name: elem.player.name.first + " " + elem.player.name.last
            }
            playerList.push(player)
        })

        return playerList;
    }

    // Function hide all cards component in app.
    hideAllCards() {
        Array.from(document.getElementsByClassName("playerCard")).map((card) => {
            card.style.display = "none";
            return card;
        })
    }

    /*
     * Function show card component for selected value n dropdown control.
     * val - value for which we show card
     */
    showCard(val) {
        var option = document.querySelector("option[value='" + val + "']");
        if (option != null) {
            var id = option.id;
            var card = document.getElementById("card_" + id);
            if (card != null) {
                card.style.display = "block";
            }
        }
    }

    // Function show selected card in dropdown.
    onChange(e) {
        this.hideAllCards();
        this.showCard(e.target.value);
    }


    // Function create one options for dropdown.
    renderOption(props) {
        return <option key={props.id} id={props.id} value={props.name}>{props.name}</option>
    }

    // Function create all options for combobox.
    renderOptions() {
        return this.playerList.map(this.renderOption);
    }

    // Function render control dropdown.
    render() {
        return (
            <div className="Dropdown">
                <select onChange={this.onChange.bind(this)}>
                    {this.renderOptions()}
                </select>
            </div>
        );
    }
}

export default Dropdown;