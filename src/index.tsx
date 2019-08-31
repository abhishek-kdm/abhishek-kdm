import * as React from 'react';

import FloatButton from './components/floatButton';

import PageTitle from './components/title';
import PageHeader from './components/header';
import PageFooter from './components/footer';
import PageBody from './components/body';


import { fetchJson, useStateReducer, typo } from './utils';

// created modals
import { GitModal, PageLoadingModal } from './components/modals';
import { BASIC_AUTHENTICATION_CREDS, USER_GITHUB } from './configs';
import { GlobalContext, UtilsContext } from './context';

import '../assets/css/style.css';


const { useState, useEffect, useContext } = React;


const headers = {
  Authorization: `Basic ${BASIC_AUTHENTICATION_CREDS}`
};



const MainComponent = () => {
  const {
    user,
    loaders, dispatchLoaders,
    userRepos, dispatchUserRepos,
    modals, dispatchModals,
  } = useContext(UtilsContext);

  const { fetchingRepos } = loaders;

  const fetchGithubDetails = () => {
    dispatchModals({ gitModal: true });
  }

  useEffect(() => {
    if (modals.gitModal) {
      
      if (userRepos.json.length) return;
      dispatchLoaders({ fetchingRepos: true });
      if (!(user.repos_url || '').trim().length) {
        dispatchLoaders({ fetchingRepos: true });
        dispatchUserRepos({ ok: false, message: 'Unable to fetch' });
        dispatchLoaders({ fetchingRepos: false });
        return;
      }

      fetchJson(user.repos_url, { headers })
      .then((json: any) => {
        dispatchUserRepos({ ok: true, json, message: '200 OK' });
      })
      .catch((json: any) => {
        dispatchUserRepos({ ok: false, message: json.message })
      })
      // @ts-ignore
      .finally(() => dispatchLoaders({ fetchingRepos: false }));

    }
  }, [modals.gitModal]);

  return (<>
    <div id='head-wrapper'>
      <PageTitle />
      <PageHeader />
    </div>

    <PageBody /> 
    <PageFooter />





    <GitModal
      show={modals.gitModal}
      githubUserLink={user.html_url}
      showLoader={fetchingRepos}
      vintage={true}
      closeFunc={() => { dispatchModals({ gitModal: false }); }}
    />

    <PageLoadingModal
      dimmness={'1'}
      show={modals.loadingPage}
      showLoader={true}
    />


    <FloatButton tooltip='Repositories..' onClick={fetchGithubDetails} />


  </>)
}





const UtilsComponent = () => {
  const [loaders, dispatchLoaders] = useStateReducer<Loaders>({
    fetchingRepos: false
  });

  const [modals, dispatchModals] = useStateReducer<Modals>({
    gitModal: false, loadingPage: true
  });

  const [userRepos, dispatchUserRepos] = useStateReducer<UserRepos>({
    ok: true, json: [], message: ''
  });

  const [user, setUser] = useState<any>({
    ok: true, json: [], message: ''
  });

  const value = {
    loaders, dispatchLoaders,
    modals, dispatchModals,
    user, setUser,
    userRepos, dispatchUserRepos
  };

  // cDM
  useEffect(() => {
    const postUserFetch = () => {
      dispatchModals({ loadingPage: false });
      typo(document.querySelector('pre#about'));
    }
    
    dispatchModals({ loadingPage: true });
    fetchJson(USER_GITHUB, { headers })
    .then((user: any) => { setUser(user); postUserFetch() })
    .catch(() => { postUserFetch(); });
  }, []);

  return (<>
    <UtilsContext.Provider value={value}>
      <MainComponent />
    </UtilsContext.Provider>
  </>)
}


const App: React.FC<{}> = () => {
  return (<>
    <GlobalContext.Provider value={{}}>
      <UtilsComponent />
    </GlobalContext.Provider>
  </>)
}


(async (AppRoot: React.FC<{}>) => {
  const { render } = await import('react-dom');
  render(
    <AppRoot />,
    document.getElementById('app-root')
  );
})(App);
