import React from 'react';
import StyledHeart, { HeartContainer } from './heart.style';


interface HeartProps { }
 
const Heart: React.FC<HeartProps> = () => (<>
  <HeartContainer>
    <StyledHeart />
  </HeartContainer>
</>);
 
export default Heart;
