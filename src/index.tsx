import * as React from 'react';
import * as ReactDOM from 'react-dom';

import FloatButton from './components/floatButton';

import PageTitle from './components/title';
import PageHeader from './components/header';
import LinkContainer from './components/linkContainer';
import InfoBox from './components/infoBox';

// created modals
import { GitModal, PageLoadingModal } from './components/modals';
import { USER_GITHUB, BASIC_AUTHENTICATION_CREDS, ABOUT_ME } from './configs/contants';
import { Provider } from './context';


function sleep(ms: number) { return new Promise((f) => setTimeout(f, ms)); }

async function typo(el: HTMLElement) {
	for (const i of ABOUT_ME) {
		const nodeValue = ($(el).contents().filter(function() { return this.nodeType == 3; })[0] || {nodeValue: ''}).nodeValue
		el.innerHTML = `${nodeValue + i}<span class='blinking'>_</span>`;
		$(el).animate({ scrollTop: $(el).prop('scrollHeight') }, 0);
		await sleep(Math.random() * 200);
	}
}


interface IProps {
	html_url: string,
	avatar_url: string
}

const headers = {
	Authorization: `Basic ${BASIC_AUTHENTICATION_CREDS}`
};

class App extends React.Component<any, any> {
	constructor(props: any) {
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
		this.renderAvatar = this.renderAvatar.bind(this);

		this.showLoaders = this.showLoaders.bind(this);
		this.hideLoaders = this.hideLoaders.bind(this);
	}

	componentWillMount() {
		$('html').mousemove(function (event) {
			var eye = $('.eye');
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
			() => this.setState(
				{ pageModalShow: !this.state.pageModalShow },
				() => typo(document.querySelector('pre#about'))
			)
		));
	}


	showLoaders = (names: [string]) => {
		var loaders = Object.assign({}, ...names.map((n: string) => ({ [n]: true })));
		this.setState((prevState: any) => ({ loaders: { ...prevState.loaders, ...loaders } }));
	};

	hideLoaders = (names: [string]) =>  {
		var loaders = Object.assign({}, ...names.map((n: string) => ({ [n]: false })));
		this.setState((prevState: any) => ({ loaders: { ...prevState.loaders, ...loaders } }));
	};

	showUserRepos = () => {
		const { ok, json } = this.state.userRepos;
		if (!ok) return (
			<div style={{ margin: 'auto' }}>
				<code className='danger'>{json.message}</code>
			</div>
		);


		return (
			<ul>{json.map((o: any, i: number) => (
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
			() => this.hideLoaders(['gitLoader'])
		))
		.catch((json) => this.setState(
			{ userRepos: { ok: false, json } },
			() => this.hideLoaders(['gitLoader'])
		));

	}

	renderAvatar = ({ html_url, avatar_url }: IProps, style: any) => (
		<div className='sonar-wave'>
			<a target='_blank' href={html_url}>
				<img style={style} src={avatar_url} />
			</a>
		</div>
	)


	async fetchErrHandled(url: string, options={}) {
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
			setState: (s1: any) => this.setState((s: any) => Object.assign({}, s, s1)),
		}

		const gitImageStyle = {
			borderRadius: '50%',
			width: '5rem',
			height: '5rem',
		}

		const avatar = user.avatar_url ? this.renderAvatar(user, gitImageStyle) : <React.Fragment />;

		return (
			<Provider value={value}>
				<div id='wrapper'>
					{/* <div className='react-logo-container'>
						<div className='react-logo'></div>
					</div> */}
					<div id='head-wrapper'>
						<PageTitle />
						<PageHeader />
					</div>






					<div className='container'>

					<div className='screen'>
						<pre id={'about'} style={{ width: '100%', height: '100%' }}></pre>
					</div>
	
					<span className='screen-seperator'></span>

					<InfoBox><LinkContainer /></InfoBox>

					</div>





					<GitModal show={gitModalShow} githubUserLink={user.html_url}
						loaderShow={this.state.loaders.gitLoader} vintage={true}
						closeFunc={() => this.setState({ gitModalShow: false })}>
						{this.showUserRepos()}
					</GitModal>

					<PageLoadingModal dimmness={'1'} show={pageModalShow} loaderShow={loaders.pageLoader} />
					<FloatButton onClick={this.fetchGithubDetails} tooltip='Repositories..' />

				</div>
			</Provider>
		)
	}
}
ReactDOM.render(
	<App />,
	document.querySelector('#app')
);