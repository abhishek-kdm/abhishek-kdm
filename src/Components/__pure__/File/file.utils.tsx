import React, { useState } from 'react';
import StyledFile, { FileName } from './file.style';

import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { newPoint } from '../../../Utils';

type SpanAttributes = React.HTMLAttributes<HTMLSpanElement>;
type FileMixinProps = { Svg?: React.FC; name: string; faIcon?: IconProp };

export const FileMixin: React.FC<FileMixinProps> = ({ Svg, name, faIcon }) => {
  return (
    <>
      {Svg ? <Svg /> : <FontAwesomeIcon icon={faIcon || faFileAlt} />}
      <FileName>{name}</FileName>
    </>
  );
};

export type FileOnlyProps = FileMixinProps & SpanAttributes;

export const DraggableFile: React.FC<FileOnlyProps> = ({
  Svg,
  faIcon,
  ...props
}) => {
  const [start, setStart] = useState<Point>(newPoint());
  const [transform, setTransform] = useState<Point>(newPoint());

  return (
    <>
      <StyledFile
        {...props}
        style={{
          transform: `translate3d(${transform.x}px, ${transform.y}px, 0px)`,
        }}
        onDragStart={({ pageX, pageY }) => {
          setStart({ x: pageX, y: pageY });
        }}
        onDragEnd={({ pageX, pageY }) => {
          setTransform(({ x, y }) => ({
            x: x + pageX - start.x,
            y: y + pageY - start.y,
          }));
        }}
      >
        <FileMixin name={props.name} faIcon={faIcon} Svg={Svg} />
      </StyledFile>
    </>
  );
};

export const NonDraggableFile: React.FC<FileOnlyProps> = ({
  Svg,
  faIcon,
  ...props
}) => {
  return (
    <>
      <StyledFile {...props}>
        <FileMixin name={props.name} faIcon={faIcon} Svg={Svg} />
      </StyledFile>
    </>
  );
};
