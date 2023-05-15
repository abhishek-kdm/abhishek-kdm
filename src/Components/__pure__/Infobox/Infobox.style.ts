import styled, { css } from 'styled-components';
import { RetroAnimation } from './Infobox.animation';

export type InfoboxElement = HTMLElement;

export interface StyledInfoboxProps
    extends React.HTMLAttributes<InfoboxElement> {
    animate?: boolean;
}

export const InfoboxAnimate = css`
    animation: ${RetroAnimation} 0.3s ease-in;
`;

const StyledInfobox = styled.section<StyledInfoboxProps>`
    ${(p) => p.animate && InfoboxAnimate}
    background-color: var(--color-bg-secondary);
`;

export default StyledInfobox;
