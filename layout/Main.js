import React from 'react'
import MainLeft from './MainLeft'
import MainRight from './MainRight'

function Main(props) {
  return (
    <div className="main">
      <MainLeft  app={props.app} {...props.left} />
      <MainRight app={props.app} {...props.right} />      
    </div>
  )
}

export default Main;