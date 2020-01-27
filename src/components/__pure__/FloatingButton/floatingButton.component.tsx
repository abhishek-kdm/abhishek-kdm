import React from 'react';
import './floatingButton.style.css';


interface FloatButtonProps extends React.HTMLAttributes<HTMLButtonElement> { }
 
const FloatButton: React.SFC<FloatButtonProps> = (props) => (
  <button {...props} className={'floating'} type={'button'} />
);
 
export default FloatButton;
