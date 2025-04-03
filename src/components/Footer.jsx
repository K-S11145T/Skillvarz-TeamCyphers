import React from "react";

const Footer = () => {
  return (

    <div className='relative min-h-[120vh] '
      style={{
        clipPath: 'polygon(0% 0%, 100% -35%, 100% 100%, 0% 100%)'
      }}>
      <div className="fixed h-[100vh] w-full bottom-0">
      <div className="w-full h-screen bg-zinc-900 flex items-center justify-center text-9xl text-white">
        <h1>Footer</h1>
      </div>
        
      </div>

    </div>
  );
};

export default Footer;
