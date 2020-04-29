import React from 'react';
import './floatingButton.style.css';


interface FloatButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> { }
 
const FloatButton: React.FC<FloatButtonProps> = ({
  ...rest
}) => (
  <button
    {...rest}
    type={'button'}
    className={'floating'}
  />
);
 
export default FloatButton;
