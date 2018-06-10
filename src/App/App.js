import React, { Component } from 'react';
import './App.css';
import Card from './Card/Card'
import Dropdown from './Dropdown/Dropdown'
import data from './../data/player-stats.json'

class App extends Component {
    constructor() {
        super();
        this.photos = [
            "p2064.png",
            "p4148.png",
            "p4246.png",
            "p4916.png",
            "p8983.png"
        ];
        this.data = data;
    }

    // Function get random photo for card
    getPhoto() {
        let photo = require('../img/' + this.photos[0]);
        this.photos.shift();
        return photo;
    }

    /*
     * Function render card for player.
     * key - unique key for render cards
     * player - information about players
     * stats - statistic about player
     * photo - photo of player
     */
    renderCard(props) {
        return <Card
            key={props.player.id}
            player={props.player}
            stats={props.stats}
            photo={this.getPhoto.call(this)}
        />
    }

    // Function render App component
    render() {
        return (
            <div className="App">
                <Dropdown
                    id="player"
                />
                {data.players.map(this.renderCard.bind(this))}
            </div>
        );
    }
}

export default App;
