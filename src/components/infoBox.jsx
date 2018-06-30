import React, { Component } from 'react';

export default class InfoBox extends Component {
  render() {
    return (
      <div {...this.props} className="info-box">
        <span className='title'>
          {'> root@root~:'}&nbsp;&nbsp;&nbsp;
          <span className='blinking'>{'_'}</span>
        </span>

        <div className="container">
          {this.props.children}
        </div>

      </div>
    )
  }
} 