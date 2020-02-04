import React from 'react';
import './floatingButton.style.css';


interface FloatButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  vintage?: boolean
}
 
const FloatButton: React.FC<FloatButtonProps> = ({
  vintage = false,
  ...rest
}) => (
  <button
    {...rest}
    type={'button'}
    className={vintage ? 'floating-vintage' : 'floating'}
  />
);
 
export default FloatButton;
