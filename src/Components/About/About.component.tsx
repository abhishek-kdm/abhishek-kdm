import React from 'react';
import StyledAbout from './About.style';
import { RetroList } from '@/Styles/global.style';

interface AboutProps extends React.HTMLAttributes<HTMLElement> { }

const About: React.FC<AboutProps> = () => {
    return (
        <>
            <StyledAbout>
                <pre>
                    {` __                _ ____
|  |   _ _ ___ _ _|_|    \\
|  |__| | |  _| | | |  |  |
|_____|_  |___|___|_|____/
      |___|
`}
                </pre>
                <hr />
                <RetroList>
                    <li>Software Engineer and a minimalist (of sorts).</li>
                    <li>Love programming languages and working/experimenting<br />with different kinds.</li>
                    <li>Personally, I enjoy making software for day to day use.</li>
                    <li>Professionally, I have been dabbling with web technologies<br />for a significant period of time.</li>
                </RetroList>
            </StyledAbout>
        </>
    );
};

export default About;
