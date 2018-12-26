import React, { Component } from 'react';
import styles from './style.css';

export default class Header extends Component {
    render() {
        return (
            <div className = 'Header-Container'>
                <div>
                    Home
              </div>
                <div>
                    Gallery
              </div>
                <div>
                    Invitation Card
              </div>
                <div>
                    Venue
              </div>
            </div>
        );
    }
}