import React, { useContext } from 'react';
import StyledOnline, { MiscLinks } from './Online.style';
import { SocialLinks } from './Online.utils';

import { GlobalContext } from '@/Utils';
import { Anchor } from '@/Styles/global.style';

interface OnlineProps extends React.HTMLAttributes<HTMLElement> { }

const Online: React.FC<OnlineProps> = () => {
    const { repos } = useContext(GlobalContext);
    return (
        <>
            <StyledOnline>
                <dl>
                    <dt>Live Web Apps</dt>
                    {repos
                        .filter(({ isLive }) => isLive)
                        .map((repo, key) => (<>
                            <dd key={`${repo.id}-${key}`}>
                                <Anchor target='_blank' href={`/${repo.name}`}>
                                    {repo.name}
                                </Anchor>
                                <sub>({repo.description})</sub>
                            </dd>
                        </>))
                    }
                </dl>
                <hr />
                <MiscLinks>
                    {SocialLinks.map((props, index) => (
                        <li key={`social-link-${index}`}>
                            <Anchor target='_blank' {...props} />
                        </li>
                    ))}
                </MiscLinks>
            </StyledOnline>
        </>
    );
};

export default Online;
