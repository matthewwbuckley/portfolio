import App, { Container } from 'next/app'
import Head from 'next/head';
import React from 'react'
import { TransitionGroup } from 'react-transition-group'
import { TweenLite, Power2, SlowMo } from 'gsap'

import appContext from '../context/appContext'

import Layout from '../layout/Layout'
import Info from '../components/Info'

import '../styles/styles.scss'


const transitionDuration = 0.5

const transitionStyles = {
  start:  { 
    opacity: 0,
    color: 'red',
    position: 'absolute',
    ease:  SlowMo.easeInOut,
  },
  end:  { 
    opacity: 1,
    color: null,
    delay: transitionDuration,
    ease:  SlowMo.easeInOut,
  },
};

const enter = (component) => {
  TweenLite.set(component, transitionStyles.start)
  TweenLite.to(component, transitionDuration, transitionStyles.end)
}

const exit = (component) => {
  TweenLite.set(component, transitionStyles.end)
  TweenLite.to(component, transitionDuration, transitionStyles.start)
}


class MyApp extends App {
  constructor(props){
    super(props)

    this.state = {
      hasMounted: false,
      mainLeft: null,
      mainRight: null,
    }

  }

  setReference(ref, name) {
    this.setState({[name]: ref})
  }


  render () {
    const { Component, pageProps } = this.props

    const Page = (
        <Container>
          <TransitionGroup>
            <Component {...pageProps} />
          </TransitionGroup>
        </Container>
    )

    const info = (<Info />)

    return (
      <appContext.Provider value={this}>
        <Head>
          <title>Matthew Buckley</title>
          <link href="https://fonts.googleapis.com/css?family=Dosis|Nanum+Gothic|Rajdhani|Varela+Round&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css" />
        </Head>
        <Container>
          <Layout app={this} left={{component: Page}} right={{component: info}} />
        </Container>
      </appContext.Provider>  
      
    )
  }
}

export default MyApp