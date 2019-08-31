import * as React from 'react';
import { ReactLogo, BeatingHeart } from './ui-components';

export default (): JSX.Element => {
  const footerInlineStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (<>
    <footer>
      <div className='container'>

        <div style={ footerInlineStyle }>
          <small>{'Built with'}</small>&nbsp;

          <BeatingHeart />&nbsp;

          <small>{'& '}</small>&nbsp;

          <ReactLogo />

        </div>
      </div>
    </footer>
  </>);
}
