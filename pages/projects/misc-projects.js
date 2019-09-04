import React from 'react'
import Link from 'next/link'

import NavigationProjects from '../../components/NavigationProjects'

class Projects extends React.Component {
  render() {
    return (
      <div className='start' className='container'>
        <NavigationProjects index={4} />
        <h4>
          Painter
        </h4>
        <p>
          This is part of a planned narrative puzzle game that was never finished, made using Unity. As part of the project a procedural painting effect was developed based on <a target="_blank" href='https://tylerxhobbs.com/essays/2017/a-generative-approach-to-simulating-watercolor-paints'>the work of Tyler Hobbs</a>.  
        </p>
        <p>
        The technique would take an image and draw splotches of colour. The splotches are created using overlapping semi-transparent 2D polygons, slightly modified and translated by noise functions. These would be repeatedly generated and removed with the aim to create the effect of a painting that was continually being drawn. This prototype is too computationally expensive to be used for anything other than a demonstration, and development stopped before it could be made viable.         
        </p>
        <iframe className='video-main' src="https://www.youtube.com/embed/4jgPFjjSBM0" frameborder="0" allowfullscreen />
        <div className='spacer' />
        <h4>
          Previous Version of iCYOA
        </h4>
        <p>
        The site allowed users to write and play interactive stories, and was built using React. The stories, built using a dynamic form, could be published and played on the site. The site had ~100 sign ups who started ~150 stories, but very few were ever published.  
        </p>
        <p>
        The site would later be rebuilt in an effort to offer a rewarding and intuitive method of story creation.
        </p>
        <div className='spacer' />
        <h4>
          Old and New Portfolio
        </h4>
        <a className='start' target="_blank" href='https://github.com/matthewwbuckley/personal-site'>
          See Old Portfolio on Github
        </a>
        <a className='start' target="_blank" href='https://github.com/matthewwbuckley/portfolio'>
          See New Portfolio on Github
        </a>
        <p>
        This site replaces the old portfolio site, moving from Gatsby to Next while remaining on Netlify. Trying the react-transition-group library was an aim of this site, which can be seen on the fade transitions between pages, and the animation library GSAP, for both the fade transitions and animation of the circle indicators. During development of this site the power of Sass became much more evident, as building the site around declared variables allowed quick iterations between potential styles. 
        </p>
      </div>
    )
  }
}

export default Projects