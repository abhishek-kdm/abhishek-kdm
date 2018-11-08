import * as React from 'react';

interface IModalBoxProps {
	show?: boolean,
	dimmness?: string,
	closeFunc?: () => void,
	children?: React.ReactNode,
};
interface IModalBoxState {};

export default class ModalBox extends React.Component<IModalBoxProps, IModalBoxState> {
	constructor(props: IModalBoxProps) {
		super(props);
		this.handleClose = this.handleClose.bind(this);
	}

	handleClose = (e: React.MouseEvent<HTMLElement>) => (
		(e.target === e.currentTarget) && this.props.closeFunc()
	)

	render() {

		const style = Object.assign(
			{},
			{ backgroundColor: `rgba(0, 0, 0, ${this.props.dimmness || '.6'})` },
			{ display: this.props.show ? 'block' : 'none' }
		);

		return (
			<div onClick={this.handleClose} style={style} className="modal">

				<div className="modal-content">
					{this.props.children}
				</div>
				
			</div>
		)
	}
}