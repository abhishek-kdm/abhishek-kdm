import styled from 'styled-components';
import Infobox from '../Infobox/infobox.component';

const StyledWindow = styled(Infobox)<{ fullscreen: boolean }>`
  --border-radius: 4px;
  position: absolute;

  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  outline: none;

  width: ${(p) => p.fullscreen ? 'calc(100% - 12px)' : 'minmax(auto, 80%)'};
  height: ${(p) => p.fullscreen ? 'calc(100% - 12px)' : 'auto'};

  ${(p) => p.fullscreen && 'top: 0; left: 0;'}
  ${(p) => !p.fullscreen && 'max-height: 70%; max-width: 60rem;'}
`;

export const WindowHeader = styled.header`
  background-color: var(--color-bg-primary);
  touch-action: none;
  user-select: none;

  border-bottom: 1px solid var(--color-secondary);
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);

  display: grid;
  grid-template-columns: 1fr auto;
`;

export const WindowTitle = styled.span`
  padding: 10px 1.5rem;
`;

export const WindowControls = styled.span`
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

export const WindowBody = styled.div`
  overflow: hidden;
  overflow-y: scroll;
  padding: 1.25rem;

  border-bottom-left-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
`;

export default StyledWindow;
