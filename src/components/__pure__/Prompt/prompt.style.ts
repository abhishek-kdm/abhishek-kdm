import styled from 'styled-components';

const locals = {
  color: 'rgb(192, 192, 192)',
}

const StyledPrompt = styled.span`
  text-align: left;
  margin-bottom: 1rem;
  font-size: .85rem;
`;

export const PromptUser = styled.span`
  color: ${locals.color};
  font-weight: 700;
`;

export const PromptHostname = styled.span`
  color: ${locals.color};
  font-weight: 700;
`;

export default StyledPrompt;

