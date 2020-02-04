import React, { useContext } from 'react';
import './projects.style.css';

import { AppContext } from '../../context';

import Title from '../__pure__/Title/title.component';


interface ProjectsProps { }
 
const Projects: React.FC<ProjectsProps> = () => {
  const { user, repos } = useContext(AppContext);

  return (<>
    <Title>
      <a href={user.html_url} target='_blank' rel="noopener noreferrer">
        {user.html_url}
      </a>
    </Title>
    <div id='projects'>


      <ul className={'list'}>
        {repos.map((repo: any) => (
          <li key={repo.id}>
            <a
              href={repo.html_url}
              target='_blank'
              rel="noopener noreferrer"
              className={repo.description ? 'tooltip-parent' : ''}
            >
              {repo.description &&
                <span className={'tooltip-text'}>{repo.description}</span>}
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </>);
}
 
export default Projects;
