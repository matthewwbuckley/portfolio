import React from 'react'
import Contact from './Contact'

class Info extends React.Component {
  render(){
    return(
      <div className='info'>
        <h2><span className='no-display-breakpoint-first'>Matthew W Buckley</span></h2>
        <h3>Self Taught Full Stack Web Developer with a Scientific Background</h3>
        <p>
          Learning web development with a focus on the MERN stack; Mongo, Express, React and Node, along with associated technologies.
        </p>
        <p>
          I am looking for opportunities to learn and solve problems.
        </p>
      </div>
    )
  }
}

export default Info