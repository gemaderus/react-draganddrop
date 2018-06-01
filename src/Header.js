import React, { Component } from 'react';
import Logo from './Icons/logo'
import './header.css'

class Header extends Component {

  render() {
    return (
      <header className='header' {...this.props}>
        <nav className="navigation">
          <div style={{ maxWidth: 96 }}>
            <a href="https://cabify.com/en" className='logo'>
              <Logo />
            </a>
          </div>
          <ul className='navItems'>
            <li>
              <a className='navItem-Link' href="https://cabify.com/en/business" title="Cabify for your company">Business</a>
            </li>
            <li>
              <a className='navItem-Link' href="https://cabify.com/en/drivers" id="drivers_nav" title="Drive for Cabify">Drivers</a>
            </li>
            <li>
              <a className='navItem-Link' href="https://help.cabify.com/hc/en-us" id="help_nav" title="Help and Cabify issues">Help</a>
            </li>
            <li>
              <a className='navItem-Link' href="https://cabify.com/en/spain/madrid" title="Esimate fares in your city">Fares</a>
            </li>
            <li>
              <a className="btnMain-outline" href="/app">Ride with Cabify</a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header;