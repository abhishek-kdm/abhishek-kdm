import React, { useContext } from 'react';
import './projects.style.css';

import { AppContext } from '../../context';

import Title from '../__pure__/Title/title.component';
import { Anchor } from '../../utils/components';


interface ProjectsProps { }

const Projects: React.FC<ProjectsProps> = () => {
  const { user, repos } = useContext(AppContext);

  if (!user || repos.length == 0)
    return (
      <span style={{ backgroundColor: 'red', color: 'white', padding: '5px 25px', width: '50%', borderRadius: '3px', alignSelf: 'center' }}>
        {'Unable to fetch resources!.'}
      </span>
    );

  return (<>
    <Title>
      <Anchor href={user.html_url}>{user.html_url}</Anchor>
    </Title>

    <div id='projects'>
      <ul className={'list'}>
        {repos.map((repo: any) => (
          <li key={repo.id}>
            <Anchor href={repo.html_url} title={repo.description || null}>
              {repo.name}
            </Anchor>
            {/* {(repo.homepage || '').length ?
              <>&nbsp;&nbsp;&nbsp;
              <Anchor style={{ borderBottom: 'none' }}  href={repo.homepage}>
                <span style={{ fontSize: '20px', color: 'white' }}>
                  &#x1f441;
                </span>
              </Anchor></> : (null)} */}
          </li>
        ))}
      </ul>
    </div>
  </>);
}

export default Projects;

