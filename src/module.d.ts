type Theme = 'terran' | 'protoss' | 'zerg';

interface NavbarItem {
  label: string
  component: React.FunctionComponent
}

interface LogoProps extends React.HTMLAttributes<SVGElement> {
  color?: string
  asImage?: boolean
}

/** orientation of the warpgate doors. */
type Orientation = 'horizontal' | 'vertical';

type DoorPosition = 'left' | 'right' | 'top' | 'bottom';

type Maybe<T> = T | null;
type Word = string | number;
type Void = () => void
