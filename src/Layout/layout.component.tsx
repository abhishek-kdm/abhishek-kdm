import React, { useState, useEffect } from 'react';
import './layout.style.css';

import Modal from '../components/__pure__/Modal/modal.component';
import InfoBox from '../components/__pure__/InfoBox/infoBox.component';
import WarpDoorSVGDefs from '../components/__pure__/Warpgate/WarpDoors/terran.warpdoors';

import { AppContext } from '../context';
import { GITHUB, THEME } from '../configs';
import { fetchJson, getBackground } from '../utils';
import { Cspan } from '../utils/components';
import GlobalSVGFilters from '../components/__pure__/SVG/Filters';


interface LayoutProps { }

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(THEME.terran);

  // github links and info etc.
  const [user, setUser] = useState<any>(null);
  const [repos, setRepos] = useState<any[]>([]);

  const [modalShow, setModalShow] = useState<boolean>(false);

  useEffect(() => {
    if (user === null) {
      fetchJson(GITHUB.user_url)
      .then((_user) => {
        setUser(_user);
        return fetchJson(_user.repos_url);
      })
      .then((repos) => { setRepos(repos); });
    }
  }, [user]);

  return (<>
    <AppContext.Provider value={{ theme, setTheme, setModalShow, user, repos }}>
      <div
        id={'page-wrapper'}
        style={{ backgroundImage: `url(${getBackground(theme)})` }}
      >
        <svg width={0} height={0}>
          <WarpDoorSVGDefs />
          <GlobalSVGFilters />
        </svg>

        {children}
        <Modal
          show={modalShow}
          closeFunc={() => { setModalShow(false); }}
        >
          <InfoBox animate={true} style={{ textAlign: 'center' }}>
            <div>
              <Cspan color={'white'}>{'`arrows`.'}</Cspan><br />
            </div>
            <div>
              To go faster in&nbsp;
              <Cspan color={'white'}>{'`space`'}</Cspan>
              , push it.<br />
            </div>
            <div>
              to&nbsp;
              <Cspan color={'white'}>{'`escape`'}</Cspan>
              , just do so.<br />
            </div>
          </InfoBox>
        </Modal>
      </div>
    </AppContext.Provider>
  </>);
}

export default ({ element }: { element: any }) => <Layout>{element}</Layout>;
