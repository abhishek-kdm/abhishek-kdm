import React, { Component } from 'react';

export default class PageHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid">
      
        <div className="row">
          <div className="col-md-12">
      
            <div className="row">
              <div className="col-md-12">
                <h2> {'Abhishek Kadam'} </h2>
              </div>
              <div className="col-md-12">
                (<a href="mailto:abhishekk19@gmail.com">{'abhishekk19@gmail.com'}</a>)
              </div>
            </div>
      
          </div>
        </div>
      
      </div>
    )
  }
}

