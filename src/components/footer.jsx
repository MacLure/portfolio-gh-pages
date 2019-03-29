import React, { Component } from 'react';

import Email from './icons/email'
import LinkedIn from './icons/linkedIn'
import GitHub from './icons/gitHub'
import CodePen from './icons/codePen'

class Footer extends Component {
  state = { 

   }
  render() { 
  const bgColor = this.props.color

    return ( 
      <div style={styles.footer}>
        <div style={{backgroundColor: bgColor}}>
          <div className="footerCopyright">© Malcolm MacLure</div>
          <div className="footerLinks">
            <a href="mailto:malcolm.maclure@gmail.com"><Email /></a>
            <a target="blank" href="https://github.com/MacLure/"><GitHub /></a>
            <a target="blank" href="https://www.linkedin.com/in/malcolmmaclure/"><LinkedIn /></a>
            <a target="blank" href="https://codepen.io/MacLure/"><CodePen /></a>
          </div>
        </div>
      </div> );
  }
}
 
export default Footer;

  const styles={}
  styles.footer={
    margin: 0,
    width: "100vw",
    position: 'fixed',
    bottom: 0,
    zIndex: 10,
}
