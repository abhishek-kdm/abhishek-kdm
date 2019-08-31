import * as React from 'react';

import LinkContainer from './linkContainer';


export default (): JSX.Element => {

  return (<>
    <div className='container'>

      <div className='screen'>
        <pre id={'about'} style={{ width: '100%', height: '100%' }}></pre>
      </div>

      <span className='screen-seperator'></span>

      <LinkContainer />

    </div>
  </>);
}
