import React, { useState, useContext, useCallback } from 'react';
import StyledTaskbar, {
    MinimizeSection,
    MinimizedWindow,
    Divider,
    ContactButton,
} from './Taskbar.style';

import Modal from '@/Components/__pure__/Modal/Modal.component';
import { IconFile, IconDirectory } from '@/Components/__pure__/File/File.utils';
import ContactInfo from '@/Components/ContactInfo/ContactInfo.component';
import { GlobalContext } from '@/Utils';

interface TaskbarProps extends React.HTMLAttributes<HTMLElement> { }

const Taskbar: React.FC<TaskbarProps> = (props) => {
    const { windowState, updateWindowState, raiseWindow } = useContext(
        GlobalContext
    ) as ScreenState;
    const [modalShow, setModalShow] = useState<boolean>(false);

    const handleClick = useCallback(
        (windowId: WindowID) => {
            raiseWindow(windowId);
            updateWindowState((state) => ({
                ...state,
                windows: state.windows.map((w) =>
                    w.windowId === windowId ? { ...w, minimized: false } : w
                ),
            }));
        },
        [updateWindowState, raiseWindow]
    );

    return (
        <>
            <StyledTaskbar {...props}>
                <MinimizeSection>
                    {windowState.windows.map(({ windowId, fileType, name }) => (
                        <MinimizedWindow
                            onClick={() => handleClick(windowId)}
                            key={`min-window-${windowId}`}
                        >
                            {fileType === 'dir' ? <IconDirectory /> : <IconFile />}
                            {name}
                        </MinimizedWindow>
                    ))}
                </MinimizeSection>
                <Divider />
                <ContactButton onClick={() => setModalShow(true)}>
                    contact
                </ContactButton>
            </StyledTaskbar>

            <Modal
                show={modalShow}
                closeFunc={() => setModalShow(false)}
                style={{ maxWidth: '375px' }}
            >
                <ContactInfo />
            </Modal>
        </>
    );
};

export default Taskbar;
