type Race = 'terran' | 'protoss' | 'zerg';

interface RaceThemeProps {
  patternColor: string
  backgroundColor: string
  logo: React.FC<LogoProps>
}

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

type Flavor = 'success' | 'danger' | 'info' | 'warning';

type Maybe<T> = T | null;
type Word = string | number;
type Void = () => void
