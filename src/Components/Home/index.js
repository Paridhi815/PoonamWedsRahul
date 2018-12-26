import React, { Component } from 'react';
import './style.css';
import HomeImage from '../../Assets/Images/ye.png'
// import { Parallax, Background } from 'react-parallax';

export default class Home extends Component {
    render() {
        return (
            <div className='Home-container'>
                <div className='Home-Image-div'>
                    <img className='Home-Image' src={HomeImage} alt="wedding-logo"></img>
                </div>
            </div>
        );
    }
}