import React from 'react';
import { Consumer } from '../context';
import { Point, bubbleArray, sCurve, doFor, rand } from '../configs/hyperDriveUtils';

export default class HyperDrive extends React.Component {
	constructor(props) {
		super(props);
		
		this.maxStarCount = 400;
		this.hyperSpeed = 1.1;
		this.p = {x: 0, y: 0};
		this.alphaZero = sCurve(1, 2);

		this.mainLoop = this.mainLoop.bind(this);
		this.spawnPoint = this.spawnPoint.bind(this);
		this.resizeCanvas = this.resizeCanvas.bind(this);
	}


	componentDidMount() {
		this.canvas = document.getElementById('hyperdrive');
		this.ctx = this.canvas.getContext("2d");
		const w = this.canvas.width;
		const h = this.canvas.height;
		this.canvasConfigs = {
			w, h,
			cw: w / 2,
			ch: h / 2,
			diag: Math.sqrt(w * w + h * h),
		};

		this.points = bubbleArray();

		this.mainLoop();
		requestAnimationFrame(this.mainLoop);

	}

	resizeCanvas() {
		this.points.clear();
		this.canvas.width = innerWidth;
		this.canvas.height = innerHeight;
		const w = this.canvas.width;
		const h = this.canvas.height;
		this.canvasConfigs = {
			w, h,
			cw: w / 2,
			ch: h / 2,
			diag: Math.sqrt(w * w + h * h),
		};
	}


	spawnPoint(pos) {
		var p = this.points.next();
		p = this.points.add(new Point())
		if (p === undefined) { p = this.points.add(new Point()) }
		p.reset(pos);
	}

	mainLoop(time) {
		const { w, h, cw, ch } = this.canvasConfigs;
		var startTime;

		if (startTime === undefined) { startTime = time; }

		if (w !== innerWidth || h !== innerHeight) { this.resizeCanvas(); }

		if (this.context.state.hyperdrive) {
			if (this.hyperSpeed < 1.85) {
				this.hyperSpeed += .01;
			}
		} else {
			if (this.hyperSpeed > 1.5) {
				this.hyperSpeed -= .01;
			} else if (this.hyperSpeed > 1.1) {
				this.hyperSpeed -= .005;
			}
		}

		var hs = sCurve(this.hyperSpeed, 2);
		this.ctx.globalAlpha = 1;
		this.ctx.setTransform(1, 0, 0, 1, 0, 0);


		this.ctx.globalAlpha = 1 - (hs - this.alphaZero) * 2;



		this.ctx.fillRect(0, 0, w, h);

		var sx = (this.hyperSpeed - 1) * cw * 0.1;
		var sy = (this.hyperSpeed - 1) * ch * 0.1;


		this.ctx.globalAlpha = (hs - this.alphaZero) * 2;
		this.ctx.globalCompositeOperation = "lighter";

		this.ctx.drawImage(this.canvas, -sx, -sy, w + sx * 2, h + sy * 2)
		this.ctx.drawImage(this.canvas, -sx / 2, -sy / 2, w + sx, h + sy)
		this.ctx.globalCompositeOperation = "source-over";

		if (this.points.getCount() < this.maxStarCount) {
			var cent = (this.hyperSpeed - 1) * 0.5;
			doFor(10, () => {
				this.p.x = rand(cw * cent, w - cw * cent);
				this.p.y = rand(ch * cent, h - ch * cent);
				this.spawnPoint(this.p);
			})
		}

		this.ctx.lineWidth = 2 + hs * 2;
		this.ctx.lineCap = "round";

		this.points.update(this.canvasConfigs, this.hyperSpeed);
		this.points.draw(this.ctx);
		this.ctx.globalAlpha = 1;

		requestAnimationFrame(this.mainLoop);
	}


	render() {
		return (
			<Consumer>
				{
					(context) => {
						this.context = context;
						return <canvas id='hyperdrive' style={this.props.style}></canvas>
					}
				}
			</Consumer>
		)
	}
}
