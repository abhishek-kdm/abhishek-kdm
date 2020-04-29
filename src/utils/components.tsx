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
 

export const withLazy: (c: React.FC) => React.FC<{}> = (Child) => {
  return () => (
    <Suspense fallback={<Loader />}>
      <Child />
    </Suspense>
  );
}

