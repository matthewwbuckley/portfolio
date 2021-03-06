import React from 'react'
import Icon from '../components/Icon'
import technologies from '../data/technologies'

class Home extends React.Component {
  render() {
    return (
      <div className='container'>
        <h3>Hi! Welcome to my site.</h3>
        <p>
          I am a self taught web developer with a PhD in Chemistry. I am comfortable with foundational web based technologies.
        </p>
        <div className='flex-row'>
          <Icon {...technologies.html} />
          <Icon {...technologies.css} />
          <Icon {...technologies.js} />
        </div>
        <p>
          I am growing in confidence with the MERN Stack. I have more experience with front-end development but have developed full stack applications.
        </p>
        <div className='flex-row'>
          <Icon {...technologies.mongo} />
          <Icon {...technologies.express} />
          <Icon {...technologies.react} />
          <Icon {...technologies.node} />
        </div>
        <p>
          I have some experience with the following connected technologies:
        </p>
        <div className='flex-row'>
          <Icon {...technologies.sass} />
          <Icon {...technologies.next} />
          <Icon {...technologies.gatsby} />
          <Icon {...technologies.strapi} />
          <Icon {...technologies.git} />
        </div>
        <p>
          
          During my PhD I investigated small molecule desorption from Ionic Liquids to characterise their interactions while under Ultra-High Vacuum conditions. The work helped develop a deliberate and methodical approach to problems, and working as a team helped develop my communication skills. Towards the end of my PhD I found that I overly enjoyed develping tools to analyse my data, and decided to pursue programming.
        </p>
      </div>
    )
  }
}

export default Home