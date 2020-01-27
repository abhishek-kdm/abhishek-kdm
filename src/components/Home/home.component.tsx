import React from 'react';
import './home.style.css';
import Nav from '../Nav/nav.component';
import { NAVBAR_ITEMS } from '../../constants';


interface HomeProps { }
 
const Home: React.SFC<HomeProps> = () => {
  return (<>
    <div id={'home'} className={'container'}>
      <Nav>
        {(ulProps, liProps) => (
          <ul {...ulProps()}>
            {NAVBAR_ITEMS.map((item, key) => (
              <li key={key} {...liProps()}>
                <a href={item.link} target={'_blank'}>
                  {`./${item.label}`}
                </a>
              </li>
            ))}
          </ul>
        )}
      </Nav>
    </div>
  </>);
}
 
export default Home;
