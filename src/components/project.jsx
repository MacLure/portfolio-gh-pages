import React, { Component } from 'react';
import rails from './../assets/icons/rails.svg';
import { relative } from 'path';

class Project extends Component {
  
  render() { 
    const {number, name, desc, summary, tech, liveURL, gitHubURL, screenCap} = this.props.project

    return ( 
      <div>
        <div className="projectGrid">
          <div className="screenCapCell">
          <div className="projectName1"><a className="projectTitleLink" href={liveURL} target="blank">{name}</a></div>
            <div className="projectDescription1">{desc}</div>
            <a href={liveURL} target="blank"><div className="screencapContainer">
              <div style={styles.vignette}></div>
              <img style={styles.screencap} src={screenCap} alt={name} />
            </div></a>
          </div>
          <div className="descriptionCell">
          <div className="projectName2"><a className="projectTitleLink" href={liveURL} target="blank">{name}</a></div>
              <div className="projectDescription2">{desc}</div>
              <div className="projectSummary">{summary}</div>
              <div>
                {tech.map(tech => 
                  <img key={tech} className={tech !== rails ? "projectTechIcon" : "projectTechIconWide"} src={tech} alt={tech.toString()} />
                )}
              </div>
              <div className="projectLinks">
                <a href={liveURL} target="blank"><div className="projectLink" style={{color: this.props.bgColor}}>Live site</div></a>
                <a href={gitHubURL} target="blank"><div className="projectLink" style={{color: this.props.bgColor}}>Github repo</div></a>
            </div>
          </div>
        </div>
      </div>
     );
  }
}
 
export default Project;

const styles = {}

styles.screencap = {
  position: 'absolute',
  left: 0,
  width: '100%',
  zIndex: 1,
}

styles.vignette = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  zIndex: 2,
  boxShadow: 'inset 0px 0px 85px rgba(0,0,0,1)',
}

styles.divider = {
  width: '100%',
  height: '2px',
  backgroundColor: 'rgba(0,0,0,0.4)',
  marginBottom: '10px',
}
