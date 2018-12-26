import React, { Component } from 'react';
import './style.css';
import Header from '../Header';
import Home from '../Home';
import Gallery from '../Gallery';
import InvitationCard from '../InvitationCard';
import Venue from '../Venue';
import Footer from '../Footer';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
        <Gallery />
        <InvitationCard />
        <Venue />
        <Footer />
      </div>
    );
  }
}

export default App;
