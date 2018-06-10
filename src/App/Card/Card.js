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

    /*
     * Function create Player component on card.
     * information - general information about player
     * nationalTeam - information about notional team
     * age - player age
     * name - player name
     * playerID - unique id
     * currentTeam - information about current team
     */
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

    // Function create component with player stats.
    renderStats() {
        return <Stats
            stats={this.stats}
        />
    }

    /*
     * Function get player fullname which is use in alt
     * attribute for img tag.
     */
    getFullName() {
        return this.player.name.first + " " + this.player.name.last;
    }

    // Function render control Card
    render() {
        return (
            <div id={"card_" + this.player.id} className="playerCard">
                <img src={this.photo} alt={this.getFullName()}/>
                <div className="playerInfo">
                    {this.renderPlayer()}
                    {this.renderStats()}
                </div>
            </div>
        );
    }
}

export default Card;