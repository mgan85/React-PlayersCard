import React, { Component } from 'react';
import './Player.css';
import CurrentTeam from './CurrentTeam/CurrentTeam'
import NationalTeam from './NationalTeam/NationalTeam'
import Information from './Information/Information'

/*
 * Object create information about player.
 * information - general information about player
 * nationalTeam - information about national team
 * name - player full name
 * age - player age
 * playerID - id
 * currentTeam - information about current team
 */
class Player extends Component {
    constructor(props) {
        super(props);
        this.information = props.information;
        this.nationalTeam = props.nationalTeam;
        this.age = props.age;
        this.name = props.name;
        this.currentTeam = props.currentTeam;
        this.playerID = props.playerID;
    }

    // Function create html element with player fullname
    renderFullName() {
        var fullname = this.name.first + " " + this.name.last;
        return <div className="fullname"> {fullname}</div>
    }

    /*
     * Function convert player age. Player age is given in years and days.
     * Function convert age to year, months and days.
     */
    convertAge() {
        let temp = this.age.split(" ");
        let dateDays = temp[2];
        let dateYears = temp[0] + " " + temp[1];

        // Function convert days to months
        function convertDaysToMonths(dateDays) {
            let currentYear = new Date().getFullYear();
            let sum = 0;
            let result = "";

            for (var i = 1; i <= 12; i++) {
                sum += new Date(currentYear, i, 0).getDate();
                if (sum > dateDays)
                    break;
            }
            let days = sum - dateDays;

            result += i;
            result += i > 1 ? " months " : " month ";
            result += days;
            result += days > 1 ? " days" : " day";

            return result;
        }


        return dateYears + " " + convertDaysToMonths(dateDays);
    }

    // Function create html element with player age
    renderAge() {
        return <div className="Age">{this.convertAge()}</div>
    }

    /*
     * Function create html element with badge team.
     * cssClass - classes css which we want add to element
     */
    renderbadge(cssClass) {
        return <div className={"badge " + cssClass} alt="logo"/>
    }

    /*
     * Function create component with information about current team.
     * teamID - unique id
     * name - team name
     * teamType - type of team
     * shortName - short name for team
     */
    renderCurrentTeam() {
        return <CurrentTeam
            teamID={this.currentTeam.id}
            name={this.currentTeam.name}
            teamType={this.currentTeam.teamType}
            shortName={this.currentTeam.shortName}
        />
    }

    /*
     * Function create component with information about national team.
     * isoCode - iso code for player country
     * country - country name
     * demonym - nationality?
     */
    renderNationalTeam() {
        return <NationalTeam
            isoCode={this.nationalTeam.isoCode}
            country={this.nationalTeam.country}
            demonym={this.nationalTeam.demonym}
        />
    }

    /*
     * Function create component with general information about player.
     * position - symbol of the position on which the player plays
     * shirtNum - shirt number
     * position - information about player position
     */
    renderInformation() {
        return <Information
            position={this.information.position}
            shirtNum={this.information.shirtNum}
            positionInfo={this.information.positionInfo}
        />
    }

    // Function render control Player
    render() {
        return (
            <div className="Player">
                <div className="header">
                    {this.renderFullName()}
                    {this.renderbadge("team" + this.currentTeam.id)}
                </div>
                {this.renderInformation()}
                {this.renderCurrentTeam()}
                {this.renderAge()}
                {this.renderNationalTeam()}
            </div>
        );
    }
}

export default Player;