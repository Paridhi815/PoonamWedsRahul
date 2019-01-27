import React, { Component } from 'react';
import './style.css';
import HomeImage from '../../Assets/Images/ye.png'
import knowUsButton from '../../Assets/Images/knowus.png'

export default class Home extends Component {
    render() {
        return (
            <div ref={this.props.refProp} className='Home-container'>
                <div className='Home-Image-div'>
                    <img className='Home-Image' src={HomeImage} alt="wedding-logo"></img>
                </div>
                <div onClick={()=>{this.props.history.push('/know-us')}} className="know-us-button">
                    <img className="heart-button" alt="Know-us" src={knowUsButton}/>
                </div>
            </div>
        );
    }
}