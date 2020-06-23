import styled from 'styled-components';

export const HeartContainer = styled.div`
  --heart--container-size: 1.1rem;

  width: var(--heart--container-size);
  height: var(--heart--container-size);

  display: grid;
  align-items: flex-end;
  justify-content: center;
`;

const StyledHeart = styled.div`
  --heart--color: #DC3545;
  --heart--size: calc(var(--heart--container-size) / 2.2);

  width: var(--heart--size);
  height: var(--heart--size);
  position: relative;

  &::before,
  &::after {
    --heart--y-translate: calc(-1 * (var(--heart--size) / 2.79));

    content: '';
    border-top-left-radius: var(--heart--size);
    border-top-right-radius: var(--heart--size);
    left: 0;
    bottom: 0;
    position: absolute;
    width: 100%;
    height: 170%;
    background-color: var(--heart--color);
  }

  &::before {
    transform: rotate(45deg) translateY(var(--heart--y-translate));
  }

  &::after {
    transform: rotate(-45deg) translateY(var(--heart--y-translate));
  }
`;

export default StyledHeart;

