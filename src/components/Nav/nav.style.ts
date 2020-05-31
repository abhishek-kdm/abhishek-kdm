import styled from 'styled-components';


const locals = { borderRadius: '10px' };

const StyledNav = styled.nav`
  box-shadow: var(--neumorphic-shadow-large);
  border-radius: 4px;

  ul {
    margin: 10px 0;
    padding-left: 15px;
    padding-right: 15px;
    outline: none;
    list-style-type: none;
    list-style-position: inside;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    border-bottom-left-radius: ${locals.borderRadius};
    border-bottom-right-radius: ${locals.borderRadius};
  }

  ul li {
    -webkit-user-select: none;
    -moz-user-select:    none;
    user-select:         none;

    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 10px;
    padding-bottom: 10px;

    box-sizing: border-box;
    cursor: pointer;
    margin: 7.5px;
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;

    box-shadow: var(--neumorphic-shadow-small);
    border: 1px soid var(--color-bg-primary);
    border-radius: 6px;
    background-color: var(--color-bg-primary);
  }

  ul li.active {
    box-shadow: var(--neumorphic-shadow-small-active);
  }

  ul li:active {
    box-shadow: var(--neumorphic-shadow-small-active);
    transform: scale(.95);
  }
`;

export default StyledNav;
