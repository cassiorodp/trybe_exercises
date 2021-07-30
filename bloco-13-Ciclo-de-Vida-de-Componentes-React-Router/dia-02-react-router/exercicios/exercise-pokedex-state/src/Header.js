import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Pokedex</h1>
        <nav>
          <Link className='nav-bar-links' to='/'>Home</Link>
        </nav>
      </div>
    )
  }
}

export default Header;