import React, { Component } from 'react';
import './style.css';

export default class Modal extends Component {
    render() {
        return (
            <div className="modal-backdrop">
                <div className="modal-wrapper">
                    {this.props.children}
                </div>
            </div>
        );
    }
}