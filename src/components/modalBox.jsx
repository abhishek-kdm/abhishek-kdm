import React, { Component } from 'react';

export default class ModalBox extends Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose(e) {
    if (e.target === e.currentTarget) this.props.closeFunc();
  }

  render() {
    return (
      <div onClick={this.handleClose}
        className="modal" style={{ display: this.props.show ? 'block' : 'none' }}>

        <div className="modal-content">
          {this.props.children}
        </div>
        
      </div>
    )
  }
}