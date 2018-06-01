import React, { Component } from 'react';
import './footer.css'

class Footer extends Component {
  render() {
    return (
      <footer className='footer' {...this.props}>
        <div className="navContainer">
          <nav>
            <h1>About</h1>
            <ul>
              <li><a href="https://inside.cabify.com" title="Blog Cabify" target="_self">Blog</a></li>
              <li><a href="https://cabify.com/en/jobs" target="_self">Jobs</a></li>
              <li><a href="https://cabify.com/en/press" target="_self">Press</a></li>
              <li><a href="https://cabify.com/en/security" target="_self">Security</a></li>
            </ul>
          </nav>
          <nav>
            <h1>Product</h1>
            <ul>
              <li>
                <a href="https://cabify.com/en/drivers" title="Drivers" target="_self">Drivers</a>
              </li>
              <li><a href="https://cabify.com/en/business" title="Business" target="_self">Business</a></li>
              <li><a href="https://cabify.com/en/developers-api" title="Developers" target="_self">Developers</a></li >
            </ul >
          </nav >
          <nav>
            <h1>Support</h1>
            <ul>
              <li><a href="https://cabify.com/en/spain/terms" title="Terms and Conditions" className="termsLink=" target="_self">Terms &amp; Conditions</a></li>
              <li><a href="https://cabify.com/en/spain/privacy_policy" title="Privacy" target="_self">Privacy</a></li>
              <li><a href="https://help.cabify.com" title="Help Center" target="_self">Help</a></li>
            </ul>
          </nav >
          <nav>
            <h1>Connect</h1>
            <ul>
              <li><a href="https://www.facebook.com/cabifyEs" title="Facebook" target="_self">Facebook</a></li>
              <li><a href="https://twitter.com/cabify_espana" title="Twitter" target="_self">Twitter</a></li>
            <li><a href="https://www.instagram.com/cabify_espana" title="Instagram" target="_self">Instagram</a></li >
            </ul >
          </nav>
        </div>
        <ul className='store'>
          <li>
            <a class="buttonLight-outline" href="https://play.google.com/store/apps/details?id=com.cabify.rider&amp;hl=es">Android app</a>
          </li>
          <li>
            <a href="">
              <a class="buttonLight-outline" href="https://itunes.apple.com/es/app/cabify-tu-chofer-privado/id476087442?mt=8">iOS  app</a>
            </a>
          </li>
        </ul>
	    </footer>
    )
  }
}

export default Footer;