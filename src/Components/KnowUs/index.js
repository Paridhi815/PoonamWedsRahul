import React, { Component } from 'react';
import './style.css';
import Modal from '../Modal';
import CloseIcon from '../Hamburger';


export default class KnowUs extends Component {
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

    twoPiks = (imageName1, imageName2, imageDescription) => {
        return (
            <div className="memories-image">
                <div>
                    <img className="funny-image-holder" src={require(`../../Assets/Images/Funny/Small/${imageName1}`)}
                        alt="Pre-Wedding Pictures"
                        key={imageName1}
                        onClick={() => this.openModal(imageName1)}
                    ></img>
                </div>
                <div>
                    <span className="image-description">
                        {imageDescription}
                    </span>
                </div>
                <div>
                    <img className="funny-image-holder" src={require(`../../Assets/Images/Funny/Small/${imageName2}`)}
                        alt="Pre-Wedding Pictures"
                        key={imageName2}
                        onClick={() => this.openModal(imageName2)}
                    ></img>
                </div>
            </div>
        )
    }

    onePik = (imageName,imageDescription) => {
        return (<div className="memories-image">
            <div>
                <img className="funny-image-holder" src={require(`../../Assets/Images/Funny/Small/${imageName}`)}
                    alt="Pre-Wedding Pictures"
                    key={imageName}
                    onClick={() => this.openModal(imageName)}
                ></img>
            </div>
            <div>
                <span className="image-description">
                    {imageDescription}
                </span>
            </div>
        </div>);
    }

    render() {
        const imageList = ['21.jpg', '22.jpg', '23.jpg', '24.jpg', '25.jpg', '26.jpg', '27.jpg', '29.jpg', '28.jpg', '32.jpg', '33.jpg', '34.jpg', '35.jpg', '37.jpg', '38.jpg', '41.jpg', '42.jpg'];
        return (
            <div className="Memories-Container">
                <div className="back-button" onClick={() => this.props.history.push('/')}>
                    <i class="fas fa-arrow-left"></i>
                </div>
                {this.state.isOpen && <Modal onClose={this.closeModal}>
                    <img
                        alt="Bigphoto"
                        className="modal-image-holder"
                        src={require(`../../Assets/Images/Funny/Large/${this.state.currentImage}`)}
                    />
                    <div className="modal-close-button" onClick={this.closeModal}><CloseIcon isNavBar={false} /></div>
                </Modal>}
                <div className="memories-image-container">
                    {this.onePik('33.jpg',"Attended marriages together")}
                    {this.onePik('34.jpg',"Attended marriages together")}
                    {this.twoPiks('29.jpg','41.jpg',"ngdfiugik")}
                    {this.onePik('37.jpg',"Attended marriages together")}
                    {this.onePik('38.jpg',"Attended marriages together")}
                    {this.twoPiks('26.jpg','35.jpg',"ngdfiugik")}
                    {this.onePik('32.jpg',"Attended marriages together")}
                    {this.onePik('24.jpg',"Attended marriages together")}
                    {this.twoPiks('25.jpg','27.jpg',"ngdfiugik")}
                    {this.onePik('28.jpg',"Had unforgettable Trips")}
                    {this.onePik('23.jpg',"Attended marriages together")}
                    {this.twoPiks('22.jpg','21.jpg',"Attended marriages together")}
                    {this.onePik('42.jpg',"Now we join our hands, and with our hands our hearts ❤️.")}
                </div>
            </div>
        );
    }
}