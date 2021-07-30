import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class StrictAccess extends Component {
  render() {
    const {user} = this.props;
    const {username, password} = user;
    if ((username !== 'joao' || password !== '1234')) {
      alert('Access denied');
      return <Redirect to='/' />
    }
    return (
      <p>Welcome {username}</p>
    )
  }
}

export default StrictAccess