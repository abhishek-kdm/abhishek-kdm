import React, { Component } from 'react';

export default class FloatButton extends Component {
  render() {
    return (
      <button className='float'>
        <i style={{ color: '#fff' }} className="fa fa-3x fa-github"></i>
        <span className="eye-container">
          <span className="eye"></span>
          <span className="eye"></span>
        </span>
      </button>
    )
  }
}
