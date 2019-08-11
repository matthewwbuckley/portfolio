import React from 'react'
import Link from 'next/link'

import { CSSTransition } from 'react-transition-group'
import { TweenLite, Power2, SlowMo } from 'gsap'

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
    let borders = {}
    borders.borderTopLeftRadius = bool ? '100%' : '0%'
    borders.borderTopRightRadius = bool ? '100%' : '100%'
    borders.borderBottomLeftRadius = bool ? '100%' : '100%'
    borders.borderBottomRightRadius = bool ? '0%' : '100%'

    TweenLite.set(this.indicatorRef.current, {borderRadius: '100%'})
    TweenLite.to(this.indicatorRef.current, duration, {left: move, ease: Power2.easeOut })
    TweenLite.to(this.indicatorRef.current, duration/3, {delay: 2*duration/3,  ease: SlowMo.easeInOut, ...borders })
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