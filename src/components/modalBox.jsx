import React, { Component } from 'react';

export default class ModalBox extends Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose = (e) => (e.target === e.currentTarget) && this.props.closeFunc()

  render() {

    const style = Object.assign(
      {},
      { backgroundColor: `rgba(0, 0, 0, ${this.props.dimmness || '.6'})` },
      { display: this.props.show ? 'block' : 'none' }
    );

    return (
      <div onClick={this.handleClose} style={style} className="modal">

        <div className="modal-content">
          {this.props.children}
        </div>
        
      </div>
    )
  }
}