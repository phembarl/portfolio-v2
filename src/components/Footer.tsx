import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <p>
        © Copyright {new Date().getFullYear()}. Built with Next.js by yours
        truly
      </p>
    </div>
  );
};

export default Footer;
