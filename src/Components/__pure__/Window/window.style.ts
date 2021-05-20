import styled, {css} from 'styled-components';
import Infobox from '../Infobox/infobox.component';

export const WindowBody = styled.div`
  overflow: auto;
  padding: 1.25rem;

  border-bottom-left-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
`;

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

const StyledWindow = styled(Infobox)<{ fullscreen: boolean }>`
  --border-radius: 4px;
  position: absolute;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  outline: none;
  border: 1px solid var(--color-secondary);
  box-shadow: 0.3rem 0.3rem 0 var(--color-shadow);

  ${(p) => p.fullscreen ? FullscreenCSS : NonFullscreenCSS}
`;

export const WindowHeader = styled.header`
  background-color: var(--color-bg-primary);
  touch-action: none;
  user-select: none;
  height: 3rem;

  border-bottom: 1px solid var(--color-secondary);
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);

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

    width: 100%;
    height: 100%;
  }
`;

export default StyledWindow;
