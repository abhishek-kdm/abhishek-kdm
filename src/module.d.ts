

interface Predicates<T> { [index: string]: T  }

interface Loaders extends Predicates<Boolean> { }
interface Modals extends Predicates<Boolean> { }

interface UserRepos {
  ok: boolean,
  json: Object[]
  message?: string
}

interface User { }


// Interfaces/types for modals.

interface GitModalProps {
  dimmness?: string,
  show: boolean,
  vintage?: boolean,
  showLoader?: boolean,
  closeFunc?: () => void,
  githubUserLink?: string,
  children?: JSX.Element,
}


interface PageLoadingProps {
  dimmness?: string,
  show: boolean,
  showLoader?: boolean,
}

interface Repositories {
  repositories: any
}



// interfaces/types for ui-components.
interface LoaderProps {
  show?: boolean,
  size?: string,
  children?: JSX.Element,
}


interface FloatButtonProps extends React.HTMLAttributes<HTMLInputElement> {
  tooltip: string
}


interface InfoboxProps {
  style?: React.CSSProperties,
  animate?: boolean,
  vintage?: boolean,
  title?: string | JSX.Element,
  children?: JSX.Element | JSX.Element[],
}



interface ModalBoxProps {
  show?: boolean,
  dimmness?: string,
  closeFunc?: () => void,
  children?: JSX.Element,
}


interface TitleProps {
  children?: JSX.Element[],
}


interface Icon {
  color: string
  class: string 
}
interface Link {
  title: string
  href: string
  icon: Icon
}
