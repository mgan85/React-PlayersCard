import React, { Component } from 'react';
import './Card.css';
import Player from './Player/Player'
import Stats from './Stats/Stats'

/*
 * Object create card for player.
 * stats - collection stats which must be generate
 * player - information about player
 * photo - photo of player
 */
class Card extends Component {
    constructor(props) {
        super(props);
        this.player = props.player;
        this.stats = props.stats;
        this.photo = props.photo;
    }

    renderPlayer() {
        return <Player
            information={this.player.info}
            nationalTeam={this.player.nationalTeam}
            age={this.player.age}
            name={this.player.name}
            playerID={this.player.id}
            currentTeam={this.player.currentTeam}
        />
    }

    renderStats() {
        return <Stats
            stats={this.stats}
        />
    }

    renderFullName() {
        return  this.player.name.first + " " + this.player.name.last;
    }

    //function render control
    render() {
        return (
            <div className="playerCard">
                <img src={this.photo} alt={this.renderFullName()}/>
                <div className="playerInfo">
                    {this.renderPlayer()}
                    {this.renderStats()}
                </div>
            </div>

        );
    }
}

export default Card;