import React from 'react';
import './social.style.css';


interface SocialProps { }
 
const Social: React.FC<SocialProps> = () => {
  return (<>
    <div className='social'>
      {'This is where all my social network links would show up.'}
    </div>
  </>);
}
 
export default Social;
