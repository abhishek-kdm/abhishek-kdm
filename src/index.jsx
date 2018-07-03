import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import InfoBox from './components/infoBox';
import FloatButton from './components/floatButton';
import ModalBox from './components/modalBox';
import Loader from './components/loader';

// created modals
import { GitModal, PageLoadingModal } from './components/modals';

import { Provider } from './context';

import {
  USER_GITHUB,
  REPO_LIST_URL,
} from './configs/contants';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaders: {
        gitLoader: false,
        pageLoader: true,
      },

      pageModalShow: true,
      gitModalShow: false,
      
      user: {},
      userRepos: { ok: true, json: [] },
    };
    this.fetchErrHandled = this.fetchErrHandled.bind(this);
    this.fetchGithubDetails = this.fetchGithubDetails.bind(this);
    this.showUserRepos = this.showUserRepos.bind(this);

    this.showLoaders = this.showLoaders.bind(this);
    this.hideLoaders = this.hideLoaders.bind(this);
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

  componentDidMount() {
    this.fetchErrHandled(USER_GITHUB)
    .then((user) => this.setState(
      { user },
      () => this.setState({ pageModalShow: !this.state.pageModalShow })
    ));
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
    if (!ok) return (
      <center>
        <code className='danger'>{json.message}</code>
      </center>
    );


    return (
      <ul>{json.map((o, i) => (
        <li key={i}>
          <a href={o.html_url} target='_blank'>{o.name}</a>
        </li>
      ))}</ul>
    );
  }

  fetchGithubDetails() {
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
    const { user, gitModalShow, loaders, pageModalShow } = this.state;

    const value = {
      state: this.state,
      setState: (s1) => this.setState((s) => Object.assign({}, s, s1)),
    }

    return (
      <Provider value={value}>
        <React.Fragment>
          <div className="container">

            <h3>{`I am ${user.name || '...'}`}</h3>

            <FloatButton onClick={this.fetchGithubDetails} tooltip='Github..' />
          </div>

          <GitModal show={gitModalShow} loaderShow={loaders.gitLoader}
            closeFunc={() => this.setState({ gitModalShow: false })}
            githubUserLink={user.html_url}>
            {this.showUserRepos()}
          </GitModal>

          <PageLoadingModal dimmness={'1'} show={pageModalShow} loaderShow={loaders.pageLoader} />

        </React.Fragment>
      </Provider>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#app')
);