import React, { Component } from 'react';

export default class InfoBox extends Component {
  render() {
    return (
      <div style={this.props.style} className="info-box">
        <span className='info-head'>
          <span className='info-prompt'>
            {'> root@root~:'}&nbsp;
          </span>
          
          <span className='info-title'>{ this.props.title } </span>

          <span className='blinking'>{'_'}</span>
        </span>

        <div className="container" style={{ margin: '1rem auto' }}>
          {this.props.children}
        </div>

      </div>
    )
  }
} 