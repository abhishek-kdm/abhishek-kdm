import styled from 'styled-components';

const locals = { borderRadius: '10px' };

const StyledNav = styled.nav`
  border-radius: 4px;

  ul {
    padding: 0;
    outline: none;
    list-style-type: none;
    list-style-position: inside;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    border-bottom-left-radius: ${locals.borderRadius};
    border-bottom-right-radius: ${locals.borderRadius};
  }

  ul li {
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 10px;
    padding-bottom: 10px;

    box-sizing: border-box;
    margin: 7.5px;
  }
`;

export default StyledNav;
