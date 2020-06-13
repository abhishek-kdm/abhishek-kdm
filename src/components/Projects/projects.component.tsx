import React, { useContext } from 'react';
import StyledProjects, { ProjectsList } from './projects.style';

import { AppContext } from '../../context';

import Prompt from '../__pure__/Prompt/prompt.component';
import { Anchor, Label } from '../../utils/components';
import Title from '../__pure__/Title/title.component';


// @TODO: implement `repo` type.
const displayRepo = (repo: any, href: string = 'name') => (
  <li key={repo.id}>
    <Anchor href={repo[href]} title={repo.description || null}>
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
      <hr />
      <Title>Live Projects:</Title>
      <ProjectsList>
        {repos
          .filter((a: any) => a.has_pages)
          .map((repo: any) => displayRepo(repo, 'homepage'))}
      </ProjectsList>

      <hr />
      <Title>Other Projects:</Title>
      <ProjectsList>
        {repos
          .filter((a: any) => a.homepage?.trim()?.length > 0 && !a.has_pages)
          .map((repo: any) => displayRepo(repo, 'homepage'))}
      </ProjectsList>
    </StyledProjects>
  </>);
}

export default Projects;

