import styled from 'styled-components';


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

  ${({ animate }) => animate ? `
    background-color: rgb(0, 0, 0);
    border: 2px solid var(--color-primary);
    animation: .7s ease-out 0s 1 vintage-display;

    @keyframes vintage-display {
      0% { transform: rotatey(90deg) scaleY(.01); }
      75% { transform: rotatey(0deg) scaleY(.01); }
      100% { transform: scaleY(1); }
    }
  ` : ''}
`;

export default StyledInfoBox;
