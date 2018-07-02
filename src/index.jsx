import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import InfoBox from './components/infoBox';
import FloatButton from './components/floatButton';
import ModalBox from './components/modalBox';
import Loader from './components/loader';

import {
  USER_GITHUB,
  REPO_LIST_URL,
} from './configs/contants';


const GitModal = (props) => {
  return (
    <ModalBox show={props.show} closeFunc={props.closeFunc}>

      <InfoBox style={{ height: '250px' }}
        title={<a target='_blank' href={USER_GITHUB}>{'github'}</a>}>

        <Loader size='sm' show={props.loaderShow}>
          <span className="blinking">{'Loading github repos...'}</span>
        </Loader>

        {props.children}

      </InfoBox>

    </ModalBox>
  )
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaders: {
        gitLoader: false,
      },

      gitModalShow: false,
      userRepoList: [],
      userRepos: { ok: true, json: [] },
    };
    this.fetchErrHandled = this.fetchErrHandled.bind(this);
    this.openGitModal = this.openGitModal.bind(this);
    this.showUserRepos = this.showUserRepos.bind(this);

    this.showLoaders = this.showLoaders.bind(this);
    this.hideLoaders = this.hideLoaders.bind(this);
  }

  showLoaders(names) {
    var loaders = Object.assign({}, ...names.map((n) => ({ [n]: true })));
    this.setState(prevState => ({ loaders: { ...prevState.loaders, ...loaders } }));
  };

  hideLoaders(names) {
    var loaders = Object.assign({}, ...names.map((n) => ({ [n]: false })));
    this.setState(prevState => ({ loaders: { ...prevState.loaders, ...loaders } }));
  };

  showUserRepos = () => {
    const { ok, json } = this.state.userRepos;
    if (!ok) return <center><code>{json.message}</code></center>;

    return (
      <ul>{json.map((o, i) => (
        <li key={i}>{o.html_url}</li>
      ))}</ul>
    );
  }

  openGitModal() {
    this.setState({ userRepos: { ok: true, json: [] } },
      () => {

        this.showLoaders(['gitLoader']);
        const { gitModalShow } = this.state;
        this.setState({ gitModalShow: !gitModalShow });

        this.fetchErrHandled(REPO_LIST_URL)
        .then((json) => this.setState(
          { userRepos: { ok: true, json } },
          this.hideLoaders(['gitLoader'])
        ))
        .catch((json) => this.setState(
          { userRepos: { ok: false, json } },
          this.hideLoaders(['gitLoader'])
        ));

      }
    );
  }


  async fetchErrHandled(url) {
    let response = await fetch(url);
    if (!response.ok) {
      throw Error(`${response.status} ${response.statusText}`);
    }
    let json = await response.json();
    return json;
  }


  render() {
    const { gitModalShow, loaders } = this.state;

    return (
      <React.Fragment>
        <div className="container">


          <FloatButton onClick={this.openGitModal} />
        </div>
        

        <GitModal show={gitModalShow} loaderShow={loaders.gitLoader}
          closeFunc={() => this.setState({ gitModalShow: false })}>
          {this.showUserRepos()}
        </GitModal>

      </React.Fragment>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#app')
);