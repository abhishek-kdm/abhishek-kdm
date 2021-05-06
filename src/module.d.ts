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

interface GithubRepository {
  description: string
  id: string
  name: string
  url: string
  languages: string[]
  readme_md: { text: string }
  readme_txt: { text: string }
}

type GithubRepositoryLanguage = {
  languages: {
    nodes: { name: string }[]
  }
};

type GithubGraphqlData = {
  github: {
    user: {
      repositories: {
        nodes: (Omit<GithubRepository, 'language'> & GithubRepositoryLanguage)[]
      }
    }
  }
};
