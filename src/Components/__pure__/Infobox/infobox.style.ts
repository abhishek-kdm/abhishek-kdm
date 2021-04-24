import styled, { css } from 'styled-components';
import { RetroAnimation } from './infobox.animation';
import { Retro } from '../../../Styles/global.style';

export interface StyledInfoboxProps extends React.HTMLAttributes<HTMLElement> {
  retro?: boolean
  animate?: boolean
}

const Animate = css`animation: ${RetroAnimation} .3s ease-in;`;

const StyledInfobox = styled.section<StyledInfoboxProps>`
  ${(p) => p.retro && Retro}
  ${(p) => p.animate && Animate}

  background-color: var(--color-bg-secondary);
`;

export default StyledInfobox;
