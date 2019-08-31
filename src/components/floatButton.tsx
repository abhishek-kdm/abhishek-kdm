import * as React from 'react';
import { RollingEyes } from './ui-components';

const { useEffect } = React;




const FloatButton = (props: FloatButtonProps): JSX.Element => {

  const Tooltip = ({ text }: { text: string }) => (<>
    <span className='tooltip-text'>{text}</span>
  </>);

  useEffect(() => {
    // @ts-ignore
    $("html").mousemove((event: any) => {
      // @ts-ignore
      const eye = $(".eye");
      const x = (eye.offset().left) + (eye.width() / 2);
      const y = (eye.offset().top) + (eye.height() / 2);
      const rad = Math.atan2(event.pageX - x, event.pageY - y);
      const rot = (rad * (180 / Math.PI) * -1) + 180;
      eye.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
      });
    });
  }, []);

  return (<>
    <button
      onClick={props.onClick}
      className={`${props.className || ''} float tooltip-parent`}
    >
      {props.tooltip &&  <Tooltip text={props.tooltip} />}
      <i style={{ color: '#00E640' }} className="fa fa-3x fa-github"></i>
      <RollingEyes />
    </button>
  </>);
}


export default FloatButton;
