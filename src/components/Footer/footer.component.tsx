import React, { useContext } from 'react';
import StyledFooter from './footer.style';

import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import { Cspan } from '../../utils/components';
import { RACE } from '../../configs';
import { ThemeContext } from 'styled-components';


interface FooterProps { }

const Footer: React.FC<FooterProps> = () => {
  const theme = useContext(ThemeContext);
  const { HeartIcon, GatsbyIcon } = useStaticQuery(graphql`
    query {
      HeartIcon: file(relativePath: {eq: "heart.svg"}) {
        publicURL
      }
      GatsbyIcon: file(relativePath: { eq: "gatsby-icon.png" }) {
        childImageSharp {
          fixed(width: 18, height: 18) {
            width
            height
            src: srcWebp
            srcSet: srcSetWebp
          }
        }
      }
    }
  `);

  return (<>
    <StyledFooter as='footer'>
      <strong>
        <Cspan color={theme.race === RACE.protoss ? '#000' : '#fff'}>
          {'</>'}
        </Cspan>
      </strong>
      &nbsp;&nbsp;{'with'}&nbsp;&nbsp;
      <img src={HeartIcon.publicURL} width={18} height={18} />
      &nbsp;&nbsp;{'&'}&nbsp;&nbsp;
      <Image fixed={{ ...GatsbyIcon.childImageSharp.fixed }} />
    </StyledFooter>
  </>);
}

export default Footer;


