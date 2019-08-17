import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <header className="header">
      <Link href='/'><h1 className='link-title' >Matthew W Buckley</h1></Link>
    </header>
  )
  
}

export default Header;