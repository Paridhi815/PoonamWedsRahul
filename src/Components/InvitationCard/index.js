import React, { Component } from 'react';
import './style.css';
import InvitationImage from '../../Assets/Images/invite.jpeg'


export default class InvitationCard extends Component {
    render() {
        return (
            <div ref={this.props.refProp} className="Invitation-Container">
                {/* <div className="InvitationInfo-Container">
                    <div>Our Big Day </div>
                    <div>- Join us at the wedding of </div>
                    <div>Poonam and Rahul</div>
                    <div>We invite you</div>
                    <div>to the jouyful occasion</div>
                    <div>when these two become one.</div>
                    <div>See You at the mandap
                        <span role="img" aria-label="emoji">😊</span>
                    </div>
                </div> */}
                <div className="InvitationCard-Container">
                    <img className='InvitationCard-Image' src={InvitationImage} alt="invitation-card"></img>
                </div>
            </div>
        );
    }
}