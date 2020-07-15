import styled, { css } from 'styled-components';
import { vintageDisplay } from './infoBox.animations';


export interface StyledInfoBoxProps {
  /**
   * need to have `height` attr for scrollable.
   */
  scrollable?: boolean
  animate?: boolean
}

const StyledInfoBox = styled.div<StyledInfoBoxProps>`
  box-sizing: border-box;
  padding: 20px;
  border-radius: 6px;
  position: relative;
  width: 'auto';
  height: 'auto';

  display: flex;
  flex-direction: column;

  ${({ scrollable }) => scrollable ? `
    overflow: hidden;
    overflow-y: auto;
  ` : ''}

  ${({ animate }) => animate ? css`
    background-color: rgb(0, 0, 0);
    border: 5px solid var(--color-primary);
    animation: ${vintageDisplay} .7s ease-out;
  ` : ''}
`;

export default StyledInfoBox;
