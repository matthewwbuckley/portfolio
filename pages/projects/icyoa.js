import React from 'react'
import Link from 'next/link'

import NavigationProjects from '../../components/NavigationProjects'

class ICYOA extends React.Component {
  render() {
    return (
      <div className='container'>
        <NavigationProjects index={1} />
        <a className='end' target="_blank" href='http://icyoa.io'>
          Visit the Site
        </a>
        <p>
          A CYOA will typically present a number of choices to the reader for them to build a story, character or setting, typically involving a point system.  The design goal of iCYOA was to create an interactive CYOA maker and player. The site has a Strapi backend and a React frontend, both hosted on Heroku. The CYOA can be exported as a static image or published on the site. 
        </p>
        <p>
          The CYOA are built from nestable components arranged using a drag and drop WYSIWYG interface. The story can hold a number of pages, with the structure on the page being the choice of the author. The creator shows the CYOA, its hierarchy navigation on the left, and selected component information on the right. The top bar holds new components that can be dropped into the hierarchy. Drag and drop functionality is done using a combination of <a target="_blank" href='https://github.com/react-dnd/react-dnd'>React-DnD</a> and <a target="_blank" href='https://github.com/bokuweb/re-resizable'>Reresizable</a>. Then components can be rearranged, deleted, copy/pasted, and exported/imported. Components are styled based on theme, state, and individual overrides, handled by <a target="_blank" href='https://github.com/greensock/GreenSock-JS'>GSAP</a>.
        </p>
        <img src='/static/icyoa.png' alt='icyoa' />
        <p>
          Authors set variables and define how they are modified in the story. Default variables are set up and altered automatically. All variables can be checked through requirements to determine behaviour. These requirements can be predictive, such that any change that results from the interaction is taken into account. Replacements allow text and images to change based on variables, depending if their requirements are passed.  
        </p>
        <p>
          The CYOA has a nested tree structure which is mapped over using recursive and iterative depth first methods (for developer experience) which take a match function, execution function, and a data store. The <a target="_blank" href='https://github.com/substack/js-traverse'>traverse library</a> is used for direct setting of values in the tree. Variable and default variables are copied to state, with relevant values copied to components to avoid unnecessary re-rendering.  Performance when the CYOA become large and further performance considerations could be taken.  
        </p>
        <p>
          The site has ~300 sign ups, with a similar number of CYOA started, but only a few CYOA have been published. Feedback on the site was that it is difficult to use, but most comment problems were highlighted in both Documentation and the starting CYOA, which acts as an introductory walkthrough.   
        </p>
        <a className='start' target="_blank" href='http://icyoa.io'>
          Visit the Site
        </a>
      </div>
    )
  }
}

export default ICYOA