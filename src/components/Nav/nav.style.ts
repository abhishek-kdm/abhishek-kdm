import styled from 'styled-components';


const locals = { borderRadius: '10px' };

const BackgroundPattern = (t: string) => {
  return `<svg xmlns='http://www.w3.org/2000/svg' width='112' height='92' viewBox='0 0 112 92'><g fill='${t}' fill-opacity='0.4'><path fill-rule='evenodd' d='M72 10H40L16 20H0v8h16l24-14h32l24 14h16v-8H96L72 10zm0-8H40L16 4H0v8h16l24-6h32l24 6h16V4H96L72 2zm0 84H40l-24-6H0v8h16l24 2h32l24-2h16v-8H96l-24 6zm0-8H40L16 64H0v8h16l24 10h32l24-10h16v-8H96L72 78zm0-12H40L16 56H0v4h16l24 14h32l24-14h16v-4H96L72 66zm0-16H40l-24-2H0v4h16l24 6h32l24-6h16v-4H96l-24 2zm0-16H40l-24 6H0v4h16l24-2h32l24 2h16v-4H96l-24-6zm0-16H40L16 32H0v4h16l24-10h32l24 10h16v-4H96L72 18z'/></g></svg>`;
}

const StyledNav = styled.nav`
  box-shadow: var(--neumorphic-shadow-small);
  border-radius: 4px;
  background-image: ${({ theme }) => `url("data:image/svg+xml,${
    encodeURIComponent(BackgroundPattern(theme.patternColor))
    }");`}

  & ul {
    margin: 0;
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

  & ul li {
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
    margin: 17.5px 7.5px;
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;

    box-shadow: var(--neumorphic-shadow-small);
    border: 1px soid var(--color-bg-primary);
    border-radius: 6px;
    background-color: var(--color-bg-primary);
  }

  & ul li.active {
    box-shadow: var(--neumorphic-shadow-small-active);
  }

  & ul li:active {
    box-shadow: var(--neumorphic-shadow-small-active);
    transform: scale(.95);
  }
`;

export default StyledNav;
