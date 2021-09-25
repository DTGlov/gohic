import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function MenuList({title,icon,margin}) {
    return (
      <div>
            
        <ul className=" ml-3 mt-2">
            <li className="flex mt-3 items-center">
              <FontAwesomeIcon icon={icon} className={margin} />
              <span className="text-xs">{title}</span>
            </li>
        </ul>
      </div>
    );
}

export default MenuList
