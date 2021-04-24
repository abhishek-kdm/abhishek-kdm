import React, { useContext, useState, useCallback } from 'react';
import StyledFile, { FileName } from './file.style';

import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DesktopStateContext } from '../../../Context';
import { newPoint, Open } from '../../../Utils';

type SpanAttributes = React.HTMLAttributes<HTMLSpanElement>;
type FileMixinProps = { Svg?: React.FC, name: string, faIcon?: IconProp };

const FileMixin: React.FC<FileMixinProps> = ({ Svg, name, faIcon }) => {
  return (<>
    {Svg ? <Svg /> : (<FontAwesomeIcon icon={faIcon || faFileAlt} />)}
    <FileName>{name}</FileName>
  </>);
}

type FileOnlyProps = FileMixinProps & SpanAttributes;

const DesktopgableFile: React.FC<FileOnlyProps> = ({ Svg, faIcon, ...props }) => {
  const [start, setStart] = useState<Point>(newPoint());
  const [transform, setTransform] = useState<Point>(newPoint());

  return (<>
    <StyledFile {...props }
      style={{ transform: `translate3d(${transform.x}px, ${transform.y}px, 0px)` }}
      onDragStart={({ pageX, pageY }) => { setStart({ x: pageX, y: pageY }); }}
      onDragEnd={({ pageX, pageY }) => {
        setTransform(({ x, y }) => ({ x: x + pageX - start.x, y: y + pageY - start.y }));
      }}
    >
      <FileMixin name={props.name} faIcon={faIcon} Svg={Svg} />
    </StyledFile>
  </>);
}

const NonDesktopgableFile: React.FC<FileOnlyProps> = ({ Svg, faIcon, ...props }) => {
  return (<>
    <StyledFile {...props }>
      <FileMixin name={props.name} faIcon={faIcon} Svg={Svg} />
    </StyledFile>
  </>);
}

export type FileProps = FileOnlyProps & Partial<WindowAttributes>;

const File: React.FC<FileProps> = ({ children, windowType, ...props }) => {
  const { updateWindowState } = useContext(DesktopStateContext) as DesktopState;

  const openWindow = useCallback(() => {
    updateWindowState((state) => (props?.windowId ? {
      ...state,
      windows: Open(props.windowId, state.windows)
        ? state.windows
        : [
            ...state.windows,
            {
              children,
              windowId: props.windowId,
              windowType: windowType || 'file',
              name: props.name,
            }
        ]
    } : state));
  }, [updateWindowState, children, windowType, props]);

  if (props.windowId) {
    props.onDoubleClick = openWindow;
    props.onKeyPress = (e) => e.key.toLowerCase() === 'enter' && openWindow();
  }
  props.tabIndex = 0;

  return props.draggable ? <DesktopgableFile {...props} /> : <NonDesktopgableFile {...props} />;
}

export default File;

