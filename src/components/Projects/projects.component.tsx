import React from 'react';
import './projects.style.css';


interface ProjectsProps { }
 
const Projects: React.FC<ProjectsProps> = () => {
  return (<>
    <div id='projects'>

      {/* styleing global for `.title` */}
      <div className='title'></div>

      <ul className={'list'}>
        <li><a href=''>{'kbasd'}</a></li>
        <li><a href=''>{'jbasdf'}</a></li>
      </ul>
    </div>
  </>);
}
 
export default Projects;
