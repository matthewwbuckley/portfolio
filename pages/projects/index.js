import React from 'react'

import ProjectLink from '../../components/ProjectLink'

import technologies from '../../data/technologies'

class Projects extends React.Component {
  render() {
    return (
      <div className='container'>
        <ProjectLink 
          link="/projects/boost-ball"
          name="Boost Ball"
          text="Boost Ball is a psudo pool game for android developed using the Unreal Engine. It was a realy fun project to work on but the game saw little success. This link will take you to an article about its development and a link to the game."
          technologies={[ technologies.unreal ]}
        />
        <ProjectLink 
          link="/projects"
          name="interactive Short Story Site"
          text="My largest project to date is a site for creating short interactive stories and has ~300 sign-ups. This will take you to an article discussing the challenges and lessons of the project, a more in depth look at the technologies used, and comments on why I think the site will ultimately fail."
          technologies={[ technologies.react, technologies.mongo, technologies.express, technologies.node, technologies.strapi ]}
        />
        <ProjectLink 
          link="/projects/short-stories"
          name="Short Story Website"
          text="I built a small resticted CRUD app for writing short stories which could be rated and commented on. This short article will talk about why I reduced initial scope and left dissapointed in the project."
          technologies={[ technologies.react, technologies.mongo, technologies.express, technologies.node ]}
        />
        <ProjectLink 
          link="/projects"
          name="This Portfolio"
          text="The site was used to explore a number of fun libraries. This short article will give a brief rundown of the site."
          technologies={[ technologies.react, technologies.node, technologies.next, technologies.sass ]}
        />
        <ProjectLink 
          link="/projects/misc-projects"
          name="Other Misc Projects"
          text="This is mainly discussions on early versions of sites mentioned here, including my old portfolio built in gatsby. There is one new project, which is a procedurally animated watercolor painting effect built in Unity."
          technologies={[ technologies.unity,  technologies.react, technologies.mongo, technologies.express, technologies.node, technologies.gatsby, technologies.sass ]}
        />
      </div>
    )
  }
}

export default Projects