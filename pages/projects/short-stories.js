import React from 'react'
import Link from 'next/link'

import NavigationProjects from '../../components/NavigationProjects'

class Projects extends React.Component {
  render() {
    return (
      <div className='container'>
        <NavigationProjects index={2} />
        <a className='link-major start' target="_blank" href='https://github.com/matthewwbuckley/WriterWebsite'>
          See on Github
        </a>
        <p>
          A very simple "restricted" CRUD application which allows users to Create and Read short stories, of 100, 200, or 400 words, and rate and comment with 10, 20, or 40 words depending on the story length. The restriction is that there is no Update or Delete functionality. This was the design intent and was chosen to emulate print media, where once a piece it published it cannot be amended.
        </p>
        <p>
          The site was initially larger in scope with audio readings, series, and playlists, but these were cut as I felt less confident in the sites design on both a systemic and aesthetic level. I wanted a simplistic, old-print design but made something that looks rather boring. I wanted a feeling of permanence to elicit a deliberate approach to publishing, but it simply raised the emotional cost of submitting a story. I wanted reviews and comments to be hidden before a user submits one themselves to reduce outside influences, but it made the site look empty.        </p>
        <p>
          I ultimately came away disappointed with this project and contains some programming choices that I will avoid in the future. Context providers could have been used to avoid deep and repetitive reference passing. In addition, using references to directly set state on components should be avoided. 
        </p>
        <p>
          The project was principally to get more comfortable in react and write a structured project. I am disappointed with the overall result, but as a learning exercise it was valuable.         </p>
        <a className='link-major end' target="_blank" href='https://github.com/matthewwbuckley/WriterWebsite'>
        See on Github
        </a>
      </div>
    )
  }
}

export default Projects