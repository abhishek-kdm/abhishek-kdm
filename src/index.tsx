import * as React from 'react';

import App from './app';
import '../assets/css/style.css';


// import registerServiceWorker from './serviceWorkerRegistration';
// registerServiceWorker();


(async (AppRoot: React.FC<{}>) => {
  const { render } = await import('react-dom');
  render(
    <AppRoot />,
    document.getElementById('app-root')
  );
})(App).then(() => {
  // @TODO: need to fix this.
  // @ts-ignore
  require('./components/hyperdrive');
});
