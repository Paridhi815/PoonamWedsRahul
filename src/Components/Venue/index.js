import React, { Component } from 'react';
import './style.css';

export default class Venue
    extends Component {
    showVenueDetails = (weddingDetails) => {
        return (
            <div className='Venue-Details'>
                <div className='Ceremony-Name'>
                    {weddingDetails.ceremonyName}
                </div>
                <hr className='Ceremony-hr' />
                <div className='Ceremony-Date'>
                    {weddingDetails.ceremonyDate}
                </div>
                <div className='Ceremony-Place'>
                    {weddingDetails.ceremonyPlace}
                    <div>{weddingDetails.ceremonyCity}</div>
                </div>
            </div>
        );
    }

    render() {
        const patnaWedding = {
            ceremonyName: "Wedding on:",
            ceremonyDate: "9th Feburary, 2019",
            ceremonyPlace: "7 PM, Sai Vatika, Gola Road,",
            ceremonyCity: "Patna."
        };
        const jamshedpurReception = {
            ceremonyName: "Reception on:",
            ceremonyDate: "12th Feburary, 2019",
            ceremonyPlace: "7 PM, Tulsi Bhavan, Bistupur,",
            ceremonyCity: "Jamshedpur."
        };
        return (
            <div className='Venue-Container'>
                <div className='Venue-Title'>
                    <div className='Venue-Title-Heading'>Our Big Day.</div>
                    <div className='Venue-Title-Text'>We invite you to the joyful occasion when Poonam and Rahul become one.</div>
                </div>
                <div className='Venue-Details-Container'>
                    {this.showVenueDetails(patnaWedding)}
                    {this.showVenueDetails(jamshedpurReception)}
                </div>
                <div className="Venue-footer">See you at the Mandap <span role="img" aria-label="emoji">🔥</span></div>
            </div>
        );
    }
}