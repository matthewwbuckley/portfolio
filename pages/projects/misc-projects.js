import React from 'react'
import Link from 'next/link'

import NavigationProjects from '../../components/NavigationProjects'

class Projects extends React.Component {
  render() {
    return (
      <div className='container'>
        <NavigationProjects index={4} />
        <h4>
          Painter
        </h4>
        <p>
          After Boost Ball I wanted to create a narrative puzzle game based around playing out the same day. I switched to Unity for its C# over the modified C++ in Unreal. As part of the project I created a procedural paint effect based around <a target="_blank" href='https://tylerxhobbs.com/essays/2017/a-generative-approach-to-simulating-watercolor-paints'>an article of Tyler Hobbs</a>.  
        </p>
        <p>
          The technique would take an image and draw splotches of colour based on transparency. The splotches where overlapping semi-transparent 2D polygons, modified by a noise function, and slightly moved with translational noise. These would continually be generated and removed, hoping to make a living painting effect. I didn't progress too far before shifting my focus to web development, and left it as a pure implementation of the technique, meaning it is very computationally expensive and not useful beyond the demonstration.         
        </p>
        <iframe className='video-main' src="https://www.youtube.com/embed/4jgPFjjSBM0" frameborder="0" allowfullscreen />
        <div className='spacer' />
        <h4>
          Outdated Versions of Interactive Story Site
        </h4>
        <p>
          The idea is a site where users can write and play interactive stories, driven by variables. I have made the site multiple times and here I will briefly discuss old versions of the site. The first was built in Wordpress using the ACF plugin. Everything worked, but it could not build large stories because Wordpress submits individual database calls for each ACF field, and there could be hundreds. I learnt an important lesson: test up to and beyond intended usage.  
        </p>
        <p>
          When learning React I rebuilt the site. I had ~100 sign ups and ~150 stories started a day after launching, but only a few stories were ever published. I believe the problem was that creating stories was not enjoyable, and really came down to filling out textboxes. A week after it was built I felt that the only way for the site to be successful would be an entire rebuild with a rewarding and intuitive method of creation. 
        </p>
        <p>
          I eventually rebuild the site again, but I think I was motivated more by annoyance from past failures and the guilt of letting people down.  The new site is better but not perfect, and is talked about here.
        </p>
        <div className='spacer' />
        <h4>
          Old Gatsby Portfolio
        </h4>
        <a className='link-major start' target="_blank" href='https://github.com/matthewwbuckley/WriterWebsite'>
          See on Github
        </a>
        <p>
          A simple static website built using Gatsby and hosted on netlify, both of which have left me impressed. I took the opportunity to try out sass. It is not documented and only serves to show that I have used Gatsby.
        </p>
      </div>
    )
  }
}

export default Projects