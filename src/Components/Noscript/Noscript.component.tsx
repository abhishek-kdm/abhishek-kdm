import React from 'react';
import StyledNoscript, { Header } from './Noscript.style';

import About from '@/Components/About/About.component';
import Online from '@/Components/Online/Online.component';
import ContactInfo from '@/Components/ContactInfo/ContactInfo.component';

const Noscript: React.FC = () => {
    return (
        <StyledNoscript>
            <Header>
                <div>
                    <About />
                    <Online />
                </div>
                <small>
                    <hr className='inverted' />
                    <ContactInfo />
                </small>
            </Header>
        </StyledNoscript>
    );
};

export default Noscript;
