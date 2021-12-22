import styled from 'styled-components';

const StyledFile = styled.span`
  display: grid;
  grid-template-rows: 3.5rem auto;
  grid-template-columns: 6rem;
  grid-gap: 10px;
  width: 7rem;

  padding: 10px 0.5rem;
  margin: 10px 0;
  cursor: pointer;
  color: var(--color-primary);

  :focus {
    background-color: blue;
  }
`;

export const FileIcon = styled.svg`
  fill: white;
  stroke: currentColor;
  stroke-width: 5;
  stroke-linejoin: round;
  width: 1rem;
  height: 1rem;
`;

export const FileIconContainer = styled.span`
  position: relative;
  color: inherit;

  ${FileIcon} {
    width: 100% !important;
    height: 100% !important;
  }

  span.subicon {
    display: flex;
    background-color: inherit;
    color: inherit;
    width: 1.5rem;
    height: 1.5rem;
    position: absolute;
    bottom: 0.75rem;
    left: calc(50% - 0.75rem);
  }
`;

export const FileName = styled.span`
  display: flex;
  justify-content: center;
  user-select: none;
  word-break: break-all;
  background-color: white;
  padding: 1px 2px;
`;

export default StyledFile;
