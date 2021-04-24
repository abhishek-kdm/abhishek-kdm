import React, { useEffect } from 'react';
import StyledPageWrapper, { TogglerRoot, DarkModeID  } from './pageWrapper.style';

interface PageWrapperProps extends React.HTMLAttributes<HTMLDivElement> { }

const PageWrapper: React.FC<PageWrapperProps> = (props) => {

  useEffect(() => {
    (document
      .getElementById(DarkModeID) as HTMLInputElement)
      .checked = window
        .matchMedia('(prefers-color-scheme: dark)').matches;
  }, []);

  return (<>
    <TogglerRoot />
    <StyledPageWrapper {...props} />
  </>);
}

export default PageWrapper;
