import React from 'react'
import { Transition } from 'react-transition-group'
import { TweenLite, Power2, SlowMo } from 'gsap'


const transitionStyles = {
  start:  { 
    opacity: 0,
    color: '#77BA99',
    filter: 'blur(1px)',
    ease:  SlowMo.easeInOut,
  },
  end:  { 
    opacity: 1,
    color: null,
    filter: 'blur(0px)',
    ease:  SlowMo.easeInOut,
  },
};

const enter = (component) => {
  TweenLite.set(component, transitionStyles.start)
  TweenLite.to(component, 1.6, transitionStyles.end)
}

class MainRight extends React.Component {

  render(){
    return (
      <Transition in appear={!this.props.app.state.hasMounted} timeout={0}
        onEnter={(component)=>{enter(component)}}
      >
        <aside 
          className="main-right"
          ref={this.ref}
        >
          {this.props.component}
        </aside>
    </Transition>
    )
  }
};

export default MainRight