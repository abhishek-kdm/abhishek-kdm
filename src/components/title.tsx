import * as React from 'react';

interface ITitleProps {
	children?: React.ReactNode,
};
interface ITitleState {};

export default class PageTitle extends React.Component<ITitleProps, ITitleState> {
	constructor(props: ITitleProps) { super(props); }
	render() {
		return (
			<div id='page-title' className={'container'}>
			
				{this.props.children}
				
			</div>
		)
	}
}