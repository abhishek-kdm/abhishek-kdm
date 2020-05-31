import styled from 'styled-components';


export const SVGFill = styled.svg`
  position: absolute;
  height: 100%;
  transition: all .25s ease-out;

  circle {
    fill: var(--color-secondary);
  }
`;

const StyledToggler = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TogglerInput = styled.input.attrs({
  type: 'radio',
  name: 'theme-toggler',
})`
  display: none;
  pointer-events: none;
`;

export const TogglerLabel = styled.label`
  position: relative;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  margin: 5px 5px;
  padding: 10px;
  width: 25px;
  height: 25px;
  box-shadow: var(--neumorphic-shadow-small);
  border-radius: 50%;
  background-color: var(--color-bg-primary);

  ${TogglerInput}:checked + & {
    box-shadow: var(--neumorphic-shadow-small-active);
  }
`;

export const SVGActive = styled.svg<{ active: boolean }>`
  position: absolute;
  display: block;
  height: 100%;
  left: 0;
  top: 0;

  transform: rotate(-90deg);
  stroke: var(--color-secondary);
  transition: .5s stroke-dasharray;

  ${({ active }) => active ? `
    stroke-linecap: round;
    stroke-dasharray: 314.159 314.159;
  ` :
    'stroke-dasharray: 0 314.159;'
  }
`;

export default StyledToggler;
