import React from 'react';
import { Consumer } from '../context';

const bubbleArray = () => {
  var items = [];
  var count = 0;
  return {
    clear() {
      items = [];
      count = 0;
    },
    update(cc, hyperspeed) {
      var head, tail;
      head = tail = 0;
      while (head < count) {
        if (items[head].update(cc, hyperspeed) === false) { head += 1 }
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


const randI = (min, max = min + (min = 0)) => (Math.random() * (max - min) + min) | 0;
const rand = (min = 1, max = min + (min = 0)) => Math.random() * (max - min) + min;
const doFor = (count, cb) => { var i = 0; while (i < count && cb(i++) !== true); }; // the ; after while loop is important don't remove

const sCurve = (v, p) => (2 / (1 + Math.pow(p, -v))) - 1;
const randHSLA = (h, h1, s = 100, s1 = 100, l = 50, l1 = 50, a = 1, a1 = 1) => `hsla(${randI(h, h1) % 360},${randI(s, s1)}%,${randI(l, l1)}%,${rand(a, a1)})`

class Point {
  constructor(pos) {
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
}

Point.prototype = {
  reset: Point,
  update({ w, h, cw, ch, diag }, hyperSpeed) {
    this.speed *= hyperSpeed;
    this.x += Math.cos(this.dir) * this.speed;
    this.y += Math.sin(this.dir) * this.speed;
    var x = this.x - cw;
    var y = this.y - ch;
    this.alpha = (Math.sqrt(x * x + y * y) - this.distStart) / (diag * 0.5 - this.distStart);
    if (this.alpha > 1 || this.x < 0 || this.y < 0 || this.x > w || this.h > h) this.dead = true;
    return !this.dead;
  },
  draw(ctx) {
    ctx.strokeStyle = this.col;
    ctx.globalAlpha = 0.25 + this.alpha * 0.75;
    ctx.beginPath();
    ctx.lineTo(this.x - this.dx * this.speed, this.y - this.dy * this.speed);
    ctx.lineTo(this.x, this.y);
    ctx.stroke();
  }
}

export default class HyperDrive extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      canvasConfigs: {},
      maxStarCount: 400,
      hyperSpeed: 1.1,
    };
    
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
    const canvasConfigs = {
      w, h,
      cw: w / 2,
      ch: h / 2,
      diag: Math.sqrt(w * w + h * h),
    };
    this.setState({ canvasConfigs },
    () => {
      this.points = bubbleArray();

      this.mainLoop();
      requestAnimationFrame(this.mainLoop);
    });

  }

  resizeCanvas() {
    this.points.clear();
    this.canvas.width = innerWidth;
    this.canvas.height = innerHeight;
    const w = this.canvas.width;
    const h = this.canvas.height;
    const canvasConfigs = {
      w, h,
      cw: w / 2,
      ch: h / 2,
      diag: Math.sqrt(w * w + h * h),
    }
    this.setState({ canvasConfigs });
  }


  spawnPoint(pos) {
    var p = this.points.next();
    p = this.points.add(new Point())
    if (p === undefined) { p = this.points.add(new Point()) }
    p.reset(pos);
  }

  mainLoop(time) {
    const { w, h, cw, ch } = this.state.canvasConfigs;
    var startTime;

    if (startTime === undefined) { startTime = time; }

    if (w !== innerWidth || h !== innerHeight) { this.resizeCanvas(); }

    if (this.context.state.hyperdrive) {
      if (this.state.hyperSpeed < 1.85) {
        this.setState({ hyperSpeed: this.state.hyperSpeed += 0.01 });
      }
    } else {
      if (this.state.hyperSpeed > 1.5) {
        this.setState({ hyperSpeed: this.state.hyperSpeed -= 0.01 });
      } else if (this.state.hyperSpeed > 1.1) {
        this.setState({ hyperSpeed: this.state.hyperSpeed -= 0.005 });
      }
    }

    var hs = sCurve(this.state.hyperSpeed, 2);
    this.ctx.globalAlpha = 1;
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);


    this.ctx.globalAlpha = 1 - (hs - this.alphaZero) * 2;



    this.ctx.fillRect(0, 0, w, h);

    var sx = (this.state.hyperSpeed - 1) * cw * 0.1;
    var sy = (this.state.hyperSpeed - 1) * ch * 0.1;


    this.ctx.globalAlpha = (hs - this.alphaZero) * 2;
    this.ctx.globalCompositeOperation = "lighter";

    this.ctx.drawImage(this.canvas, -sx, -sy, w + sx * 2, h + sy * 2)
    this.ctx.drawImage(this.canvas, -sx / 2, -sy / 2, w + sx, h + sy)
    this.ctx.globalCompositeOperation = "source-over";

    if (this.points.getCount() < this.state.maxStarCount) {
      var cent = (this.state.hyperSpeed - 1) * 0.5;
      doFor(10, () => {
        this.p.x = rand(cw * cent, w - cw * cent);
        this.p.y = rand(ch * cent, h - ch * cent);
        this.spawnPoint(this.p);
      })
    }

    this.ctx.lineWidth = 2 + hs * 2;
    this.ctx.lineCap = "round";

    this.points.update(this.state.canvasConfigs, this.state.hyperSpeed);
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
