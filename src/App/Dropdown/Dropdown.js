import React, { Component } from 'react';
import './Dropdown.css';
import data from './../../data/player-stats.json'

class Dropdown extends Component {
    constructor(props) {
        super();
        this.id = props.id;
        this.data = data;
        this.playerList = this.getPlayerList();
    }

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

    hideAllCards() {
        Array.from(document.getElementsByClassName("playerCard")).map((card) => {
            card.style.display="none";
            return card;
        })
    }

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

    onChange(e) {
        console.log("you selected: " + e.target.value);
        this.hideAllCards();
        this.showCard(e.target.value);
    }


    renderOption (props) {
        return <option key={props.id} id={props.id} value={props.name}>{props.name}</option>
    }

    //function create all options for combobox
    renderOptions() {
        //this.getPlayerList();
        return this.playerList.map(this.renderOption);
    }

    //function render control
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