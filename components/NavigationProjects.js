import React from 'react'
import Link from 'next/link'

import { CSSTransition } from 'react-transition-group'
import { TweenLite, Power2 } from 'gsap'

function NavigationProjects (props){
  const array = ['nav-sub-default','nav-sub-default','nav-sub-default','nav-sub-default','nav-sub-default']
  array[props.index] = 'nav-sub-selected'
  return(
    <nav className='navigation-projects'>
      <Link href='/projects/icyoa'>              
        <h3 className={`${array[1]} interactive`} >iCYOA</h3>
      </Link>
      <Link href='/projects/short-stories'> 
        <h3 className={`${array[2]} interactive`} >Short Stories</h3>
      </Link>
      <Link href='/projects/boost-ball'>    
        <h3 className={`${array[0]} interactive`} >Boost Ball</h3>
      </Link>
      <Link href='/projects/misc-projects'> 
        <h3 className={`${array[4]} interactive`} >Other Projects</h3>
      </Link>
    </nav>
  )
}

export default NavigationProjects