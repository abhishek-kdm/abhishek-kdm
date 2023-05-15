import React, { useEffect, useState, useContext } from 'react';
import StyledModal, { ModalContent, ModalCloseButton } from './Modal.style';
import { GlobalContext } from '@/Utils';

interface ModalProps extends React.ComponentProps<"dialog"> {
    close: () => void;
}

const Modal: React.FC<ModalProps> = ({
    children,
    close,
    ref,
    ...props
}) => {
    const [zIndex, setZIndex] = useState<number>(0);
    const { windowState } = useContext(GlobalContext) as ScreenState;

    useEffect(() => {
        setZIndex((index) =>
            props.open
                ? windowState.windows.reduce(
                    (n, { style }) => Math.max(n, Number(style?.zIndex || 0)),
                    999
                )
                : index
        );

        if (props.open) {
            const handler = ({ key }: KeyboardEvent) =>
                key.toLowerCase() === 'escape' && close();

            document.addEventListener('keydown', handler);
            return () => document.removeEventListener('keydown', handler);
        }
    }, [windowState.windows, props.open, close]);

    return (
        <>
            <StyledModal style={{ zIndex }} open={props.open}>
                <ModalContent animate {...props}>
                    <ModalCloseButton onClick={close}>&times;</ModalCloseButton>
                    {children}
                </ModalContent>
            </StyledModal>
        </>
    );
};

export default Modal;
