import React, { Component } from 'react';
import './style.css';

export default class Modal extends Component {
    componentWillMount() {
        document.addEventListener('click', this.handleClick, false)
    }
    handleClick = (e) => {
        if (!this.node.contains(e.target)) {
            this.props.onClose();
        }
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClick, false)
    }


    render() {
        return (
            <div className="modal-backdrop">
                <div className="modal-wrapper">
                    <span ref={node => this.node = node}>
                        {this.props.children}
                    </span>
                </div>
            </div>
        );
    }
}