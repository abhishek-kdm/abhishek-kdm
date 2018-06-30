import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import InfoBox from './components/infoBox';
import FloatButton from './components/floatButton';
import ModalBox from './components/modalBox';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { gitModal: false };
  }
  render() {
    const infoBox__style = {
      width: '300px',
      height: '250px',
    }
    return (
      <React.Fragment>
        <div className="container">
          <h1>{'<Abhishek />'}</h1>

          {/* <InfoBox style={infoBox__style}>
          </InfoBox> */}

          <FloatButton onClick={() => this.setState({ gitModal: !gitModal})}/>

        </div>
        <ModalBox show={this.state.gitModal}>
          <InfoBox style={{ height: '250px' }}>
          </InfoBox>
        </ModalBox>
      </React.Fragment>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#app')
);