import React, { Suspense } from 'react';

import Loader from '../components/__pure__/Loader/loader.component';


interface AnchorProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> { }
 
export const Anchor: React.SFC<AnchorProps> = ({ children, ...rest }) => (
  <a {...rest} target='_blank' rel="noopener noreferrer">
    {children}
  </a>
);


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
        width: '150px',
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

