import React from 'react';

const InfoBox = (props) => {
	
	const style = {
		...props.style,
		animation: props.animate ? '.7s ease-out 0s 1 vintage-display' : '',
	}

	return (
		<div style={style} className="info-box">
			<span className='info-head'>
				<span className='info-prompt'>
					{'root@root~:'}&nbsp;
				</span>
				
				<span className='info-title'>{ props.title } </span>

				<span className='blinking'>{'_'}</span>
			</span>

			<div className="container-fluid" style={{ margin: '1rem auto' }}>
				{props.children}
			</div>

		</div>
	)
}

export default InfoBox;