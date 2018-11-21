import * as React from 'react';
import * as ReactDOM from 'react-dom';

import FloatButton from './components/floatButton';

import PageTitle from './components/title';
import PageHeader from './components/header';
import PageFooter from './components/footer';
import PageBody from './components/body';


import { fetchErrHandled } from './utils';

// created modals
import { GitModal, PageLoadingModal } from './components/modals';
import { BASIC_AUTHENTICATION_CREDS } from './configs';
import { PageContext } from './context';


const headers = {
	Authorization: `Basic ${BASIC_AUTHENTICATION_CREDS}`
};

class App extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			loaders: { gitLoader: false },

			modals: { pageModal: true, gitModal: false },
			
			user: {},
			userRepos: { ok: true, json: [] },
		};

		this.fetchGithubDetails = this.fetchGithubDetails.bind(this);
		this.showUserRepos = this.showUserRepos.bind(this);

		this.showLoaders = this.showLoaders.bind(this);
		this.hideLoaders = this.hideLoaders.bind(this);
		this.showModals = this.showModals.bind(this);
		this.hideModals = this.hideModals.bind(this);
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

	showLoaders = (names: [string], callback=(() => {})) => {
		var loaders = Object.assign({}, ...names.map((n: string) => ({ [n]: true })));
		this.setState(
			(prevState: any) => ({ loaders: { ...prevState.loaders, ...loaders } }),
			callback
		);
	};

	hideLoaders = (names: [string], callback=(() => {})) =>  {
		var loaders = Object.assign({}, ...names.map((n: string) => ({ [n]: false })));
		this.setState(
			(prevState: any) => ({ loaders: { ...prevState.loaders, ...loaders } }),
			callback
		);
	};

	showModals = (names: [string], callback=(() => {})) => {
		var modals = Object.assign({}, ...names.map((n: string) => ({ [n]: true })));
		this.setState(
			(prevState: any) => ({ modals: { ...prevState.modals, ...modals } }),
			callback
		);
	};

	hideModals = (names: [string], callback=(() => {})) => {
		var modals = Object.assign({}, ...names.map((n: string) => ({ [n]: false })));
		this.setState(
			(prevState: any) => ({ modals: { ...prevState.modals, ...modals } }),
			callback
		);
	};


	showUserRepos = () => {
		const { ok, json, message } = this.state.userRepos;
		if (!ok) return (
			<div style={{ margin: 'auto' }}>
				<code className='danger'>{ message }</code>
			</div>
		);

		return (
			<ul>{json.map((o: any, i: number) => (
				<li key={ i }>
					<a href={ o.html_url } target='_blank'>{ o.name }</a>
				</li>
			))}</ul>
		);
	}

	fetchGithubDetails() {
		this.showModals(['gitModal']);

		if (this.state.userRepos.json.length) return;
		
		this.showLoaders(['gitLoader']);
		if (this.state.user.repos_url || false) {
			this.hideLoaders(
				['gitLoader'],
				() => this.setState({ userRepos: { ok: false, message: 'Unable to fetch' }})
			);
			return;
		}

		fetchErrHandled(this.state.user.repos_url, { headers })
		.then((json: any) => this.setState(
			{ userRepos: { ok: true, json, message: '200 OK' } },
			() => this.hideLoaders(['gitLoader'])
		))
		.catch((json: any) => this.setState(
			{ userRepos: { ok: false, message: json.message } },
			() => this.hideLoaders(['gitLoader'])
		));

	}

	render() {
		const { user, modals, loaders } = this.state;

		let value = {
			setState: (s1: any, callback=(()=>{})) => this.setState((s: any) => Object.assign({}, s, s1), callback),
			showModals: this.showModals,
			hideModals: this.hideModals,
		}

		return (
			<PageContext.Provider value={value}>


				<div id='head-wrapper'>
					<PageTitle />
					<PageHeader />
				</div>

				<PageBody /> 
				<PageFooter />





				<GitModal show={modals.gitModal} githubUserLink={user.html_url}
					loaderShow={loaders.gitLoader} vintage={true}
					closeFunc={() => this.hideModals(['gitModal'])}>
					{this.showUserRepos()}
				</GitModal>

				<PageLoadingModal
					dimmness={'1'}
					show={modals.pageModal}
					loaderShow={loaders.pageLoader} />


				<FloatButton onClick={this.fetchGithubDetails} tooltip='Repositories..' />

			</PageContext.Provider>
		)
	}
}

ReactDOM.render(
	<App />,
	document.querySelector('#app')
);