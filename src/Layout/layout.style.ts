import styled from 'styled-components';
import { getBackground } from '../utils';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-position: center;
  background-repeat: repeat;

  background-image: url("${({ theme }) => getBackground(theme.backgroundColor)}");
`;


