import React from 'react';
import './loader.style.css';


interface LoaderProps { }
 
const Loader: React.FC<LoaderProps> = () => {
  return (
    <div className='loader'>
      <span className='spinner'></span>
    </div>
  );
}

export default Loader;
