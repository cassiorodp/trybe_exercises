import React, { Component } from 'react';
import Home from './components/Home';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './components/StrictAccess';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/users/:id' render={(props) => <Users {...props} greetingsMessage='Good Morning' />} />
          <Route exact path='/strict-access' render={(props) => <StrictAccess {...props} user={{username: 'jao', password: '1234'}} /> } />
          <Route path='/about' component={About} />
          <Route exact path='/' component={Home} />
        </Switch>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/users'>Users</Link></li>
          <li><Link to='/strict-access'>Strict Access</Link></li>
        </ul>
      </BrowserRouter>
    );
  }
}

export default App;
