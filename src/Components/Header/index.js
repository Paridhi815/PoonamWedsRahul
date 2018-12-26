import React, { Component } from 'react';
import './style.css';

import logo from '../../Assets/Images/PR.png'

export default class Header extends Component {
    render() {
        return (
            <div className='Header-main-Container'>
                <div className='Header-Container'>
                    <div>
                        <img className='Header-logo' src={logo} alt="wedding-logo"></img>
                    </div>
                    <div className='Header-Tabs'>
                        <div className='Header-Buttons' onClick={() => { }}>Home</div>
                        <div className='Header-Buttons' onClick={() => { }}>Gallery</div>
                        <div className='Header-Buttons' onClick={() => { }}>Invitation Card</div>
                        <div className='Header-Buttons' onClick={() => { }}>Venue</div>
                    </div>
                </div>
            </div>
        );
    }
}