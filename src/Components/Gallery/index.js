import React, { Component } from 'react';
import './style.css';
// import pictures from '../../Assets/Images';

export default class Gallery extends Component {
    render() {
        const imageList = ['3.jpg', '1.jpg', '2.jpg', '4.jpg', '6.jpg', '5.jpg', '7.jpg', '9.jpg', '8.jpg'];
        return (
            <div className='Gallery-container'>
                <div className="image-container">
                    {
                        imageList.map(imageName => <img className="image-holder" src = {require(`../../Assets/Images/${imageName}`)}
                            alt="Pre-Wedding Pictures" ></img>)
                    }
                </div>
            </div>
        );
    }
}