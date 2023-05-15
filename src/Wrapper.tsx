import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '@/Styles/global.style';

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

const Wrapper: React.FC<React.HTMLAttributes<HTMLElement>> = ({ children }) => {
    const fontFaces = [
        { face: 'amstradpc1512-2y', url: '/fonts/amstradpc1512-2y.woff2', ext: 'woff2' },
        { face: 'ibm_bios-2y', url: '/fonts/ibm_bios-2y.woff2', ext: 'woff2' },
        { face: 'ibm_vga8', url: '/fonts/ibm_vga8.woff2', ext: 'woff2' },
        { face: 'sperrypc8x16', url: '/fonts/sperrypc8x16.woff2', ext: 'woff2' },
        { face: 'toshibasat8x14', url: '/fonts/toshibasat8x14.woff2', ext: 'woff2' },
    ];

    return (
        <>
            <GlobalStyle fontFaces={fontFaces} />
            <StyledWrapper>{children}</StyledWrapper>
        </>
    );
};

export default Wrapper;
