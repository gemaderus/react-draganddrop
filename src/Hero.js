import React, { Component } from 'react';
import './hero.css'

class Hero extends Component {
  render(){
    return(
      <div className='hero'>
        <h1 className='titleHero'>Get to where you want to be. It's in your hands.<span>It's in your hands.</span></h1>
        <button className='button button-dark'>Drive with Cabify</button>
      </div>
    )
  }
}

export default Hero;