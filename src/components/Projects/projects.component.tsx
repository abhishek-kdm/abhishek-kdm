import React, { useContext } from 'react';
import StyledProjects, { ProjectsList } from './projects.style';

import { AppContext } from '../../context';

import Prompt from '../__pure__/Prompt/prompt.component';
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

interface ProjectsProps { }

const Projects: React.FC<ProjectsProps> = () => {
  const { user, repos } = useContext(AppContext);

  if (!user || repos.length == 0) {
    return (
      <Label danger>
        {'Unable to fetch resources!.'}
      </Label>
    );
  }

  return (<>
    <Prompt>
      <Anchor href={user.html_url}>{user.html_url}</Anchor>
    </Prompt>

    <StyledProjects>
      <hr />
      <Title>Live Web Apps:</Title>
      <ProjectsList>
        <li>
          <Anchor href={'/p'} title={'Live Web Apps'}>
            {'https://lycuid.dev/p/'}
          </Anchor>
        </li>
      </ProjectsList>

      <hr />
      <Title>All Projects:</Title>
      <ProjectsList>
        {repos.map((repo: any) => displayRepo(repo))}
      </ProjectsList>
    </StyledProjects>
  </>);
}

export default Projects;

