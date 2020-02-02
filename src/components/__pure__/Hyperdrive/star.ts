type Dimensions = { width: number, height: number };
type Coordinates = { cx: number, cy: number };


export const randInt = (lower: number, upper: number) => Math
  .floor(Math.random() * (upper - lower + 1)) + lower;


export default class Star {

  x!: number;
  y!: number;
  dx!: number;
  dy!: number;

  speed!: number;
  acceleration!: number;

  tailLength!: number;
  color!: string;

  starOffset!: number;

  constructor(dimensions: Dimensions) {
    this.setup(dimensions);
  }

  setup({ width, height }: Dimensions) {
    const cx = width / 2, cy = height / 2;
    this.starOffset = Math.max(width, height) * .05;

    this.x = randInt(0, width);
    this.y = randInt(0, height);
    while (
      (this.x <= (cx + this.starOffset) &&
        this.x >= (cx - this.starOffset)) &&
      (this.y <= (cy + this.starOffset) &&
        this.y >= (cy - this.starOffset))) {
      this.x = randInt(0, width);
      this.y = randInt(0, height);
    }

    this.speed = 0;
    this.dx = (this.x - (width / 2)) * this.speed;
    this.dy = (this.y - (height / 2)) * this.speed;
    this.acceleration = randInt(0.0005, 0.001);

    this.tailLength = 0;
    this.color = `hsl(${randInt(200, 275)}, 100%, ${randInt(50, 80)}%)`;
  }

  update({ cx, cy }: Coordinates) {
    this.dx = (this.x - cx) * this.speed;
    this.dy = (this.y - cy) * this.speed;
    this.tailLength += this.speed * 10;
    this.speed += this.acceleration;

    this.x += this.dx;
    this.y += this.dy;
  }

  tail({ cx, cy }: Coordinates) {
    const x1 = cx, y1 = cy, x0 = this.x, y0 = this.y;

    const dx = x1 - x0, dy = y1 - y0;

    const d0 = Math.sqrt((dx * dx) + (dy * dy));
    const d1 = this.tailLength;

    const t = d1 / d0;
    const xt = (((1 - t) * x0) + (t * x1));
    const yt = (((1 - t) * y0) + (t * y1));

    return [xt, yt];
  }


  dead({ width, height }: Dimensions, center: Coordinates) {
    const [x, y] = this.tail(center);
    return x > width || x < 0 || y > height || y < 0;
  }

}
