import React from 'react'
import Link from 'next/link'

import NavigationProjects from '../../components/NavigationProjects'

class Projects extends React.Component {
  render() {
    return (
      <div className='container'>
        <NavigationProjects index={2} />
        <a className='end' target="_blank" href='https://github.com/matthewwbuckley/WriterWebsite'>
          See on Github
        </a>
        <p>
          A very simple "restricted" CRUD application which allows users to Create and Read short stories, of 100, 200, or 400 words, and rate and comment with 10, 20, or 40 words depending on the story length. The restriction is that there is no Update or Delete functionality. This was the design intent and was chosen to emulate print media, where once a piece it published it cannot be amended.
        </p>
        <p>
          There were a number of intended design choices that became questionable as the project proceeded. The simplistic, old-print design goal actually looked rather boring. Restricting deletion and editing to elicit a deliberate approach to publishing raised the emotional cost of submission. In an effort to create uninfluenced feedback the rating and comments were hidden until the user had commented, but this made the site look empty.
        </p>
        <p>
        The site was initially larger in scope with audio readings, series, and playlists, but these were cut as confidence in the site decreased. The aim of the project was to get more comfortable in React and write a structured project, and was a great learning exercise. 
        </p>
        <a className='start' target="_blank" href='https://github.com/matthewwbuckley/WriterWebsite'>
        See on Github
        </a>
      </div>
    )
  }
}

export default Projects