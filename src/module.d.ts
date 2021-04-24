type Maybe<T> = T | null;
type Point = { x: number, y: number };

type WindowType = 'file' | 'dir';
type WindowAttributes = {
  windowId: string,
  name?: string,
  windowType?: WindowType
} & React.HTMLAttributes<HTMLElement>;

type WindowState = {
  windows: WindowAttributes[],
  active: Maybe<string>,
  index: number
};

interface DesktopState extends WindowState {
  updateWindowState: React.Dispatch<React.SetStateAction<WindowState>>
  offset: Point
}

interface RootState {
  repos: GithubRespository[]
}

interface GithubRespository {
  description: string
  id: string
  name: string
  url: string
  language: Maybe<string>
}

type GithubRespositoryLanguage = {
  languages: {
    nodes: { name: string }[]
  }
};

type GithubGraphqlData = {
  github: {
    user: {
      repositories: {
        nodes: (Omit<GithubRespository, 'language'> & GithubRespositoryLanguage)[]
      }
    }
  }
};
