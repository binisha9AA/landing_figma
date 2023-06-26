import React from 'react';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  return (
    <header className="site_header">
      <div className="h-group px-[95px] py-10 bg-[#F0F8F8]">
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
