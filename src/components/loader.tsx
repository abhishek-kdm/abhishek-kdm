import * as React from 'react';

interface ILoaderProps {
	show?: boolean,
	size?: string,
	children?: React.ReactNode,
};

const Loader = (props: ILoaderProps) => {
	return (
		<div className="loader-wrapper"
			style={{ display: props.show ? 'flex' : 'none' }}>

			<div className={`loader loader-${props.size || 'sm'}`}></div>
			&nbsp;&nbsp;&nbsp;
			<span>{props.children}</span>

		</div>
	)
}

export default Loader;