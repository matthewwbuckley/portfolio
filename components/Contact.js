import React from 'react'
import { TimelineMax, TweenLite, Power2 } from 'gsap'

class Contact extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isRevealed: false,
    }

    this.ref = React.createRef()
    this.handleReveal = this.handleReveal.bind(this)
  }

  handleReveal(){
    const { isRevealed } = this.state
    let timeline = new TimelineMax()
    const height = !isRevealed ? `${this.ref.current.scrollHeight}px` : '0px'
    this.setState((oldState)=>{return {isRevealed: !oldState.isRevealed}})
    //await TweenLite.to(this.ref.current, 1, {height, ease: Power2.easeOut})
    if(isRevealed){
      timeline.to(this.ref.current, 1, {height, ease: Power2.easeOut})
    } else {
      timeline.to(this.ref.current, 1, {height, ease: Power2.easeOut}).set(this.ref.current,{height: 'auto'})
    }
  }
  
  render(){
    return(
      <div 
        className='contact'
      >
        <h3 
          onClick={this.handleReveal}
          style={{cursor: 'pointer', color: '#F71735'}}
        >Click here to get in touch</h3>
        <div
          className='revealer'
          ref={this.ref}
        >
          <form className='contact'>
            <div className='contact-spacer'>
              <input 
                className='contact-input'
                placeholder='name'
              />
            </div>
            <div className='contact-spacer'>
            <input
              className='contact-input'
              placeholder='email'
            />
            </div>
            <div className='contact-spacer'>
              <textarea
                placeholder='message'
              />
            </div>
            <div className='contact-spacer'>
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
      
    )
  }
}

export default Contact