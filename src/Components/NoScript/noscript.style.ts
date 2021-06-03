import styled from 'styled-components';
import { Container } from '../../Styles/global.style';

const StyledNoScript = styled.noscript`
  width: 100%;
  height: 100%;
`;

export const Header = styled(Container).attrs({ as: 'header' })`
  display: flex;
  flex-direction: column;
  height: 100%;

  div:first-child {
    flex: 1;
  }
`;

export default StyledNoScript;
