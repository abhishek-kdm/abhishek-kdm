import * as React from 'react';

import { UtilsContext } from '../context';
import { Loader, InfoBox, ModalBox } from './ui-components';



const RepositoryList = ({ repositories }: Repositories) => {
  const { ok, json, message } = repositories;
  if (!ok) return (<>
    <div style={{ margin: 'auto' }}>
      <code className='danger'>{ message }</code>
    </div>
  </>);

  return (<>
    <ul>{json.map((o: any, i: number) => (
      <li key={ i }>
        <a href={ o.html_url } target='_blank'>{ o.name }</a>
      </li>
    ))}</ul>
  </>);
}


export const GitModal = (props: GitModalProps): JSX.Element => {
  const { userRepos } = React.useContext(UtilsContext);

  return (<>
    <ModalBox dimmness={props.dimmness} show={props.show} closeFunc={props.closeFunc}>

      <InfoBox
        animate={true}
        style={{ height: '250px' }}
        vintage={props.vintage}
        title={
          <a target='_blank' href={props.githubUserLink}>{ props.githubUserLink }</a>
        }>
          <Loader size='sm' show={props.showLoader}>
            <span className="blinking">{'Loading github repos...'}</span>
          </Loader>

          <RepositoryList repositories={userRepos} />
      </InfoBox>

    </ModalBox>
  </>);
}



export const PageLoadingModal = (props: PageLoadingProps): JSX.Element => {
  return (<>
    <ModalBox dimmness={props.dimmness} show={props.show}>
      <Loader size='lg' show={props.showLoader || false}>
        <span className="blinking">{'Loading...'}</span>
      </Loader>
    </ModalBox>
  </>);
}
