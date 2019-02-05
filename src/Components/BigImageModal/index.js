import React, { Component } from 'react';
import './style.css';

export default class BigImageModal extends Component {
    render() {
        return (
            <div className="modal-backdrop">
                <div className="modal-wrapper">
                    <div className="footer" onClick={this.props.onClose}>
                        X
                    </div>
                    <img
                        className="modal-image-holder"
                        src={require(`../../Assets/Images/Large/${this.props.imgSrc}`)}
                        alt="Big Pictures"
                    />
                </div>
            </div>
        );
    }
}