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

    twoPiks = (imageName1, imageName2, imageHeading, imageDescription) => {
        return (
            <div className="memories-image-two">
                <div>
                    <img className="funny-image-holder funny-image-holder-1" src={require(`../../Assets/Images/Funny/Small/${imageName1}`)}
                        alt="Pre-Wedding Pictures"
                        key={imageName1}
                        onClick={() => this.openModal(imageName1)}
                    ></img>
                </div>
                <div className="image-description">
                    <span>
                        <div className="image-heading">{imageHeading}</div>
                        <hr className="image-hr"></hr>
                        <div className="image-write">{imageDescription}</div>
                    </span>
                </div>
                <div>
                    <img className="funny-image-holder funny-image-holder-2" src={require(`../../Assets/Images/Funny/Small/${imageName2}`)}
                        alt="Pre-Wedding Pictures"
                        key={imageName2}
                        onClick={() => this.openModal(imageName2)}
                    ></img>
                </div>
            </div>
        )
    }

    onePik = (imageName, imageHeading, imageDescription) => {
        return (<div className="memories-image">
            <div>
                <img className="funny-image-holder" src={require(`../../Assets/Images/Funny/Small/${imageName}`)}
                    alt="Pre-Wedding Pictures"
                    key={imageName}
                    onClick={() => this.openModal(imageName)}
                ></img>
            </div>
            <div className="image-description">
                <span>
                    <div className="image-heading">{imageHeading}</div>
                    <hr className="image-hr"></hr>
                    <div className="image-write">{imageDescription}</div>
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
                    {this.onePik('33.jpg', "The very beginning", "Friends from day 1 of college, discussing our crush with each other and being together in the thick and thin of life, we are best friends for life!")}
                    {this.onePik('34.jpg', "Hell of a ride", "Fights, clashes and arguments made our relationship stronger and ever lasting!")}
                    {this.twoPiks('29.jpg', '41.jpg', "Kids Forever!!", "When we are together, we can bring the kids within us as well show the highest level of maturity too 😁")}
                    {this.onePik('37.jpg', "Foodies", "The visit to mutt, the trecks, the munching in MG Road and the long talks at the back gate will never be forgotten.")}
                    {this.onePik('38.jpg', "Making memories together", "The last photoshoot of SIT where he looked no less than a hero and she looked cute as always 😉")}
                    {this.twoPiks('26.jpg', '35.jpg', "Hum Tum", "When he repeated the kurta year after year 😝 and she toiled hard enough to always have a different look.")}
                    {this.onePik('32.jpg', "Motu Patlu", "Always ready for a pose and hence we have a million pics and a trillion memories together ❤️")}
                    {this.onePik('24.jpg', "Our Big Day", "Our 1st placement and the excitement, the wish for each other's selection and the rush of emotions during the final announcement.....We have lived it all together 😊")}
                    {this.twoPiks('25.jpg', '27.jpg', "Birthday Bash 🎂", "The birthday celebrations and the handmade gifts, the cakes and the pani puri treats..Hope we celebrate many more birthdays together 🎁..")}
                    {this.onePik('28.jpg', "Down The Memory Lane", "Our most memorable trip to Nandi Hills and the perfect weather to complement our spirits and aid to add more and more pics to our collection.")}
                    {this.onePik('23.jpg', "Travelling together in the journey called LIFE", "When he visited Mahabalipuram and surprised me with one of my favorite gifts from Switzerland. My constant support in all my endeavours.")}
                    {this.twoPiks('22.jpg', '21.jpg', "Love Aaj Kal", "When d world thought we are no more together, we proved that everlasting  love still exists in the world.")}
                    {this.onePik('42.jpg', "Lifelines", "Don't know when we became each other's lifelines and soon to be booked for the next 7 janams..Now we join our hands, and with our hands our hearts ❤️.")}
                </div>
            </div>
        );
    }
}