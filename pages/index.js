import React from 'react'
import '../styles/styles.scss'
import Link from 'next/link'
import Header from '../layout/header'
import Main from '../layout/main'

function Home() {
  return (
    <div>
      <Header />
      <Main>
        Hi <Link href='/items'><div>About Us</div></Link>
      </Main>
    </div>
  )
}

export default Home;