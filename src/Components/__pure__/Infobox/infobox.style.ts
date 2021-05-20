import styled, { css } from 'styled-components';
import { RetroAnimation } from './infobox.animation';

export interface StyledInfoboxProps extends React.HTMLAttributes<HTMLElement> {
  animate?: boolean
}

const Animate = css`animation: ${RetroAnimation} .3s ease-in;`;

const StyledInfobox = styled.section<StyledInfoboxProps>`
  ${(p) => p.animate && Animate}
  background-color: var(--color-bg-secondary);
`;

export default StyledInfobox;
