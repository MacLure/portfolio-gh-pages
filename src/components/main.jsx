import React, { Component } from 'react';
import Footer from "./footer";
import gramophoneCutout from './../assets/images/gramophoneCutout.png';
import NavBar from "./navbar";

class Main extends Component {
  state = { 
   }

  render() { 
    return (
      <div style={styles.fill}>
      <NavBar color={bgColor} />
      <div className="mainHeader">
      <div className="mainName" >Malcolm MacLure</div>
      <div className="mainTitle" >Full-Stack Web Developer</div>
    </div>
    <img className="gramophone" src={gramophoneCutout} alt="gramophone"/>
    <Footer color={bgColor}/>
      </div> );
  }
}
 
export default Main;

const styles = {}
const bgColor = 'rgb(180,250,180'

styles.fill={
  position: 'absolute',
  backgroundColor: bgColor,
  width: '100vw',
  minHeight: '100vh',
}

styles.name = {
  fontSize: '3em',
  }

styles.title = {
  fontSize: '2.05em',
  color: 'rgba(0, 0, 0, 0.4)'
}

styles.mainHeader = {
  position: 'absolute',
  top: '25vh',
  left: '15vw',}

styles.gramophone = {
  position: 'absolute',
  top: '15vh',
  right: '15vw',
  width: '500px',
  filter: 'grayscale(100%)'
}
        
