import styled from 'styled-components';
import { RetroList } from '../../styles/global.style';

const StyledSocial = styled.section`
  width: 100%;
  box-sizing: border-box;

  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const SocialLinks = styled(RetroList)``;

export const IconLink = styled.li``;

export const IconLinkContainer = styled.ul`
  padding: 0;
  margin: 0;
  margin-left: 1rem;
  list-style-type: none;
  display: flex;

  ${IconLink} {
    text-decoration: none;
    margin: 0 2.5px;

    a { border: none; }
  }
`;


export default StyledSocial;

