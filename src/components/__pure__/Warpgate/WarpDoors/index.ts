import { HorizontalDoor, VerticalDoor } from './terran.warpdoors';
import { ORIENTATION } from '../../../../configs';

export interface WarpDoorProps extends React.HTMLAttributes<SVGElement> {
  position: DoorPosition
}

type GetWarpDoor = (
  race: Race,
  orientation: Orientation
) => { Component: React.FC<WarpDoorProps>, attrs: WarpDoorProps }[]

export const getWarpDoor: GetWarpDoor = (race, orientation) => {
  switch (race) {
    default:
      switch (orientation) {
        case ORIENTATION.horizontal: return [
          { Component: HorizontalDoor, attrs: { position: 'left' } },
          { Component: HorizontalDoor, attrs: { position: 'right' } },
        ];
        case ORIENTATION.vertical: return [
          { Component: VerticalDoor, attrs: { position: 'top' } },
          { Component: VerticalDoor, attrs: { position: 'bottom' } },
        ];
        default: return [
          { Component: HorizontalDoor, attrs: { position: 'left' } },
          { Component: HorizontalDoor, attrs: { position: 'right' } },
          { Component: VerticalDoor, attrs: { position: 'top' } },
          { Component: VerticalDoor, attrs: { position: 'bottom' } },
        ];
      }
  }
}

