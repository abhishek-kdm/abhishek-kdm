import * as React from 'react';


const PageTitle = (props: TitleProps): JSX.Element => (<>
  <div id='page-title' className={'container'}>
    {props.children}
  </div>
</>);

export default PageTitle;
