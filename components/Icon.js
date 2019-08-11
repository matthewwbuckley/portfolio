import React from 'react'

function Icon(props) {
  const show = 'show' in props ? props.show : true 
  return (
    <div className='icon'>
      {show ? props.icon : null}
      <div className='icon-text'>
        {props.text}
      </div>
    </div>
  )
}

export default Icon