import styled from 'styled-components';
import { prepareLaunch, launchReady } from './header.animations';

import { Container } from '../../styles/global.style';


const StyledHeader = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 20px;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const HeaderTitle = styled.h1`
  flex-grow: 1;
  font-weight: 900;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 576px) {
    margin-block-start: 0.4em;
    margin-block-end: 0.4em;
  }
`;

export const Brand = styled.label`
  font-family: 'Rock Salt';
  text-shadow: 2px 2px 50px var(--color-primary);
  position: relative;

  ::after {
    content: 'lycuid';
    font-family: 'Rock Salt';
    background: linear-gradient(transparent 42.5%, var(--color-primary) 100%);

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    position: absolute;
    left: 0;
    top: .7em;
    transform: rotateX(155deg);
  }
`;

export const RocketImg = styled.img`
  height: 45px;
  cursor: pointer;
  animation: ${prepareLaunch} 3.5s ease-in infinite;

  &:hover {
    animation: ${launchReady} .35s ease-in infinite;
  }

`;

export default StyledHeader;
