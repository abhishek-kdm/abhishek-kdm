import * as React from 'react';

import { typo, shortFetch } from '../utils';
import { USER_GITHUB, BASIC_AUTHENTICATION_CREDS } from '../configs';
import LinkContainer from './linkContainer';
import { PageContext } from '../context';


const { useEffect, useContext } = React;

const headers = {
  Authorization: `Basic ${BASIC_AUTHENTICATION_CREDS}`
};


export default (): JSX.Element => {
  const { hideModals, setState } = useContext<any>(PageContext);

  const hideModal = () => hideModals(
    ['pageModal'],
    () => typo(document.querySelector('pre#about'))
  );


  // cDM
  useEffect(() => {
    shortFetch(USER_GITHUB, { headers })
    .then((user: any) => setState({ user }, hideModal()))
    .catch(() => hideModal());
  }, []);

  return (
    <div className='container'>

      <div className='screen'>
        <pre id={'about'} style={{ width: '100%', height: '100%' }}></pre>
      </div>

      <span className='screen-seperator'></span>

      <LinkContainer />

    </div>
  )

}
