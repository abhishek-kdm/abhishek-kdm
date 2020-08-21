import React, { useContext } from 'react';
import StyledProjects, { ProjectsList } from './projects.style';

import { AppContext } from '../../context';

import { Anchor, Label } from '../../utils/components';
import Title from '../__pure__/Title/title.component';


// @TODO: implement `repo` type.
const displayRepo = (repo: any) => (
  <li key={repo.id}>
    <Anchor href={repo.html_url} title={repo.description || null}>
      {repo.name}
    </Anchor>
    {repo.language ? ` -- ${repo.language}` : ''}
  </li>
);

interface ProjectsProps extends React.HTMLAttributes<HTMLElement>{ }

const Projects: React.FC<ProjectsProps> = (props) => {
  return (<>
    <StyledProjects {...props} id={'projects'}>
      <Title>Live Web Apps</Title>
      <ProjectsList>
        <li>
          <Anchor href={'/p'} title={'Live Web Apps'}>
            {'https://lycuid.dev/p/'}
          </Anchor>
        </li>
      </ProjectsList>
    </StyledProjects>
  </>);
}

export default Projects;

