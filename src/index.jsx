import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import FloatButton from './components/floatButton';

import PageTitle from './components/title';
import PageHeader from './components/header';

// created modals
import { GitModal, PageLoadingModal } from './components/modals';

import { Provider } from './context';

import { USER_GITHUB, BASIC_AUTHENTICATION_CREDS, ABOUT_ME } from './configs/contants';

function sleep(ms) { return new Promise((f) => setTimeout(f, ms)); }

async function typo(el) {
  for (const i of ABOUT_ME) {
    const nodeValue = ($(el).contents().filter(function() { return this.nodeType == 3; })[0] || {nodeValue: ''}).nodeValue
    el.innerHTML = `${nodeValue + i}<span class='blinking'>_</span>`;
    $(el).animate({ scrollTop: $(el).prop('scrollHeight') }, 0);
    await sleep(Math.random() * 200);
  }
}
const headers = {
  Authorization: `Basic ${BASIC_AUTHENTICATION_CREDS}`
};

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
    this.fetchErrHandled(USER_GITHUB, { headers })
    .then((user) => this.setState(
      { user },
      this.setState({ pageModalShow: !this.state.pageModalShow }, () => typo(document.querySelector('pre#about')))
    ));
  }


  showLoaders = (names) => {
    var loaders = Object.assign({}, ...names.map((n) => ({ [n]: true })));
    this.setState(prevState => ({ loaders: { ...prevState.loaders, ...loaders } }));
  };

  hideLoaders = (names) =>  {
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

    this.fetchErrHandled(this.state.user.repos_url, { headers })
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
      width: '5rem',
      height: '5rem',
    }

    return (
      <Provider value={value}>
        <div id='wrapper'>
          <div id='head-wrapper'>
            <PageTitle />
            <PageHeader />
          </div>

          <div className="container">
          {/* {
            user.avatar_url &&
            <div className='sonar-wave'>
              <a target='_blank' href={user.html_url}>
                <img style={gitImageStyle} src={user.avatar_url} />
              </a>
            </div>
          } */}

          <div className="screen">
            <pre className='glow-text' id={'about'} style={{ width: '100%', height: '100%' }}></pre>
          </div>



          {/* <i class="fa fa-5x fa-lg fa-tv"></i>
          <pre>kjagsdljbaljsbdljbhjasd</pre> */}
          </div>

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