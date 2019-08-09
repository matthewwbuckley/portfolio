import React from 'react'
import Header from './Header'
import Main from './Main'

function Layout(props){
  return (
    <div className="layout">
      <Header />
      <Main 
        app={props.app}
        left={props.left}
        right={props.right}
      />
    </div>
  )
}

export default Layout