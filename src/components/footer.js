import React from 'react';
import "./layout.css"



const Footer = () => {
  return (
    <footer
    style={{
      marginTop: `var(--space-5)`,
      fontSize: `var(--font-sm)`,
    }}
  >
    
    <p>© {new Date().getFullYear()} &middot; 
    {` `} bloggatsby</p>
<a className='a' href="#">footer</a>

  </footer>
  );
};

export default Footer;
