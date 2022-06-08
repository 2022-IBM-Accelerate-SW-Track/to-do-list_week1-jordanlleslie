import React, { Component } from 'react';
import "./About.css";
    import <profile_pic> from "../assets/profile_pic.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <p>Design your About me page </p> 
        <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              <profile_pic>
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Jordan Leslie</div>
            <div className="brief_description">
              Hi! My name is Jordan. I'm from Atlanta, GA and I'm a junior at Emory University studying CS and Spanish.
            </div>
          </div>
        </div>
      </div>
      </div>
     
    )
  }
}
