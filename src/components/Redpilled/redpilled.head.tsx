import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import { fontFaceString } from '../../utils';
import Head from '../../head';

const CommHead: React.FC<{}> = () => {
  const { allFile: { fonts } } = useStaticQuery(graphql`
    query {
      allFile(filter: {sourceInstanceName: {eq: "fonts"}, relativeDirectory: { eq: "redpilled" }}) {
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

export default CommHead;

