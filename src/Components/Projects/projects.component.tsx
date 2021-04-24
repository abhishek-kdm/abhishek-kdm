import React, { useContext } from 'react';
import StyledProject from './projects.style';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faFileCode } from '@fortawesome/free-regular-svg-icons';
import File from '../__pure__/File/file.component';
import Directory from '../__pure__/Directory/directory.component';
import { useNavigate } from '../__pure__/Window/window.utils';

import { Anchor } from '../../Styles/global.style';
import { getSVGIcon } from './projects.utils';
import { RootContext } from '../../Context';

interface ProjectsProps extends React.HTMLAttributes<HTMLElement> {
  windowId?: string
}

export const GithubProjects: React.FC<ProjectsProps> = ({ windowId }) => {
  const { repos } = useContext(RootContext);

  const handleClick = useNavigate(windowId, {
    name: 'Projects',
    children: <Projects windowId={windowId} />,
  });

  return (<>
    <FontAwesomeIcon
      style={{ cursor: 'pointer', fontSize: '24px' }}
      onClick={handleClick}
      icon={faArrowAltCircleLeft}
    />
    <StyledProject>
      {repos.map((repo: GithubRespository) => {
        const props = repo.language != null
          ? { Svg: getSVGIcon(repo.language) }
          : { faIcon: faFileCode };

        return (
          <Anchor href={repo.url} key={repo.id}
            tabIndex={-1}
            style={{ borderBottom: '1px solid transparent' }}
            onClick={(e) => { e.preventDefault(); }}
            onDoubleClick={() => { window.open(repo.url); }}
          >
            <File {...props} title={repo.description} name={repo.name} />
          </Anchor>
        );
      })}
    </StyledProject>
  </>);
}

const Projects: React.FC<ProjectsProps> = ({ windowId }) => {
  const handleClick = useNavigate(windowId, {
    name: 'Github',
    children: <GithubProjects windowId={windowId} />,
  });

  return (<>
    <StyledProject>
      <Anchor href='https://lycuid.dev/p/' tabIndex={-1}
        style={{ borderBottom: '1px solid transparent' }}
        onClick={(e) => { e.preventDefault(); }}
        onDoubleClick={() => { window.open('https://lycuid.dev/p/'); }}
      >
        <File name='Live Apps' />
      </Anchor>
      <Anchor href='https://github.com/lycuid/' tabIndex={-1}
        style={{ borderBottom: '1px solid transparent' }}
        onClick={(e) => { e.preventDefault(); }}
        onDoubleClick={handleClick}
      >
        <Directory name='Github' />
      </Anchor>
    </StyledProject>
  </>)
}

export default Projects;
