import React from 'react';
import RightNav from './Right/RightNav';
import LeftNav from './Left/LeftNav';

function Header() {
    return (
      <header className="h-20 flex flex-col justify-center bg-white shadow-md sticky top-0 z-50">
        <nav className="flex justify-between items-center">
         <LeftNav/>
         <RightNav/>
        </nav>
      </header>
    );
}

export default Header
