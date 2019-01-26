import React, { Component } from 'react';
import './style.css';
import Header from '../Header';
import Home from '../Home';
import Gallery from '../Gallery';
import InvitationCard from '../InvitationCard';
import Venue from '../Venue';
import Footer from '../Footer';


class App extends Component {
  constructor() {
    super();
    this.homeRef = React.createRef();
    this.galleryRef = React.createRef();
    this.invitationCardRef = React.createRef();
    this.venueRef = React.createRef();
  }

  goToSection = (ref) => () => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth"
    });
  }

  render() {
    return (
      <div>
        <Header goToHome={this.goToSection(this.homeRef)} goToGallery={this.goToSection(this.galleryRef)} goToInvitationCard={this.goToSection(this.invitationCardRef)} goToVenue={this.goToSection(this.venueRef)} />
        <Home refProp={this.homeRef} />
        <Gallery refProp={this.galleryRef} />
        <InvitationCard refProp={this.invitationCardRef} />
        <Venue refProp={this.venueRef} />
        <Footer />
      </div>
    );
  }
}

export default App;
