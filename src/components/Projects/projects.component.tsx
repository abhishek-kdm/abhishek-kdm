import React, { useContext } from 'react';
import StyledProjects, { ProjectsList } from './projects.style';

import { AppContext } from '../../context';

import Prompt from '../__pure__/Prompt/prompt.component';
import { Anchor, Label } from '../../utils/components';


const displayRepo = (repo: any) => (
  <li key={repo.id}>
    <Anchor href={repo.html_url} title={repo.description || null}>
      {repo.name}
    </Anchor>&nbsp;&nbsp;&nbsp;
    ({repo.language})
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
      <ProjectsList>
        {repos.filter((a: any) => a.has_pages).map(displayRepo)}
      </ProjectsList>
    </StyledProjects>
  </>);
}

export default Projects;

