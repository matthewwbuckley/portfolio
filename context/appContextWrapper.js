import React from 'react'
import appContext from './appContext'

function appContextWrapper(Component){
  return class extends React.Component {
    render() {
      return(
        <appContext.Consumer>
          {app =>
            <Component app={app} {...this.props} />
          }
        </appContext.Consumer>
      )
    }
  }
}

export default appContextWrapper;