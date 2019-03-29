import React, { Component } from 'react';
import Footer from "./footer";
import NavBar from "./navbar";
import Portrait from './../assets/images/portrait.png'

class About extends Component {
  state = {  }
  render() { 
    return (
      <div style={styles.fill}>
      <NavBar color={bgColor} />

        <div className="aboutGrid">
          <div className="aboutParagraphs">
            I'm a full-stack web developer with a background in international recruitment and project management. I love coding and building things with technology.
            <br /><br />
            I started learning web development in my previous role, where I wore many hats as the <a target="blank" href="http://www.jetprogramme.ca">head of a national cultural/education programme between Canada and Japan.</a>
            <br /><br />
            I began teaching myself to code in my free time before deciding to dive deeper into web development and programming. I am now looking forward to contributing to Toronto's tech industry.
            <br /><br />
            <a href="mailto:malcolm.maclure@gmail.com">Send me a message and let's connect!</a>
          </div>
          <div className="photoContainer">
            <img className="portrait" src={Portrait} alt="portrait of Malcolm"/>
          </div>
        </div>
        <Footer color={bgColor}/>
      </div>
    );
  }
}
 
export default About;

const styles = {}
const bgColor = 'rgb(180,180,230'

styles.fill={
  position: 'absolute',
  backgroundColor: 'rgb(180,180,230',
  width: '100vw',
  minHeight: '100vh',
}