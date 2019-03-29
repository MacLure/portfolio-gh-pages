import React, { Component } from 'react';
import Project from './project'
import Footer from "./footer";
import NavBar from "./navbar";

import html5 from './../assets/icons/html5.svg';
import css3 from './../assets/icons/css3.svg';
import js from './../assets/icons/js.svg';
import sass from './../assets/icons/sass.svg';
import react from './../assets/icons/react.svg';
import redux from './../assets/icons/redux.svg';
import ruby from './../assets/icons/ruby.svg';
import rails from './../assets/icons/rails.svg';
import postgres from './../assets/icons/postgres.svg';

import horizonScreenCap from './../assets/images/horizonScreencap.png';
import reserveItScreenCap from './../assets/images/reserveItScreencap.png';



class Projects extends Component {
  state = { 
    projects: [
      {
        number: 1,
        name: "Horizon",
        desc: "School admin and student portal",
        summary: "Horizon is a management tool for schools and students. It features different dashboards for two user types.",
        tech: [html5, css3, js, react, redux, ruby, rails, postgres],
        screenCap: horizonScreenCap,
        liveURL: 'https://project-horizon-react.herokuapp.com/',
        gitHubURL: 'https://github.com/MacLure/project-horizon-react',
      },
      {
        number: 2,
        name: "Reserve-It",
        desc: "Restaurant booking app",
        summary: "Reserve-It lets users make reservations at restaurants, and restaurant owners to register their restaurants and keep track of their reservations.",
        tech: [html5, css3, js, sass, ruby, rails, postgres],
        screenCap: reserveItScreenCap,
        liveURL: 'https://project-reserve-it.herokuapp.com/',
        gitHubURL: 'https://github.com/BenjaminHoppe/reserveit',

      }
    ]
   }

  render() { 
    return (
      <div style={styles.fill}>
      <NavBar color={bgColor} />
        <div className="projectsContainer">
          {this.state.projects.map((project, index) => 
            <div>
              {index ? <div><div className='projectSeperator' /><div className='projectSeperator' /><div className='projectSeperator' /></div> : null}
              <Project key={project.number}project={project} bgColor = {bgColor}/></div>
          )}
        </div>
        <Footer color={bgColor}/>
      </div>
    );
  }
}
 
export default Projects;

const styles = {}
const bgColor ='rgb(240,200, 180)'

styles.fill={
  position: 'absolute',
  backgroundColor: 'rgb(240,200, 180)',
  width: '100vw',
  minHeight: '100vh',
}
