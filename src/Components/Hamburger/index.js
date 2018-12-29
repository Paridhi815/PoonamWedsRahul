import React, { Component } from 'react';
import './style.css';

export default class Hamburger extends Component {

    render() {
        return (
            <div id="nav-icon4" className={this.props.isNavBar ? '' : 'open'}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        );
    }
}