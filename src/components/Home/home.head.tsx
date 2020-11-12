import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { fontFaceString } from '../../utils';
import Head from '../../head';

const HomeHead: React.FC = () => {
  const { allFile: { fonts } } = useStaticQuery(graphql`
    query {
      allFile(filter: {sourceInstanceName: {eq: "fonts"}, relativeDirectory: { eq: "home" }}) {
        fonts: edges {
          node {
            name
            publicURL
            extension
          }
        }
      }
    }
  `);

  return (<>
    <Head style={[{ cssText: fonts.map(fontFaceString).join("") }]} />
  </>);
}

export default HomeHead;

