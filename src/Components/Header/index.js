import React, { Component } from 'react';
import './style.css';
import logo from '../../Assets/Images/PR.png';
import Hamburger from '../Hamburger';

let isComponentMounted = false
export default class Header extends Component {

    constructor() {
        super();
        this.state = {
            isDropDownVisible: false
        }
    }

    //If you click anywhere besides nav icon, the dropdown should disappear
    componentWillMount() {
        isComponentMounted = true;
        document.addEventListener('click', this.handleClick, false)
    }

    handleClick = (e) => {
        if (!this.node.contains(e.target)) {
            this.setState({
                isDropDownVisible: false
            }/*, ()=>{
                console.log('Close called');
                
            }*/)
        }
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClick, false)
    }

    //If you click on the nav icon, the dropdown should toggle    
    toggleDropdownForPhone = () => {
        this.setState({
            isDropDownVisible: !this.state.isDropDownVisible
        }/*, ()=>{
            console.log('Toggle called');
            
        }*/);
    }

    showDropdown = () => {
        if(isComponentMounted === true){
            isComponentMounted = false;
            return null;
        }

        return (
            <div className={this.state.isDropDownVisible ? 'Header-Tabs-phone' : 'Header-Tabs-phone-exit'}>
                <div className='Header-Buttons' onClick={this.props.goToHome}>Home</div>
                <div className='Header-Buttons' onClick={this.props.goToGallery}>Gallery</div>
                <div className='Header-Buttons' onClick={this.props.goToInvitationCard}>Invitation Card</div>
                <div className='Header-Buttons' onClick={this.props.goToVenue}>Venue</div>
            </div>
        )
    }

    render() {
        return (
            <div className='Header-main-Container'>
                <div className='Header-Container'>
                    <div>
                        <img className='Header-logo' src={logo} alt="wedding-logo"></img>
                    </div>
                    <div className='Header-Tabs'>
                        <div className='Header-Buttons' onClick={this.props.goToHome}>Home</div>
                        <div className='Header-Buttons' onClick={this.props.goToGallery}>Gallery</div>
                        <div className='Header-Buttons' onClick={this.props.goToInvitationCard}>Invitation Card</div>
                        <div className='Header-Buttons' onClick={this.props.goToVenue}>Venue</div>
                    </div>
                    <div className='Header-navigation-phone'>
                        <div className='Header-navigation-icon' ref={node => this.node = node} onClick={this.toggleDropdownForPhone}>
                        <Hamburger isNavBar={!this.state.isDropDownVisible} />
                        {/* <i className="fas fa-bars"></i> */}
                        
                        </div>
                        {this.showDropdown()}
                    </div>
                </div>
            </div>
        );
    }
}