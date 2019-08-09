import React from 'react'
import { Transition } from 'react-transition-group'
import { TweenLite, Power1, SlowMo } from 'gsap'

const transitionStyles = {
  start:  { 
    opacity: 0,
    color: 'red',
    ease: SlowMo.easeInOut,
  },
  end:  { 
    opacity: 1,
    color: 'black',
    ease: SlowMo.easeInOut,
  },
};

const enter = (component) => {
  TweenLite.set(component, transitionStyles.start)
  TweenLite.to(component, 1.5, transitionStyles.end)
}

const exit = (component) => {
  TweenLite.set(component, transitionStyles.end)
  TweenLite.to(component, 1.5, transitionStyles.start)
}

const pageTransition = (Component) => {
  return class extends React.Component {
    render(){
      return (
        <Transition in appear timeout={0}
          onEnter={(Component)=>{enter(Component)}}
          onExit={(Component)=>{exit(Component)}}
        >
          <Component {...this.props} />
        </Transition>
      )
    }
  }
};

export default pageTransition