type Maybe<T> = T | null;
type Point = { x: number; y: number };

type WindowID = string;

interface FileWindowAttributes {
  windowId: WindowID;
  name: string;
  fileType?: 'file' | 'dir';
  minimized?: Maybe<boolean>;
}

// props passed to the 'Window' component itself.
type WindowProps = React.HTMLAttributes<HTMLElement> & FileWindowAttributes;

interface WindowState {
  // visible windows on the screen.
  windows: WindowProps[];
  // window being actively dragged across the screen.
  dragWindow: Maybe<WindowID>;
  // offset in (pixels) for the 'dragWinow', from its original position.
  windowOffset: Point;
}

interface ScreenState {
  windowState: WindowState;
  updateWindowState: React.Dispatch<React.SetStateAction<WindowState>>;
  bringToTop: (windowId: WindowID) => void;
}

interface GithubRepository {
  description: string;
  id: string;
  name: string;
  url: string;
  languages: string[];
  pinned: boolean;
  README: { text: string };
  README_MD: { text: string };
}

interface GithubRepositoryLanguage {
  languages: {
    nodes: { name: string }[];
  };
}

interface GithubGraphqlData {
  pinnedItems: {
    nodes: {
      id: string;
    }[];
  };
  repositories: {
    nodes: (Omit<GithubRepository, 'pinned'> &
      Omit<GithubRepository, 'language'> &
      GithubRepositoryLanguage)[];
  };
}
