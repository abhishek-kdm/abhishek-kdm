import * as React from 'react';


const ZergLogo: React.FC<LogoProps> = ({
  color = '#FFFFFF07',
  asImage = false,
  ...rest
}) => {

  if (asImage) {
    // @ts-ignore
    rest['xmlns'] = 'http://www.w3.org/2000/svg';
  }

  return (
    <svg {...rest} viewBox='0 0 90 100'>
      <g>
        <path fill={color} d='M28.12,100c-.93-.24-1.9-.22-2.84-.38a26.51,26.51,0,0,1-9.71-3.22,13.3,13.3,0,0,1-5-5.75c.29.27.58.55.87.81s.59.55.91.79c4.34,3.14,9,4.19,14.12,2.15A7.16,7.16,0,0,0,31,87.54c-.18-5.13-5.51-8.91-10.34-6.93a4.88,4.88,0,0,0-2.85,4.68,7.5,7.5,0,0,0,1,3.44c.08.14.23.25.2.48a6.85,6.85,0,0,1-2.25-2,16.35,16.35,0,0,1-3.6-7.77,8.7,8.7,0,0,1,.14-3.09c.1-.51.2-.77.79-.39a4.65,4.65,0,0,0,2.15.68,3.38,3.38,0,0,0,3.52-2.16,3.88,3.88,0,0,0-.59-4.58c-2.43-2.45-5.66-2.38-7.64.6a17.17,17.17,0,0,0-2.78,8.76c0,.56-.05,1.12-.08,1.76C6.58,78,5.85,65.65,7.51,63a5.68,5.68,0,0,0,6.89-.06,4.18,4.18,0,0,0,1.28-4.43,3.93,3.93,0,0,0-3.26-2.91c-3.18-.74-5.41.73-7.24,3.12A22.87,22.87,0,0,0,2.4,63.6c-.07.15-.13.31-.21.46s-.06,0-.15.08a23.61,23.61,0,0,1,6.1-17.39A5.15,5.15,0,0,0,13.06,50a4.11,4.11,0,0,0,3.66-2.6,3.45,3.45,0,0,0-.42-3.91c-1.64-2.21-4.12-2.94-7-2a15.22,15.22,0,0,0-6.42,4.12L.26,48.32c.87-6,6.59-15.08,15.79-17.08A12.15,12.15,0,0,0,15.68,34c0,.28,0,.55,0,.83A2.34,2.34,0,0,0,17.23,37a5.27,5.27,0,0,0,5.18-.47,3.53,3.53,0,0,0,1.37-3.24c0-2.58-1.52-4.05-3.75-4.94a21.44,21.44,0,0,0-15.09-.63,1.71,1.71,0,0,1-.3.09.47.47,0,0,1-.17,0A29,29,0,0,1,10,23.31,21.59,21.59,0,0,1,18.9,19.9a24.15,24.15,0,0,1,9.12.41c.52.15.73.29.34.82a6.78,6.78,0,0,0-.77,1.52,3.85,3.85,0,0,0,2.69,5.13,5.3,5.3,0,0,0,4.53-1,3.56,3.56,0,0,0,1.31-2.45,11.57,11.57,0,0,0-.71-5.4c-1.13-3.56-3.63-5.76-6.95-7.23a28.77,28.77,0,0,0-8.37-1.93,4.38,4.38,0,0,1,1.63-.38,43.21,43.21,0,0,1,9.76-.82,26,26,0,0,1,9.26,1.76,15,15,0,0,1,5.94,4.41l.24.34c-.65.13-1.26.21-1.86.36a4.33,4.33,0,0,0-2.66,6.67,3.89,3.89,0,0,0,3.54,1.58,6.94,6.94,0,0,0,5.61-3.2,11.35,11.35,0,0,0,2.05-7.23A11.64,11.64,0,0,0,50.49,5,47.42,47.42,0,0,0,45.55.17a7.91,7.91,0,0,1,2.19.67,39.62,39.62,0,0,1,14.49,10A17.06,17.06,0,0,1,66,19.43L64,19.28c-4.45-.35-5.52,2.83-4.93,5.92.53,2.8,2.95,3.63,5.6,3.32A5,5,0,0,0,68.33,26a16.91,16.91,0,0,0,2.92-11.4,23.21,23.21,0,0,0-1.64-6.09,2.4,2.4,0,0,1,1.47.8,14.33,14.33,0,0,1,2.73,3.47,35.28,35.28,0,0,1,4.68,11.07,23.37,23.37,0,0,1,.18,8c-.06.4-.18.62-.64.36a9.58,9.58,0,0,0-1.83-.69c-1.66-.52-4.29.21-5.17,1.85a4.16,4.16,0,0,0,.45,5,4.47,4.47,0,0,0,5.47.69,12.9,12.9,0,0,0,5.4-7,34.15,34.15,0,0,0,1.29-5.73,5.78,5.78,0,0,1,.14-.63,10.12,10.12,0,0,1,1,3.47A40.94,40.94,0,0,1,84.51,41,21.43,21.43,0,0,1,83,45.91c-.39.9-.4.88-1.27.54a17.47,17.47,0,0,0-1.67-.59,4.1,4.1,0,0,0-4.3,1.32c-1.56,1.63-.6,5.23,2.24,5.76A6.29,6.29,0,0,0,83.82,51a24.61,24.61,0,0,0,4.23-5.89c.58-1.07,1.13-2.15,1.73-3.22a30.31,30.31,0,0,1-.4,4.57,51.44,51.44,0,0,1-10.3,23,75.33,75.33,0,0,1-10.91,11.1l-3.63,3.17a.58.58,0,0,1-.66.19A115.27,115.27,0,0,1,48.5,78.27a35,35,0,0,1-11.83-8.93,17.3,17.3,0,0,1-4-11.76,15.91,15.91,0,0,1,1.93-8.09c2.53-4.31,7.11-7.11,12.41-6.34a7.12,7.12,0,0,1,5.49,3.92,9,9,0,0,1,.57,7.87A10.66,10.66,0,0,1,49.44,59,15.28,15.28,0,0,0,50,56.62a4.12,4.12,0,0,0-2.83-4.83c-3.22-.76-7.09.58-7.16,5.54-.05,3.43,1.45,5.65,4.74,7a11.38,11.38,0,0,0,14-3.74A14.94,14.94,0,0,0,61,46.13c-1.74-5.4-5.2-9.3-10.69-11.14a13.08,13.08,0,0,0-8.58.17,23.92,23.92,0,0,0-13,10,23,23,0,0,0-3.66,15.52A26.79,26.79,0,0,0,27,67.31a39.4,39.4,0,0,0,6.31,10.53,59.84,59.84,0,0,0,5.5,5.06,36,36,0,0,0,14,7.66l.21.09a19.69,19.69,0,0,1-5.22,4.54,35,35,0,0,1-13.59,4.68c-.27,0-.58-.1-.83.13Z' transform='translate(0.03 -0.01)'/>
      </g>
    </svg>
  );
}
 
export default ZergLogo;




