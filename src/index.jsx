import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import FloatButton from './components/floatButton';

import HyperDrive from './components/hyperdrive';
import PageTitle from './components/title';
import PageHeader from './components/header';
import PageFooter from './components/footer';
// import Neutron from './components/neutron';

// created modals
import { GitModal, PageLoadingModal } from './components/modals';

import { Provider } from './context';

import { USER_GITHUB, BASIC_AUTHENTICATION_CREDS } from './configs/contants';
import InfoBox from './components/infoBox';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaders: {
        gitLoader: false,
      },

      pageModalShow: true,
      gitModalShow: false,
      
      user: {},
      userRepos: { ok: true, json: [] },

      hyperdrive: false,
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
    console.log(BASIC_AUTHENTICATION_CREDS);
    const headers = {
      Authorization: `Basic ${BASIC_AUTHENTICATION_CREDS}`
    };
    this.fetchErrHandled(USER_GITHUB, { headers })
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
    this.setState({ gitModalShow: true });

    if (this.state.userRepos.json.length) return;
    
    this.showLoaders(['gitLoader']);

    this.fetchErrHandled(this.state.user.repos_url)
    .then((json) => this.setState(
      { userRepos: { ok: true, json } },
      this.hideLoaders(['gitLoader'])
    ))
    .catch((json) => this.setState(
      { userRepos: { ok: false, json } },
      this.hideLoaders(['gitLoader'])
    ));

  }


  async fetchErrHandled(url, options={}) {
    let response = await fetch(url, options);
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

    const gitImageStyle = {
      borderRadius: '50%',
      width: '10rem',
      height: '10rem',
    }

    return (
      <Provider value={value}>
        {/* <HyperDrive style={{ height: '100px', width: '100px', position: 'absolute', zIndex: '-999' }} /> */}
        
        <div id="wrapper" className="container">
          <PageTitle />
          {/* <button className='btn btn-success' onClick={() => this.setState({ hyperdrive: !this.state.hyperdrive })}>
            { 'Toggle Hyperdrive' }
          </button> */}

          <PageHeader />
          {
            user.avatar_url &&
            <div className='sonar-wave'>
              <a target='_blank' href={user.html_url}>
                <img style={gitImageStyle} src={user.avatar_url} />
              </a>
            </div>
          }
          

          {/* <InfoBox style={{ width: '250px', height: '250px' }} animation={true} /> */}



          <GitModal show={gitModalShow} githubUserLink={user.html_url}
            loaderShow={this.state.loaders.gitLoader}
            closeFunc={() => this.setState({ gitModalShow: false })}>
            {this.showUserRepos()}
          </GitModal>

          <PageLoadingModal dimmness={'1'} show={pageModalShow} loaderShow={loaders.pageLoader} />

          <FloatButton onClick={this.fetchGithubDetails} tooltip='Github..' />

        </div>
      </Provider>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#app')
);