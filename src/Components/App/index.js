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
  }
  goToGallery = () => {
    window.scrollTo({
      top: this.galleryRef.current.offsetTop,
      behavior: "smooth"
    });
  }

  render() {
    return (
      <div>
        <Header goToGallery={this.goToGallery} />
        <Home />
        <Gallery refProp={this.galleryRef} />
        <InvitationCard />
        <Venue />
        <Footer />
      </div>
    );
  }
}

export default App;
