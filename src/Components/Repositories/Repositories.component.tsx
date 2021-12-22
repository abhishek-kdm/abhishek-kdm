import React, { useCallback, useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import RepositoryContainer, {
  RepositoryFieldset,
  StyledRepositoryFile,
} from './Repositories.style';
import { getSVGIcon } from './Repositories.utils';

import File from '../__pure__/File/File.component';
import { useNavigate } from '../__pure__/Window/Window.utils';
import { Anchor, Button } from '../../Styles/global.style';
import { GlobalContext } from '../../Utils';

interface RepositoriesProps extends React.HTMLAttributes<HTMLElement> {
  windowId: string;
}

const RepositoryFile: React.FC<RepositoriesProps & GithubRepository> = ({
  windowId,
  ...props
}) => {
  const navigate = useNavigate(windowId);

  const handleClick = useCallback(() => {
    navigate({
      name: 'Repositories',
      fileType: 'dir',
      children: <Repositories windowId={windowId} />,
    });
  }, [navigate, windowId]);

  return (
    <>
      <StyledRepositoryFile>
        <header>
          <Button
            style={{ width: '1.5rem', height: '1.5rem', fontSize: '1.2rem' }}
            onClick={handleClick}
          >
            &#x140a;
          </Button>
          <small>
            <Anchor target='_blank' href={props.url}>
              view on github&nbsp;
              <svg width='1.25em' height='1.25em' viewBox='0 0 24 24'>
                <g
                  stroke='currentColor'
                  strokeWidth={1.5}
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <polyline points='17 13.5 17 19.5 5 19.5 5 7.5 11 7.5' />
                  <path d='M14,4.5 L20,4.5 L20,10.5 M20,4.5 L11,13.5' />
                </g>
              </svg>
            </Anchor>
          </small>
        </header>
        <hr />
        {props.description}
        <br />
        <dl>
          <dt>Languages used:</dt>
          <dd>
            {props.languages.length ? (
              props.languages.map((lang, i) => (
                <kbd key={`${lang}-${i}`}>{lang}</kbd>
              ))
            ) : (
              <small>--unknown--</small>
            )}
          </dd>
        </dl>
        <dl>
          <dt>Description:</dt>
          <dd>
            {props.README_MD?.text ? (
              <ReactMarkdown remarkPlugins={[gfm]}>
                {props.README_MD?.text}
              </ReactMarkdown>
            ) : (
              <pre>{props.README?.text}</pre>
            )}
          </dd>
        </dl>
      </StyledRepositoryFile>
    </>
  );
};

const Repositories: React.FC<RepositoriesProps> = ({ windowId, ...props }) => {
  const { repos } = useContext(GlobalContext);
  const navigate = useNavigate(windowId);

  const handleOpen = useCallback(
    (repo) => {
      return () =>
        navigate({
          name: repo.name,
          fileType: 'file',
          children: <RepositoryFile windowId={windowId} {...repo} />,
        });
    },
    [navigate, windowId]
  );

  return (
    <>
      <RepositoryFieldset>
        <legend>Pinned</legend>
        <RepositoryContainer {...props}>
          {repos
            .filter((repo) => repo.pinned)
            .map((repo: GithubRepository) => {
              const props = {
                SubIcon: getSVGIcon(
                  repo.languages.length ? repo.languages[0] : ''
                ),
              };

              return (
                <File
                  {...props}
                  key={repo.id}
                  title={repo.description}
                  name={repo.name}
                  onDoubleClick={handleOpen(repo)}
                  onKeyPress={(e) =>
                    e.key.toLowerCase() === 'enter' && handleOpen(repo)()
                  }
                />
              );
            })}
        </RepositoryContainer>
      </RepositoryFieldset>
      <RepositoryFieldset>
        <legend>Rest</legend>
        <RepositoryContainer {...props}>
          {repos
            .filter((repo) => !repo.pinned)
            .map((repo: GithubRepository) => {
              const props = {
                SubIcon: getSVGIcon(
                  repo.languages.length ? repo.languages[0] : ''
                ),
              };

              return (
                <File
                  {...props}
                  key={repo.id}
                  title={repo.description}
                  name={repo.name}
                  onDoubleClick={handleOpen(repo)}
                  onKeyPress={(e) =>
                    e.key.toLowerCase() === 'enter' && handleOpen(repo)()
                  }
                />
              );
            })}
        </RepositoryContainer>
      </RepositoryFieldset>
    </>
  );
};

export default Repositories;
