import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { RootContext } from '../Context';

import Head from '../head';
import PageWrapper from '../Components/PageWrapper/pageWrapper.component';
import Desktop from '../Components/Desktop/desktop.component';
import Footer from '../Components/Footer/footer.component';

export const query = graphql`
  query {
    github {
      user(login: "lycuid") {
        repositories(first: 100) {
          nodes {
            description
            id
            name
            url
            languages(first: 1, orderBy: {field: SIZE, direction: DESC}) {
              nodes {
                name
              }
            }
          }
        }
      }
    }
  }
`;

const IndexPage: React.FC<PageProps & { data: GithubGraphqlData }> = ({ data }) => {
  return (<>
    <Head />
    <RootContext.Provider value={{
      repos: data
        .github
        .user
        .repositories
        .nodes
        .map(({ languages, ...node }) => ({ ...node, language: languages.nodes[0]?.name }))
    }}>
      <PageWrapper>
        <Desktop />
        <Footer />
      </PageWrapper>
    </RootContext.Provider>
  </>);
}

export default IndexPage;
