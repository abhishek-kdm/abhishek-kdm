type Maybe<T> = T | null;
type Point = { x: number; y: number };

type WindowID = string;

interface FileWindowAttributes {
  windowId?: WindowID;
  name?: string;
  fileType?: 'file' | 'dir';
}

type WindowProps = React.HTMLAttributes<HTMLElement> &
  Required<FileWindowAttributes>;

type WindowState = {
  windows: WindowProps[];
  active: Maybe<WindowID>;
  index: number;
};

interface DesktopState extends WindowState {
  updateWindowState: React.Dispatch<React.SetStateAction<WindowState>>;
  offset: Point;
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

type GithubRepositoryLanguage = {
  languages: {
    nodes: { name: string }[];
  };
};

type GithubGraphqlData = {
  github: {
    user: {
      pinnedItems: {
        nodes: {
          id: string;
        }[];
      };
      repositories: {
        nodes: (Omit<GithubRepository, 'language'> &
          GithubRepositoryLanguage)[];
      };
    };
  };
};
