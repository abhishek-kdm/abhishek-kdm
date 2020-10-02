import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import GlobalCommStyle, {
  CommWrapper,
  CommHeader,
  CommMain,
  CommDetails,
  CommSummary,
} from './redpilled.style';

import Head from '../../head';
import About from '../About/about.component';
import Projects from '../Projects/projects.component';
import Social from '../Social/social.component';

const Comm: React.FC<{}> = () => {
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(filter: {sourceInstanceName: {eq: "fonts"}}) {
          edges {
            node {
              name
              publicURL
              extension
            }
          }
        }
      }
    `
  );

  return (<>
  <Head
    style={[{
      cssText: `
        ${allFile.edges.map(({ node }: any) => `
          @font-face {
            font-family: "${node.name}";
            src: local("${node.publicURL}"),
              url("${node.publicURL}") format("${node.extension}");
          }
        `)}
      `
    }]}
  />
    <GlobalCommStyle />

    <CommWrapper>
      <CommHeader as='header'>
        <small>
          [<Link to={'/'}>
            back to bloat
          </Link>]
        </small>
      </CommHeader>
      <br />
      <CommMain as='main'>
        <About /><br />
        <CommDetails open>
          <CommSummary><strong>SOCIAL</strong></CommSummary>
          <Social />
        </CommDetails>
        <CommDetails open>
          <CommSummary><strong>PROJECTS</strong></CommSummary>
          <Projects />
        </CommDetails><br />
      </CommMain>
    </CommWrapper>
  </>);
}

export default Comm;

