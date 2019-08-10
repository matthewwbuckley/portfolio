import React from 'react'
import Icon from '../components/Icon'

class Home extends React.Component {
  render() {
    return (
      <div className='container'>
        <h3>Hi! Welcome to my site.</h3>
        <p>
          I am a self taught web developer with a PhD in Chemistry. I am comfortable with foundational web based technologies.
        </p>
        <div className='flex-row'>
          <Icon icon={<i class="devicon-html5-plain" />} text={'html5'} />
          <Icon icon={<i class="devicon-css3-plain" />} text={'CSS3'} />
          <Icon icon={<i class="devicon-javascript-plain" />} text={'JS/ES6'} />
        </div>

          
          
          
        <p>
          I am growing in confidence with the MERN Stack. I have more experience with front-end development but have developed full stack applications.
        </p>
        <div className='flex-row'>
          <Icon icon={<i class="devicon-react-original"/>} text={'react'} />
          <Icon icon={<i class="devicon-express-original" />} text={'express'} />
          <Icon icon={<i class="devicon-mongodb-plain" />} text={'mongodb'} />
          <Icon icon={<i class="devicon-nodejs-plain" />} text={'nodejs'} />
        </div>
        <p>
          I have some experience with the following connected technologies:
        </p>
        <div className='flex-row'>
          <Icon icon={<i class="devicon-sass-original" />} text={'sass'} />
          <Icon icon={<img src='static/next-js.svg' alt='next' />} text={'next'} />
          <Icon icon={<img src='static/gatsby.svg' alt='next' />} text={'gatsby'} />
          <Icon icon={<img src='static/strapi.svg' alt='next' />} text={'strapi'} />
          <Icon icon={<i class="devicon-git-plain" />} text={'git'} />
        </div>
        <p>
          My PhD now comes under "transferable skills", so let me discuss it briefly. I investigated small molecule desorption from Ionic Liquids to characterise their interactions  while under Ultra-High Vacuum conditions. The work helped develop a deliberate and methodical approach to problems, and working as a team helped develop my communications skills. Towards the end of my PhD I found that I really enjoyed develping tools to analyse my data, and decided to pursue programming.
        </p>
        <p>
          I am quiet, patient, and happily boring. I have an interest in games, science, politics, and technology. Before getting into web development I had a go at game development and developed a game for android, a discussion of which can be seen in my projects. 
        </p>
      </div>
    )
  }
}

export default Home