import React from 'react';

import InfoBox from './infoBox';
import ModalBox from './modalBox';
import Loader from './loader';

export const GitModal = (props) => {
  return (
    <ModalBox dimmness={props.dimmness} show={props.show} closeFunc={props.closeFunc}>

      <InfoBox animate={true} style={{ height: '250px' }}
        title={<a target='_blank' href={props.githubUserLink}>{ props.githubUserLink }</a>}>

        <Loader size='sm' show={props.loaderShow}>
          <span className="blinking">{'Loading github repos...'}</span>
        </Loader>

        {props.children}

      </InfoBox>

    </ModalBox>
  )
}

export const PageLoadingModal = (props) => {
  return (
    <ModalBox dimmness={props.dimmness} show={props.show}>
      <Loader size='lg' show={props.loaderShow}>
        <span className="blinking">{'Fetching User Data...'}</span>
      </Loader>
    </ModalBox>
  )
}
