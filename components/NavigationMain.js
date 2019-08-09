import React from 'react'
import Link from 'next/link'

import { CSSTransition } from 'react-transition-group'
import { TweenLite, Power2 } from 'gsap'

class NavigationMain extends React.Component {
  constructor(props){
    super(props)

    this.indicatorSpaceRef = React.createRef()
    this.indicatorRef = React.createRef()
  }

  componentDidMount(){
    const route = this.props.app.props.router.route
    const inProjects = route.includes('projects')
    this.moveIndicator(inProjects, 1.8)
  }

  moveIndicator(bool, duration=1.2){
    const dimensions = this.indicatorSpaceRef.current.getBoundingClientRect()
    const move = bool ? `${dimensions.width - 20}` : '10px'
    TweenLite.to(this.indicatorRef.current, duration, {left: move, ease: Power2.easeOut })
  }

  render(){
    return(
      <div className='navigation-main'>
        <Link href='/'><h2 onClick={()=>this.moveIndicator(false)} >Personal</h2></Link>
          <div className='indicator-space' ref={this.indicatorSpaceRef}>
            <div className='indicator' ref={this.indicatorRef}/>
          </div>
        <Link href='/projects'><h2 onClick={()=>this.moveIndicator(true)}  >Projects</h2></Link>
      </div>
    )
  }
}

export default NavigationMain