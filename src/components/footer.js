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
    <br></br>

  </footer>
  );
};

export default Footer;
