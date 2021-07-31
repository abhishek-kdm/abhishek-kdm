import React, { useCallback } from 'react';
import ReactMarkdown, { PluggableList } from 'react-markdown';
import gfm from 'remark-gfm';
import RepositoryContainer, {
  RepositoryFieldset,
  StyledRepositoryFile,
} from './repositories.style';
import { getSVGIcon, sanitize } from './repositories.utils';

import File from '../__pure__/File/file.component';
import { useNavigate } from '../__pure__/Window/window.utils';
import { Anchor } from '../../Styles/global.style';
import { useStaticQuery, graphql } from 'gatsby';

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
          <span
            style={{ cursor: 'pointer', fontSize: '24px' }}
            onClick={handleClick}
          />
          <small>
            <Anchor
              target='_blank'
              href={props.url}
              style={{ display: 'flex' }}
            >
              view on github&nbsp;&nbsp;
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
              <ReactMarkdown remarkPlugins={[gfm] as PluggableList}>
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
  const repos = sanitize(useStaticQuery(query));
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

const query = graphql`
  query {
    github {
      user(login: "lycuid") {
        pinnedItems(first: 100, types: REPOSITORY) {
          nodes {
            ... on Github_Repository {
              id
            }
          }
        }
        repositories(first: 100) {
          nodes {
            id
            name
            url
            description
            languages(first: 50, orderBy: { field: SIZE, direction: DESC }) {
              nodes {
                name
              }
            }
            README_MD: object(expression: "HEAD:README.md") {
              ... on Github_Blob {
                text
              }
            }
            README: object(expression: "HEAD:README") {
              ... on Github_Blob {
                text
              }
            }
          }
        }
      }
    }
  }
`;

export default Repositories;
