import React, { forwardRef } from 'react';
const Footer = forwardRef((props, ref) => {
  return (
    <div>
      <div className='footer'>
        <p>Anupriya Jayaraj</p>
        <p>Email: anupriyaj258@gmail.com</p>
        <p>Phone: 9789044951</p>
        <p>Location: Chennai</p>
      </div>
      <div>
        <p className='footer-base'>&copy; 2023 Portfolio</p>
      </div>
    </div>
  );
});

export default Footer;
