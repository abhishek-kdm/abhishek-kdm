import React, { Component } from 'react';

export default class FloatButton extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    $("html").mousemove(function (event) {
      var eye = $(".eye");
      var x = (eye.offset().left) + (eye.width() / 2);
      var y = (eye.offset().top) + (eye.height() / 2);
      var rad = Math.atan2(event.pageX - x, event.pageY - y);
      var rot = (rad * (180 / Math.PI) * -1) + 180;
      eye.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });
  }

  render() {
    return (
      <button onClick={this.props.onClick} className={`${this.props.className} float tooltip-parent`}>
        { this.props.tooltip && 
          <span className='tooltip-text'>{this.props.tooltip}</span>
        }
        <i style={{ color: '#00E640' }} className="fa fa-3x fa-github"></i>
        <span className="eye-container">
          <span className="eye"></span>
          <span className="eye"></span>
        </span>
      </button>
    )
  }
}