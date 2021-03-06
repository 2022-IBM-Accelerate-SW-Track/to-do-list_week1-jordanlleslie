import React, { Component } from 'react';
import "./About.css";
import profilePic from "../assets/profile_pic.jpg";

export default class About extends Component {
  render() {
    return (
        <div>
          <div class="split left">
            <div className="centered">
              <img
                className="profile_image"
                src={profilePic}
                alt="Profile Pic"
              ></img>
            </div>
          </div>
          <div className="split right">
            <div className="centered">
              <div className="name_title">Jordan Leslie</div>
              <div className="brief_description">
                Hi! I'm from Atlanta and I'm a junior at Emory studying CS and Spanish. In my free time, I enjoy playing ultimate frisbee and disc golf, listening to classical music, and cooking!
              </div>
            </div>
          </div>
        </div>
    )
  }
}
