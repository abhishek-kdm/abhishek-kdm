type Theme = 'dark' | 'light';

interface NavbarItem {
  label: string
  component: any
}

// orientation of the warpgate doors.
type Orientation = 'horizontal' | 'vertical' | undefined;

// states for the warpgates and hyperdrive;
type WarpState = 'warpin' | 'explore';
