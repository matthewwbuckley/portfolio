import React from 'react'
import { Transition, TransitionGroup } from 'react-transition-group'
import { TweenLite, Power2, SlowMo } from 'gsap'

import NavigationMain from '../components/NavigationMain'

const transitionDuration = 0.6

const transitionStyles = {
  start:  { 
    opacity: 0,
    color: '#77BA99',
    filter: 'blur(1px)',
    position: 'absolute',
    ease:  SlowMo.easeInOut,
  },
  end:  { 
    opacity: 1,
    color: null,
    filter: 'blur(0)',
    delay: transitionDuration,
    ease:  SlowMo.easeInOut,
  },
};

const navEnter = (component) => {
  let { position, ...cleanStart } = transitionStyles.start
  let { delay, ...cleanEnd } = transitionStyles.end
  TweenLite.set(component, cleanStart)
  TweenLite.to(component, transitionDuration*1.5, cleanEnd)
}

const enter = (component) => {
  TweenLite.set(component, transitionStyles.start)
  TweenLite.to(component, transitionDuration, transitionStyles.end)
}

const exit = (component) => {
  TweenLite.set(component, transitionStyles.end)
  TweenLite.to(component, transitionDuration, transitionStyles.start)
}


class MainLeft extends React.Component {
  render(){
    const { component, app } = this.props
    const componentWithProps = React.cloneElement(component, {
      app,
    })

    return (
      <div 
        className="main-left"
        ref={this.ref}
      >
        <Transition in appear={!this.props.app.state.hasMounted} timeout={0}
        onEnter={(component)=>{navEnter(component)}}
          >
            <NavigationMain app={app} />
        </Transition>
        
        <TransitionGroup>
          <Transition
            appear
            timeout={{ enter: transitionDuration*1000, exit: transitionDuration*1000 }}
            key={this.props.app.props.router.route}
            onEnter={(component)=>{enter(component)}}
            onExit={(component)=>{exit(component)}}
          > 
            
              {componentWithProps}
            
          </Transition>
        </TransitionGroup>
      </div>
    )
  }
};

export default MainLeft

