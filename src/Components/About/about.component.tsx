import React from 'react';
import StyledAbout from './about.style';

interface AboutProps extends React.HTMLAttributes<HTMLElement> {}

const About: React.FC<AboutProps> = () => {
  return (
    <>
      <StyledAbout>
        {/* prettier-ignore */}
        <pre>
{` __                _ ____
|  |   _ _ ___ _ _|_|    \\
|  |__| | |  _| | | |  |  |
|_____|_  |___|___|_|____/
      |___|
`}
        </pre>
        <hr />
        <br />
        Software Engineer and a minimalist (of sorts).
        <br />
        Love programming languages and working/experimenting with different
        kinds.
        <br />
        Currently have been dabbling with web technologies (professionally) for
        a significant period of time.
        <br />
      </StyledAbout>
    </>
  );
};

export default About;
