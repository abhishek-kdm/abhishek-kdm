import React, { Suspense } from 'react';
import styled from 'styled-components';

import Loader from '../components/__pure__/Loader/loader.component';


interface AnchorProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> { }

export const Anchor: React.SFC<AnchorProps> = ({ children, ...rest }) => (
  <a {...rest} target='_blank' rel="noopener noreferrer">
    {children}
  </a>
);

type LabelProps = { [name in Flavor]?: Maybe<boolean> };

export const Label = styled.label<LabelProps>`
  background-color: ${(props) => {
    if (props.success) return 'green';
    if (props.danger) return 'red';
    if (props.info) return 'dodgerblue';
    return 'yellow';
  }};
  color: ${(props) => {
    if (props.warning) return 'black';
    return 'white';
  }};
  padding: 5px 25px;
  width: 50%;
  border-radius: 3px;
  align-self: center;
`;


interface CspanProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  color: string
}
/**
 * span element with shorthand color styling.
 */
export const Cspan: React.SFC<CspanProps> = ({ color, style, ...rest }) => {
  if (color != null) {
    style = style ? { ...style, color } : { color };
  }
  return <span style={style} {...rest} />;
}

export const StillInDevelopment: React.FC = () => {
  return (<>
    <div style={{
      position: 'absolute',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <span style={{
        padding: '5px 10px',
        color: 'white',
        backgroundColor: 'dodgerblue',
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px',
        width: '20em',
        alignSelf: 'center',
        fontSize: '11px',
        display: 'flex',
        justifyContent: 'center',
      }}>
        &#x26A0;&nbsp;&nbsp;&nbsp;{'Still in development!.'}
      </span>
    </div>
  </>);
}

export const withLazy: (c: React.FC) => React.FC<{}> = (Child) => {
  return () => (
    <Suspense fallback={<Loader />}>
      <Child />
    </Suspense>
  );
}

