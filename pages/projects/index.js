import React from 'react'

import ProjectLink from '../../components/ProjectLink'

import technologies from '../../data/technologies'

class Projects extends React.Component {
  render() {
    return (
      <div className='container'>
        <ProjectLink 
          link="/projects/icyoa"
          name="iCYOA"
          text="A site for creating interactive stories/games. Click here to find out more."
          technologies={[ technologies.react, technologies.mongo, technologies.express, technologies.node, technologies.strapi ]}
        />
        <ProjectLink 
          link="/projects/short-stories"
          name="Short Story Website"
          text="Click here to read about an unpublished resticted CRUD app for writing short stories which could be rated and commented on."
          technologies={[ technologies.react, technologies.mongo, technologies.express, technologies.node ]}
        />
        <ProjectLink 
          link="/projects/boost-ball"
          name="Boost Ball"
          text="Boost Ball is a psudo pool game for pulished for free on android and developed using the Unreal Engine."
          technologies={[ technologies.unreal ]}
        />
        <ProjectLink 
          link="/projects/misc-projects"
          name="Other Projects"
          text="Other projects, including portfolio's, a Unity project, and early versions of iCYOA."
          technologies={[ technologies.unity,  technologies.react, technologies.mongo, technologies.express, technologies.node, technologies.gatsby, technologies.next, technologies.sass ]}
        />
      </div>
    )
  }
}

export default Projects