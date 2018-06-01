import React, { Component } from 'react';
import './hero.css'

class Hero extends Component {
  render(){
    return(
      <div className='hero' {...this.props}>
        <h1 className='titleHero'>Get to where you want to be.<span> It's in your hands.</span></h1>
        <button className='button button-dark'>Drive with Cabify</button>
      </div>
    )
  }
}

export default Hero;