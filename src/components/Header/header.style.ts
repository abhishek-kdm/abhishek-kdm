import styled from 'styled-components';
import { prepareLaunch, launchReady } from './header.animations';


const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: .7rem 0;
  margin-bottom: 5vh;

  @media (max-width: 576px) {
    flex-direction: column;
    margin-bottom: 2vh;
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

export const RocketImg = styled.img`
  height: 45px;
  cursor: pointer;
  animation: ${prepareLaunch} 3.5s ease-in infinite;

  &:hover {
    animation: ${launchReady} .35s ease-in infinite;
  }

`;

export default StyledHeader;
