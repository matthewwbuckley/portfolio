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
        <p>
          Please
          <form method="get" action="/static/Matthew-W-Buckley_CV.pdf">
            <button type="submit" className="text-button"> check out my CV</button>
          </form> and <a href='mailto:matthewwbuckley@gmail.com'>email me</a>.
        </p>
        <div className="flex-row">
          <a href="https://github.com/matthewwbuckley" class="icon" style={{color: '#011627'}} target="_blank" rel="noopener noreferrer" >
            <i className="devicon-github-plain"/>
          </a>
          <a href="https://linkedin.com/in/matthew-w-buckley" class="icon" target="_blank" rel="noopener noreferrer" >
            <img src='static/linkedin.svg' alt="linkedin" />
          </a>
        </div>
      </div>
    )
  }
}

export default Info