const fetch = require('node-fetch');

const query = `
  query {
    user(login: "lycuid") {
      pinnedItems(first: 100, types: REPOSITORY) {
        nodes {
          ... on Repository {
            id
          }
        }
      }
      repositories(first: 100) {
        nodes {
          id
          name
          url
          description
          languages(first: 50, orderBy: { field: SIZE, direction: DESC }) {
            nodes {
              name
            }
          }
          README_MD: object(expression: "HEAD:README.md") {
            ... on Blob {
              text
            }
          }
          README: object(expression: "HEAD:README") {
            ... on Blob {
              text
            }
          }
        }
      }
    }
  }
`;

exports.sourceNodes = async ({ actions, createContentDigest }) => {
  if (process.env.NODE_ENV !== 'production') require('dotenv').config();

  const response = await fetch('https://api.github.com/graphql', {
    body: JSON.stringify({ query }),
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.GRAPHQL_GITHUB_TOKEN}`,
    },
  });
  if (!response.ok) return;

  const github = (await response.json())?.data?.user;
  const pinnedIds = github.pinnedItems.nodes.map(({ id }) => id);
  const repositories = github.repositories.nodes.map((repo) => ({
    ...repo,
    languages: repo.languages.nodes.map((n) => n.name),
    pinned: pinnedIds.includes(repo.id),
  }));

  actions.createNode({
    // arbitrary.
    repositories,

    // required.
    id: 'github',
    parent: null,
    children: [],
    internal: {
      type: 'Github',
      contentDigest: createContentDigest(repositories),
    },
  });
};
