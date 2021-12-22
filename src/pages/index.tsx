import React, { useState, useCallback } from 'react';
import { PageProps, graphql } from 'gatsby';
import Desktop from '../Components/Desktop/Desktop.component';
import Taskbar from '../Components/Taskbar/Taskbar.component';
import { useWindowDrag } from '../Components/__pure__/Window/Window.utils';
import { GlobalContext } from '../Utils';
import { newPoint } from '../Utils';

interface IndexPageProps {
  data: {
    github: {
      repositories: GithubRepository[];
    };
  };
}

const IndexPage: React.FC<IndexPageProps & PageProps> = ({ data }) => {
  const [windowState, updateWindowState] = useState<WindowState>({
    windows: [],
    dragWindow: null,
    windowOffset: newPoint(),
  });

  const dragProps = useWindowDrag(windowState, updateWindowState);

  const bringToTop = useCallback(
    (windowId) => {
      const maxindex = windowState.windows.reduce(
        (m, { style }) => Math.max(m, Number(style?.zIndex || 0)),
        999
      );
      updateWindowState((state) => ({
        ...state,
        windows: state.windows.map((w) =>
          w.windowId === windowId
            ? { ...w, style: { ...w.style, zIndex: maxindex + 1 } }
            : w
        ),
      }));
    },
    [windowState.windows, updateWindowState]
  );

  return (
    <>
      <GlobalContext.Provider
        value={{
          windowState,
          updateWindowState,
          bringToTop,
          repos: data.github.repositories,
        }}
      >
        <Desktop {...dragProps} />
        <Taskbar />
      </GlobalContext.Provider>
    </>
  );
};

export const query = graphql`
  query Github {
    github {
      repositories {
        id
        description
        languages
        name
        pinned
        url
        README {
          text
        }
        README_MD {
          text
        }
      }
    }
  }
`;

export default IndexPage;
