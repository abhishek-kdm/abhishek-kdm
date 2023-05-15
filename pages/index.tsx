import React, { useState, useCallback } from 'react';
import Desktop from '@/Components/Desktop/Desktop.component';
import Taskbar from '@/Components/Taskbar/Taskbar.component';
import { useWindowDrag } from '@/Components/__pure__/Window/Window.utils';
import { GlobalContext, newPoint } from '@/Utils';

interface IndexPageProps {
    repositories: GithubRepository[];
}

const IndexPage: React.FC<IndexPageProps> = ({ repositories }) => {
    const [windowState, updateWindowState] = useState<WindowState>({
        windows: [],
        dragWindow: null,
        windowOffset: newPoint(),
    });

    const dragProps = useWindowDrag(windowState, updateWindowState);

    const raiseWindow = useCallback(
        (windowId: WindowID) => {
            const maxindex = windowState.windows.reduce(
                (m, { style }) => Math.max(m, Number(style?.zIndex || 0)),
                999
            );
            updateWindowState((state) => ({
                ...state,
                windows: state.windows.map((w) =>
                    w.windowId === windowId
                        ? { ...w, style: { ...w.style, zIndex: maxindex + 1 } }
                        : w
                ),
            }));
        },
        [windowState.windows, updateWindowState]
    );

    return (
        <>
            <GlobalContext.Provider
                value={{
                    windowState,
                    updateWindowState,
                    raiseWindow,
                    repos: repositories,
                }}
            >
                <Desktop {...dragProps} />
                <Taskbar />
            </GlobalContext.Provider>
        </>
    );
};

export const getStaticProps = async () => {
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
                    deployments(first: 1, environments: ["github-pages"]) {
                        edges {
                            node {
                                id
                            }
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
    }`;

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
    const repositories = github?.repositories?.nodes?.map((repo: any) => ({
        ...repo,
        isLive: repo?.deployments?.edges.length > 0,
        languages: repo.languages.nodes.map((n: any) => n.name),
        pinned: pinnedIds.includes(repo.id),
    }));

    return { props: { repositories } };
};

export default IndexPage;
