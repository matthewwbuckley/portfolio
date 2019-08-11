import React from 'react'

function ListItem(props) {
  return (
    <div className='list-item'>
      <div className='bullet-container'>
        <div className='bullet' />
      </div>
      {props.children}
    </div>
  )
}

export default ListItem