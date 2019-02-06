import React, { Component } from 'react';
import Modal from '../Modal';
import CloseIcon from '../Hamburger';
import './style.css';

export default class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            currentImage: null
        };
    }
    openModal = (imageName) => {
        this.setState({
            isOpen: true,
            currentImage: imageName
        });
    }
    closeModal = () => {
        this.setState({
            isOpen: false,
            currentImage: null
        });
    }
    render() {
        const imageList = ['3.jpg', '1.jpg', '2.jpg', '4.jpg', '6.jpg', '5.jpg', '7.jpg', '9.jpg', '8.jpg'];
        return (
            <div ref={this.props.refProp}>
                {this.state.isOpen && <Modal onClose={this.closeModal}>
                    <img
                        alt="Bigphoto"
                        className="modal-image-holder"
                        src={require(`../../Assets/Images/Large/${this.state.currentImage}`)}
                    />
                    <div className="modal-close-button" onClick={this.closeModal}><CloseIcon isNavBar={false}/></div>
                </Modal>}
                <div className="image-container">
                    {
                        imageList.map(imageName => <img className="image-holder" src={require(`../../Assets/Images/Small/${imageName}`)}
                            alt="Pre-Wedding Pictures"
                            key={imageName}
                            onClick={() => this.openModal(imageName)}
                        ></img>)
                    }
                </div>
            </div>
        );
    }
}