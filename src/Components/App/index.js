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
    this.galleryRef = React.createRef();
    this.invitationCardRef = React.createRef();
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
        <Header goToGallery={this.goToSection(this.galleryRef)} goToInvitationCard={this.goToSection(this.invitationCardRef)} />
        <Home />
        <Gallery refProp={this.galleryRef} />
        <InvitationCard refProp={this.invitationCardRef}/>
        <Venue />
        <Footer />
      </div>
    );
  }
}

export default App;
