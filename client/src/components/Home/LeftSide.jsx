import React from 'react'
import LeftInfo from '../Header/Left/LeftInfo';
import LeftMenu from '../Header/Left/LeftMenu';

function LeftSide() {
    return (
      <div className="hidden md:grid md:col-span-1">
        <div className="">
          <LeftInfo bg={true} />
          <LeftMenu />
        </div>
      </div>
    );
}

export default LeftSide
