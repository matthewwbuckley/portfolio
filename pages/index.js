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
          <Icon {...technologies.react} />
          <Icon {...technologies.express} />
          <Icon {...technologies.mongo} />
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
          My PhD now probably comes under "transferable skills", so let me discuss it briefly. I investigated small molecule desorption from Ionic Liquids to characterise their interactions  while under Ultra-High Vacuum conditions. The work helped develop a deliberate and methodical approach to problems, and working as a team helped develop my communications skills. Towards the end of my PhD I found that I really enjoyed develping tools to analyse my data, and decided to pursue programming.
        </p>
        <p>
          I am quiet, patient, and happily boring. I have an interest in games, science, politics, and technology. Before getting into web development I had a go at game development and developed a game for android. 
        </p>
      </div>
    )
  }
}

export default Home