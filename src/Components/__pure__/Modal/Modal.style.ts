import styled from 'styled-components';
import InfoBox from '@/Components/__pure__/Infobox/Infobox.style';
import { ButtonCSS } from '@/Styles/global.style';

const StyledModal = styled.dialog`
    background-color: rgba(50, 50, 50, 0.5);
    backdrop-filter: blur(5px);

    &[open] {
        border: none;
        display: flex;
        justify-content: center;
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
`;

export const ModalContent = styled(InfoBox)`
    color: var(--color-primary);
    background-color: var(--color-bg-secondary);
    border: 1px solid var(--color-primary);
    padding: 2rem 1rem 1rem;
    position: absolute;
    margin-top: 15vh;

    display: flex;
    flex-direction: column;
`;

export const ModalCloseButton = styled.button`
    ${ButtonCSS}
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 10px;
    align-self: flex-end;
    color: var(--color-primary);
    background-color: transparent;
`;

export default StyledModal;
