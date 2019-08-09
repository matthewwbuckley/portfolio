import React from 'react'

function Icon(props) {
  return (
    <div className='icon'>
      {props.icon}
      <div className='icon-text'>
        {props.text}
      </div>
    </div>
  )
}

export default Icon