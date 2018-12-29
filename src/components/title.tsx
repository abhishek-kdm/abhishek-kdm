import * as React from 'react';

interface ITitleProps {
  children?: JSX.Element[],
};


const PageTitle = (props: ITitleProps): JSX.Element => (
  <div id='page-title' className={'container'}>
    {props.children}
  </div>
)

export default PageTitle;
