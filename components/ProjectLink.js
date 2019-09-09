import React from 'react'
import Link from 'next/link'

import { TweenLite, Elastic } from 'gsap'

import Icon from './Icon'

class ProjectLink extends React.Component {
  constructor(props){
    super(props)
    this.refIndicator = React.createRef()
  }

  handleAnimation(bool){
    console.log('animate', this.refIndicator)
    const opacity = bool ? 1 : 0
    const transform = bool ? 'scale(1)' : 'scale(0)'
    TweenLite.to(this.refIndicator.current, 0.5, {opacity, transform, ease: Elastic.easeOut})
  }
  
  render(){
    const { link, name, text, technologies } = this.props
    return(
      <Link 
        href={link}
      >
        <div
          className='project-link-inner'
          onMouseEnter={()=>this.handleAnimation(true)}
          onMouseLeave={()=>this.handleAnimation(false)}
        >
          <div
            className='flex-row'
            style={{height:'32px'}}
          >
            <h3>{name}</h3>
            <div 
              ref={this.refIndicator}
              className='indicator-static' 
            />
          </div>
          <p>{text}</p>
          <div
            className='flex-row'
          >
            {technologies.map(tech=> (
              <Icon key={tech.text} icon={tech.icon} text={tech.text} show={true} />
            ))}
          </div>
        </div>

      </Link>
    )
  }
}

export default ProjectLink