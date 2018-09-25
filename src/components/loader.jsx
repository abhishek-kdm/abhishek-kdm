import React from 'react';

const Loader = (props) => {
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