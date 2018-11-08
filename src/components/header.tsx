import * as React from 'react';

interface IHeaderProps {};
interface IHeaderState {};

export default class PageHeader extends React.Component<IHeaderProps, IHeaderState> {
	constructor(props: any) {
		super(props);
	}

	render() {
		return (
			<div id='page-header' className={'container'} />
		)
	}
}

