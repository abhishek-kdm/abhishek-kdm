import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import GlobalStyle from './Styles/global.style';

const StyledWrapper = styled.div`
  color: var(--color-primary);
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAABlBMVEWqqqpVVVWzGxUgAAAADElEQVQI12NwYHIAAAEIAIPJpZSRAAAAAElFTkSuQmCC);

  display: grid;
  grid-template-rows: 1fr auto;
  width: 100%;
  min-height: 100vh;

  --color-special: #8e44ad;

  --color-primary: #090909;
  --color-secondary: #353535;

  --color-shadow: #404040;
  --color-bg-primary: #dadada;
  --color-bg-secondary: #afafaf;
`;

const Wrapper: React.FC = ({ children }) => {
  const fontFaces = useStaticQuery(graphql`
    {
      allFile(filter: { sourceInstanceName: { eq: "Fonts" } }) {
        nodes {
          name
          publicURL
          extension
        }
      }
    }
  `)?.allFile?.nodes;

  return (
    <>
      <GlobalStyle fontFaces={fontFaces} />
      <StyledWrapper>{children}</StyledWrapper>
    </>
  );
};

export default Wrapper;
