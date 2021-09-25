import React from "react";
import { useMediaQuery } from 'react-responsive';
import { slide as Menu } from "react-burger-menu";
import {SCREENS} from '../../../helpers/responsive'
import { menuStyles } from "./menuStyles";
import LeftMenu from "./LeftMenu";
import LeftInfo from "./LeftInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function LeftNav() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

    return isMobile ? (
      <div className="">
        <Menu left styles={menuStyles}>
          <div className="shadow-md">
            <h1 className="text-base p-4 font-bold">Gophic Community</h1>
          </div>
          <LeftInfo />
          <LeftMenu />
        </Menu>
      </div>
    ) : (
      <div className="flex items-center space-x-2 ml-4">
        <div className="bg-black text-center rounded-md ml-8 py-2">
          <h1 className="p-2 text-white text-xs">GOphic</h1>
        </div>
        <div className="border-2 border-gray-300 rounded-md p-2">
            <input type="text" className="outline-none" placeholder="Search..." />
            <FontAwesomeIcon icon={ faSearch} className=""/>
        </div>
      </div>
    );
}

export default LeftNav;
