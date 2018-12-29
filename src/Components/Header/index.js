import React, { Component } from 'react';
import './style.css';
import logo from '../../Assets/Images/PR.png'

export default class Header extends Component {

    constructor() {
        super();
        this.state = {
            isDropDownVisible: false
        }
    }

    //If you click anywhere besides nav icon, the dropdown should disappear
    componentWillMount() {
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

    render() {
        return (
            <div className='Header-main-Container'>
                <div className='Header-Container'>
                    <div>
                        <img className='Header-logo' src={logo} alt="wedding-logo"></img>
                    </div>
                    <div className='Header-Tabs'>
                        <div className='Header-Buttons' onClick={() => { }}>Home</div>
                        <div className='Header-Buttons' onClick={this.props.goToGallery}>Gallery</div>
                        <div className='Header-Buttons' onClick={this.props.goToInvitationCard}>Invitation Card</div>
                        <div className='Header-Buttons' onClick={() => { }}>Venue</div>
                    </div>
                    <div className='Header-navigation-phone'>
                        <span className='Header-navigation-icon'  ref={node => this.node = node}onClick={this.toggleDropdownForPhone}><i class="fas fa-bars"></i></span>
                        <div className={this.state.isDropDownVisible ? 'Header-Tabs-phone' : 'Header-Tabs-phone-disappear'}>
                            <div className='Header-Buttons' onClick={() => { }}>Home</div>
                            <div className='Header-Buttons' onClick={this.props.goToGallery}>Gallery</div>
                            <div className='Header-Buttons' onClick={this.props.goToInvitationCard}>Invitation Card</div>
                            <div className='Header-Buttons' onClick={() => { }}>Venue</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}