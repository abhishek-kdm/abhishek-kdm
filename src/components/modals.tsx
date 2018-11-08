import * as React from 'react';

import InfoBox from './infoBox';
import ModalBox from './modalBox';
import Loader from './loader';

interface IGitModalProps {
	dimmness?: string,
	show: boolean,
	vintage?: boolean,
	loaderShow?: boolean,
	closeFunc?: () => void,
	githubUserLink?: string,
	children?: React.ReactNode,
};

export const GitModal = (props: IGitModalProps) => {
	return (
		<ModalBox dimmness={props.dimmness} show={props.show} closeFunc={props.closeFunc}>

			<InfoBox animate={true} style={{ height: '250px' }} vintage={props.vintage}
				title={<a target='_blank' href={props.githubUserLink}>{ props.githubUserLink }</a>}>

				<Loader size='sm' show={props.loaderShow}>
					<span className="blinking">{'Loading github repos...'}</span>
				</Loader>

				{props.children}

			</InfoBox>

		</ModalBox>
	)
}

interface IPageLoadingProps {
	dimmness?: string,
	show: boolean,
	loaderShow?: boolean,
};

export const PageLoadingModal = (props: IPageLoadingProps) => {
	return (
		<ModalBox dimmness={props.dimmness} show={props.show}>
			<Loader size='lg' show={true}>
				<span className="blinking">{'Loading...'}</span>
			</Loader>
		</ModalBox>
	)
}
