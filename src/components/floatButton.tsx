import * as React from 'react';

const { useEffect } = React;

interface IFloatButtonProps
  extends React.HTMLAttributes<HTMLInputElement>
{
  tooltip: string
}

const FloatButton = (props: IFloatButtonProps): JSX.Element => {

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

  return (
    <button
      onClick={props.onClick}
      className={`${props.className || ''} float tooltip-parent`}
    >
      { props.tooltip && 
        <span className='tooltip-text'>{props.tooltip}</span>
      }
      <i style={{ color: '#00E640' }} className="fa fa-3x fa-github"></i>
      <span className="eye-container">
        <span className="eye"></span>
        <span className="eye"></span>
      </span>
    </button>
  )
}


export default FloatButton;
