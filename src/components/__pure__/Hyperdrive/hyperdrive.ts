import Star from './star';


export default class Hyperdrive {

  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  width!: number;
  height!: number;

  cx!: number;
  cy!: number;

  keyRegister!: Set<number>;

  hyperdriveTimeout: any;

  pilotSpeed!: number;

  starField!: Star[];
  colors!: string[];

  speed: number = .1;
  static ACCELERATION: number = 1.04;
  static DECELERATION: number = 1.004;
  static MAX_SPEED: number = 1.15;
  static MIN_SPEED: number = .1;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;

    this.init();
  }

  init() {
    this.colors = [
      'hsl(200, 100%, 50%)',
      'hsl(225, 100%, 60}%)',
      'hsl(250, 100%, 70%)',
      'hsl(275, 100%, 80%)',
    ];

    this.keyRegister = new Set();
    this.pilotSpeed = 10;

    this.resetCanvas();

    window.addEventListener('keydown', (e) => this.handleKeyRegister('add', e));
    window.addEventListener('keyup', (e) => this.handleKeyRegister('delete', e));
    window.addEventListener('resize', this.resetCanvas);

    let i = 0;
    this.starField = [];
    const totalStars = (this.width + this.height) / 5;

    for (let c = 0; c < this.colors.length; c++ /* kappa */) {
      const color = this.colors[c];
      while (i < (totalStars / this.colors.length) * (c + 1)) {
        const star = new Star(this.dimensions, this.coordinates);
        star.color = color;
        this.starField.push(star);
        i++;
      }
    }

    // handling offsets.
    while (i < totalStars) {
      const star = new Star(this.dimensions, this.coordinates);
      star.color = this.colors[0];
      this.starField.push(star);
    }

    window.requestAnimationFrame(this.mainloop);
  }

  fillScreen() {
    const alpha = Math.max(Hyperdrive.MAX_SPEED - this.speed + .075, 0);

    this.ctx.fillStyle = `rgba(0, 0, 0, ${alpha})`;
    this.ctx.fillRect(0, 0, this.width, this.height);
  }

  resetCanvas = () => {
    this.canvas.width = this.width = window.innerWidth;
    this.canvas.height = this.height = window.innerHeight;

    this.cx = this.canvas.width / 2;
    this.cy = this.canvas.height / 2;

    this.fillScreen();
  }


  jumpToHyperSpace = () => {
    if (this.keyRegister.has(32)) {
      this.hyperdriveTimeout != null && clearTimeout(this.hyperdriveTimeout);
      if (this.speed < Hyperdrive.MAX_SPEED) {
        this.speed *= Hyperdrive.ACCELERATION;
      }
    }
  }

  jumpOutOfHyperSpace = () => {
    if (this.keyRegister.has(32)) return;
    const f = () => {
      if (this.speed <= Hyperdrive.MIN_SPEED) { return; }

      this.speed /= Hyperdrive.DECELERATION;
      this.hyperdriveTimeout = setTimeout(f, 30);
    };
    f();
  }


  pilot = () => {
    let xspeed, yspeed;
    if (this.width > this.height) {
      const ratio = this.width / this.height;
      xspeed = this.pilotSpeed * ratio;
      yspeed = this.pilotSpeed;
    } else {
      const ratio = this.height / this.width;
      xspeed = this.pilotSpeed;
      yspeed = this.pilotSpeed * ratio;
    }

    if (this.keyRegister.has(37)) {
      this.cx = Math.max(0, this.cx - xspeed);
    }

    if (this.keyRegister.has(38)) {
      this.cy = Math.max(0, this.cy - yspeed);
    }

    if (this.keyRegister.has(39)) {
      this.cx = Math.min(this.width, this.cx + xspeed);
    }

    if (this.keyRegister.has(40)) {
      this.cy = Math.min(this.height, this.cy + yspeed);
    }
  }

  keyPressEventHandlers = [
    this.jumpToHyperSpace,
    this.jumpOutOfHyperSpace,
    this.pilot,
  ]


  handleKeyRegister(func: any, { which }: KeyboardEvent) {
    if (func === 'add')
      this.keyRegister.add(which);
    if (func === 'delete')
      this.keyRegister.delete(which);
    this.keyPressEventHandlers.forEach((f) => f());
  }

  applyUpdate() {
    let i = 0;

    this.ctx.lineCap = 'round';
    this.ctx.lineWidth = 2;

    for (const color of this.colors) {
      this.ctx.beginPath();
      this.ctx.strokeStyle = color;

      while (i < this.starField.length && this.starField[i].color === color) {
        const star = this.starField[i];

        star.update(this.coordinates);

        if (star.dead(this.dimensions)) {
          star.setup(this.dimensions, this.coordinates);
          star.color = color;
        }

        this.ctx.moveTo(star.px, star.py);
        this.ctx.lineTo(star.x, star.y)
        i++;
      }
      this.ctx.stroke();
    }
  }

  mainloop = () => {
    this.fillScreen();

    this.applyUpdate();
    window.requestAnimationFrame(this.mainloop);
  }

  get dimensions() { return { width: this.width, height: this.height }; }

  get coordinates() { return { cx: this.cx, cy: this.cy }; }
}

