import styled, { css } from 'styled-components';
import InfoBox from '../Infobox/Infobox.component';
import { RetroCSS } from '../../../Styles/global.style';

const FullscreenCSS = css`
  width: 100% !important;
  height: 100% !important;
  top: 0;
  left: 0;
  resize: none;
`;

const NonFullscreenCSS = css`
  box-shadow: 0.3rem 0.3rem 0 var(--color-shadow);
  max-height: 100%;
  min-height: 3rem;
  min-width: 12rem;
  overflow: hidden;
  resize: both;
`;

const StyledWindow = styled(InfoBox)<{ fullscreen: boolean }>`
  position: absolute;
  display: grid;
  grid-template-rows: 1.8rem auto;
  outline: none;
  border: 1px solid var(--color-secondary);

  ${(p) => (p.fullscreen ? FullscreenCSS : NonFullscreenCSS)}
`;

export const WindowHeader = styled.header`
  background-color: var(--color-bg-secondary);
  touch-action: none;
  user-select: none;

  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr;
  align-items: center;
  padding-bottom: 2px;
`;

export const WindowTitle = styled.div`
  ${RetroCSS}
  padding: 0;
  display: grid;
  grid-template-columns: auto 1fr;
  height: 100%;
  background-color: var(--color-bg-secondary);
  padding-top: 2px;
  padding-bottom: 2px;

  position: relative;
  ::before,
  ::after {
    content: '';
    position: absolute;
    width: calc(100% - 10px);
    border-bottom: 1px solid var(--color-secondary);
    margin-left: 5px;
    margin-right: 5px;
    z-index: 0;
  }
  ::before {
    top: 25%;
    height: 25%;
    border-top: 1px solid var(--color-secondary);
  }
  ::after {
    bottom: 25%;
  }

  & > span {
    margin-left: 0.75rem;
    padding-left: 0.5rem;
    padding-top: 2px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    background-color: var(--color-bg-secondary);
    z-index: 1;
  }
`;

export const WindowControls = styled.span`
  cursor: pointer;
  display: grid;
  grid-template-columns: repeat(3, 1.7rem);
  grid-template-rows: 1.7rem;
  grid-gap: 2px;
  margin: 0 2px;
  height: 100%;

  & > * {
    background-color: var(--color-bg-secondary);
    font-size: 1.2rem;
  }
`;

export const WindowContent = styled.div`
  background-color: var(--color-bg-primary);
  overflow: auto;
  padding: 1.25rem;
`;

export default StyledWindow;
