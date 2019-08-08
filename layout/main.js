import React from 'react'
import { Transition } from 'react-transition-group'

const duration = 3000

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};


function Main(props) {
  return (
    <Transition in appear timeout={duration}>
    {state => (
      <div style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
        <div class="main">
          {props.children}
        </div>
      </div>
    )}
  </Transition>
    
  )
}

export default Main;