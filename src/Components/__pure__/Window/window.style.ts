import styled, {css} from 'styled-components';
import InfoBox from '../Infobox/infobox.component';

const FullscreenCSS = css`
  width: 100%!important;
  height: 100%!important;
  top: 0;
  left: 0;
  resize: none;
`;

const NonFullscreenCSS = css`
  max-height: 100%;
  min-height: 3rem;
  min-width: 12rem;
  overflow: hidden;
  resize: both;
`;

const StyledWindow = styled(InfoBox)<{ fullscreen: boolean }>`
  position: absolute;
  display: grid;
  grid-template-rows: 3rem auto;
  outline: none;
  border: 1px solid var(--color-secondary);
  box-shadow: 0.3rem 0.3rem 0 var(--color-shadow);

  ${(p) => p.fullscreen ? FullscreenCSS : NonFullscreenCSS}
`;

export const WindowHeader = styled.header`
  background-color: var(--color-bg-primary);
  touch-action: none;
  user-select: none;

  border-bottom: 1px solid var(--color-secondary);
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
`;

export const WindowTitle = styled.span`
  padding: 0 1.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const WindowControls = styled.label`
  cursor: pointer;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1.75rem);
  padding-right: 5px;

  & > * {
    display: flex;
    justify-content: center;
    color: var(--color-secondary);
    font-size: 1.5rem;
  }

  & svg {
    stroke: var(--color-primary);
    stroke-width: 1;
    stroke-linecap: round;
  }
`;

export const WindowContent = styled.div`
  overflow: auto;
  padding: 1.25rem;
`;

export default StyledWindow;
