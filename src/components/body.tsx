import * as React from 'react';

import { typo, fetchErrHandled } from '../utils';
import { USER_GITHUB, BASIC_AUTHENTICATION_CREDS } from '../configs';
import LinkContainer from './linkContainer';
import { PageContext } from '../context';

let { useEffect, useContext } = React;
interface IBodyProps {};


let headers = {
  Authorization: `Basic ${BASIC_AUTHENTICATION_CREDS}`
};

export default (props: IBodyProps) => {
  var ctx: any = useContext(PageContext);

  let hideModal = () => ctx.hideModals(['pageModal'], () => typo(document.querySelector('pre#about')));

  useEffect(() => {
    fetchErrHandled(USER_GITHUB, { headers })
		.then((user: any) => ctx.setState({ user }, hideModal()))
    .catch((err: any) => hideModal());
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
