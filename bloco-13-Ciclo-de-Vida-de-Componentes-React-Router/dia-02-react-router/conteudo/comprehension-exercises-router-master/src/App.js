import React, { Component } from 'react';
import Home from './components/Home';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import About from './components/About';
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/users' component={Users} />
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/users'>Users</Link></li>
        </ul>
      </BrowserRouter>
    );
  }
}

export default App;
