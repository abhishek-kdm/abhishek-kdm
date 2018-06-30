import React, { Component } from 'react';

export default class ModalBox extends Component {
  render() {
    return (
      <div id="myModal" className="modal" style={{ display: this.props.show }}>
        <span class="close">&times;</span>

        <div className="modal-content">
          {this.props.children}
        </div>
        
      </div>
    )
  }
} 