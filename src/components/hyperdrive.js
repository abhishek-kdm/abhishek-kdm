const randI = (min, max = min + (min = 0)) => (Math.random() * (max - min) + min) | 0;
const randHSLA = (h, h1, s = 100, s1 = 100, l = 50, l1 = 50, a = 1, a1 = 1) => `hsla(${randI(h, h1) % 360},${randI(s, s1)}%,${randI(l, l1)}%,${rand(a, a1)})`

const rand = (min = 1, max = min + (min = 0)) => Math.random() * (max - min) + min;
const doFor = (count, cb) => { var i = 0; while (i < count && cb(i++) !== true); }; // the ; after while loop is important don't remove

const sCurve = (v, p) => (2 / (1 + Math.pow(p, -v))) - 1;

const bubbleArray = () => {
	var items = [];
	var count = 0;
	return {
		clear() {
			items = [];
			count = 0;
		},
		update() {
			var head, tail;
			head = tail = 0;
			while (head < count) {
				if (items[head].update() === false) { head += 1 }
				else {
					if (tail < head) {
						const temp = items[head];
						items[head] = items[tail];
						items[tail] = temp;
					}
					head += 1;
					tail += 1;
				}
			}
			return count = tail;
		},

		draw(ctx) {
			var items = this.getItems();
			var count = this.getCount();
			var i = 0;
			while (i < count) {
				items[i++].draw(ctx)
			}
		},

		callEach(name) { var i = 0; while (i < count) { if (items[i++][name]() === true) { break } } },
		each(cb) { var i = 0; while (i < count) { if (cb(items[i], i++) === true) { break } } },
		next() { if (count < items.length) { return items[count++] } },
		add(item) {
			if (count === items.length) {
				items.push(item);
				count++;
			} else {
				items.push(items[count]);
				items[count++] = item;
			}
			return item;
		},
		getCount() { return count },
		getItems() { return items },
	}
}

function Point(pos) {
	const canvas = document.getElementById("hyperdrive");
	var cw = canvas.width / 2;
	var ch = canvas.height / 2;
	if (pos) {
		this.x = pos.x;
		this.y = pos.y;
		this.dead = false;
	}
	else {
		this.x = 0;
		this.y = 0;
		this.dead = true;
	}
	this.alpha = 0;
	var x = this.x - cw;
	var y = this.y - ch;
	this.dir = Math.atan2(y, x);
	this.distStart = Math.sqrt(x * x + y * y);
	this.speed = rand(0.01, 1);
	this.col = randHSLA(220, 280, 100, 100, 50, 100);
	this.dx = Math.cos(this.dir) * this.speed;
	this.dy = Math.sin(this.dir) * this.speed;
}

Point.prototype = {
	reset: Point,
	update() {
		this.speed *= hyperSpeed;
		this.x += Math.cos(this.dir) * this.speed;
		this.y += Math.sin(this.dir) * this.speed;
		var x = this.x - cw;
		var y = this.y - ch;
		this.alpha = (Math.sqrt(x * x + y * y) - this.distStart) / (diag * 0.5 - this.distStart);
		if (this.alpha > 1 || this.x < 0 || this.y < 0 || this.x > w || this.h > h) this.dead = true;
		return !this.dead;
	},
	draw() {
		ctx.strokeStyle = this.col;
		ctx.globalAlpha = 0.25 + this.alpha * 0.75;
		ctx.beginPath();
		ctx.lineTo(this.x - this.dx * this.speed, this.y - this.dy * this.speed);
		ctx.lineTo(this.x, this.y);
		ctx.stroke();
	}
}

const maxStarCount = 400;
let hyperSpeed = 1.1;
p = {x: 0, y: 0};
alphaZero = sCurve(1, 2);

canvas = document.getElementById('hyperdrive');
ctx = canvas.getContext("2d");
w = canvas.width;
h = canvas.height;
cw = w / 2;
ch = h / 2;
diag = Math.sqrt(w * w + h * h)

const points = bubbleArray();

function resizeCanvas() {
	points.clear();
	canvas.width = innerWidth;
	canvas.height = innerHeight;
	w = canvas.width;
	h = canvas.height;
	cw = w / 2;
	ch = h / 2;
	diag = Math.sqrt(w * w + h * h)
}


function spawnPoint(pos) {
	var p = points.next();
	p = points.add(new Point(pos))
	if (p === undefined) { p = points.add(new Point(pos)) }
	p.reset(pos);
}


function mainLoop(time) {
	var startTime;

	if (startTime === undefined) { startTime = time; }

	if (w !== innerWidth || h !== innerHeight) { resizeCanvas(); }

	// if (/* some condition */) {
	// 	if (hyperSpeed < 1.85) {
	// 		hyperSpeed += .01;
	// 	}
	// } else {
		if (hyperSpeed > 1.5) {
			hyperSpeed -= .01;
		} else if (hyperSpeed > 1.1) {
			hyperSpeed -= .005;
		}
	// }

	var hs = sCurve(hyperSpeed, 2);
	ctx.globalAlpha = 1;
	ctx.setTransform(1, 0, 0, 1, 0, 0);

	ctx.globalAlpha = 1 - (hs - alphaZero) * 2;

	ctx.fillRect(0, 0, w, h);

	var sx = (hyperSpeed - 1) * cw * 0.1;
	var sy = (hyperSpeed - 1) * ch * 0.1;


	ctx.globalAlpha = (hs - alphaZero) * 2;
	ctx.globalCompositeOperation = "lighter";

	ctx.drawImage(canvas, -sx, -sy, w + sx * 2, h + sy * 2)
	ctx.drawImage(canvas, -sx / 2, -sy / 2, w + sx, h + sy)
	ctx.globalCompositeOperation = "source-over";

	if (points.getCount() < maxStarCount) {
		var cent = (hyperSpeed - 1) * 0.5;
		doFor(10, () => {
			p.x = rand(cw * cent, w - cw * cent);
			p.y = rand(ch * cent, h - ch * cent);
			spawnPoint(p);
		})
	}

	ctx.lineWidth = 2 + hs * 2;
	ctx.lineCap = "round";

	points.update();
	points.draw(ctx);
	ctx.globalAlpha = 1;

	requestAnimationFrame(mainLoop);
}
requestAnimationFrame(mainLoop);