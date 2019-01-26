import React, { Component } from 'react';
import BigImageModal from '../BigImageModal'
import './style.css';

export default class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            currentImage: ''
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
            currentImage: ''
        });
    }
    render() {
        const imageList = ['3.jpg', '1.jpg', '2.jpg', '4.jpg', '6.jpg', '5.jpg', '7.jpg', '9.jpg', '8.jpg'];
        return (
            <div ref={this.props.refProp} className='Gallery-container'>
                {this.state.isOpen && <BigImageModal onClose={this.closeModal} imgSrc={this.state.currentImage} />}
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