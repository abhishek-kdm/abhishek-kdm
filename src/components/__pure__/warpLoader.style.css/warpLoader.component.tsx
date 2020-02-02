import React from 'react';
import './warpLoader.style.css';


interface WarpLoaderProps extends React.HTMLAttributes<HTMLSpanElement> { }
 
const WarpLoader: React.FC<WarpLoaderProps> = (props) => {
  const classes = ['warploader']
    .concat(props.className ? props.className : []);

  return (<>
    <span className={classes.join(' ')}>
      <small>{'Warping In'}</small>
    </span>
  </>);
}
 
export default WarpLoader;
