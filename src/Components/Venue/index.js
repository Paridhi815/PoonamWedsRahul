import React, { Component } from 'react';
import './style.css';

export default class Venue extends Component {
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
                <hr className='Ceremony-hr' />
                <div class="mapouter">
                    <div class="gmap_canvas">
                        <iframe className="maps-frame" id="gmap_canvas" src={weddingDetails.gmap} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                        <a href="https://www.crocothemes.net">editing sidebar wordpress themes</a>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        const patnaWedding = {
            ceremonyName: "Wedding on:",
            ceremonyDate: "9th Feburary, 2019",
            ceremonyPlace: "7 PM, Sai Vatika, Gola Road,",
            ceremonyCity: "Patna.",
            gmap: "https://maps.google.com/maps?q=Sai%20Vatika%2C%20Gola%20Road&t=&z=13&ie=UTF8&iwloc=&output=embed"
        };
        const jamshedpurReception = {
            ceremonyName: "Reception on:",
            ceremonyDate: "12th Feburary, 2019",
            ceremonyPlace: "7 PM, Tulsi Bhavan, Bistupur,",
            ceremonyCity: "Jamshedpur.",
            gmap: "https://maps.google.com/maps?q=Tulsi%20Bhawan%20bistupur&t=&z=13&ie=UTF8&iwloc=&output=embed"

        };
        return (
            <div ref={this.props.refProp} className='Venue-Container'>
                <div className='Venue-Title'>
                    <div className='Venue-Title-Heading'>Our Big Day</div>
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