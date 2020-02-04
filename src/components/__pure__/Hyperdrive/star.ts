type Dimensions = { width: number, height: number };
type Coordinates = { cx: number, cy: number };


export const randInt = (lower: number, upper: number) => Math
  .floor(Math.random() * (upper - lower + 1)) + lower;


export default class Star {

  x!: number;
  y!: number;

  // previous starting coordinates.
  px!: number;
  py!: number;
  // delat (next starting coordinates).
  dx!: number;
  dy!: number;

  speed!: number;
  acceleration!: number;

  color!: string;

  starOffset!: number;

  constructor(dimensions: Dimensions, coordinates: Coordinates) {
    this.setup(dimensions, coordinates);
  }

  setup({ width, height }: Dimensions, { cx, cy }: Coordinates) {
    this.starOffset = Math.max(width, height) * .025;

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

    this.px = this.x;
    this.py = this.y;

    this.speed = 0;
    this.dx = (this.x - (width / 2)) * this.speed;
    this.dy = (this.y - (height / 2)) * this.speed;
    this.acceleration = randInt(0.0005, 0.001);

    // this.color = `hsl(${randInt(200, 275)}, 100%, ${randInt(50, 80)}%)`;
  }

  update({ cx, cy }: Coordinates) {
    this.dx = (this.x - cx) * this.speed;
    this.dy = (this.y - cy) * this.speed;
    this.speed += this.acceleration;

    this.px = this.x;
    this.py = this.y;

    this.x += this.dx;
    this.y += this.dy;
  }

  dead({ width, height }: Dimensions) {
    return this.px > width || this.px < 0 || this.py > height || this.py < 0;
  }

}
