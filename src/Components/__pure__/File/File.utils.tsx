import React, { useState } from 'react';
import StyledFile, {
  FileIconContainer,
  FileIcon,
  FileName,
} from './File.style';
import { newPoint } from '../../../Utils';

type SpanAttributes = React.HTMLAttributes<HTMLSpanElement>;
type FileMixinProps = Partial<FileWindowAttributes> & {
  SubIcon?: React.FC;
  name: string;
};

export const IconFile: React.FC<React.SVGAttributes<SVGElement>> = (props) => (
  <FileIcon viewBox='-5 -5 110 110' {...props}>
    <path d='M10 0 h60 L90 20 v80 h-80Z' />
    <path d='M70 0 v20 h20' />
  </FileIcon>
);

export const IconDirectory: React.FC<React.SVGAttributes<SVGElement>> = (
  props
) => (
  <FileIcon viewBox='-5 -5 110 110' {...props}>
    <path d='M0 20 h25 l20 10 h55 v70 h-100Z' />
  </FileIcon>
);

const DefaultSubIcon = () => (
  <svg viewBox='-1 -1 12 12'>
    <g stroke='currentColor' strokeWidth={2} fill='none' strokeLinecap='round'>
      <line x1={0} y1={1} x2={10} y2={1} />
      <line x1={0} y1={5} x2={10} y2={5} />
      <line x1={0} y1={9} x2={10} y2={9} />
    </g>
  </svg>
);

export const FileMixin: React.FC<FileMixinProps> = ({
  fileType,
  name,
  SubIcon,
}) => {
  return (
    <>
      <FileIconContainer>
        {fileType == 'dir' ? <IconDirectory /> : (
          <>
            <IconFile />
            <span className='subicon'>
              {SubIcon ? <SubIcon /> : <DefaultSubIcon />}
            </span>
          </>
        )}
      </FileIconContainer>
      <FileName>{name}</FileName>
    </>
  );
};

export type FileOnlyProps = FileMixinProps & SpanAttributes;

export const DraggableFile: React.FC<FileOnlyProps> = ({
  fileType,
  SubIcon,
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
        onDragStart={({ pageX, pageY }) => setStart({ x: pageX, y: pageY })}
        onDragEnd={({ pageX, pageY }) => {
          setTransform(({ x, y }) => ({
            x: x + pageX - start.x,
            y: y + pageY - start.y,
          }));
        }}
      >
        <FileMixin name={props.name} SubIcon={SubIcon} fileType={fileType} />
      </StyledFile>
    </>
  );
};

export const NonDraggableFile: React.FC<FileOnlyProps> = ({
  fileType,
  SubIcon,
  ...props
}) => {
  return (
    <>
      <StyledFile {...props}>
        <FileMixin name={props.name} SubIcon={SubIcon} fileType={fileType} />
      </StyledFile>
    </>
  );
};
