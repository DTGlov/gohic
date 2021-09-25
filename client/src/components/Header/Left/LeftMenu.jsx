import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { menuItems, otherItems, socialItems } from './menuItems';
import MenuList from './MenuList';


function LeftMenu() {
    return (
      <aside className="p-3">
        <h1 className="text-base font-bold mt-4">Gophic Community</h1>
        {menuItems.map((item) => (
          <MenuList
            key={item.id}
            icon={item.icon}
            title={item.title}
            margin={item.margin}
          />
        ))}
        <h1 className="mt-4 text-base font-bold">Other</h1>
        {otherItems.map((item) => (
          <MenuList
            key={item.id}
            icon={item.icon}
            title={item.title}
            margin={item.margin}
          />
        ))}
        <hr className="mt-5 text-gray-400" />
        <ul className="flex space-x-4 ml-3 items-center mt-5">
          {socialItems.map((item) => (
            <li key={item.id}>
              <FontAwesomeIcon
                icon={item.icon}
                className="fa-lg text-gray-400"
              />
            </li>
          ))}
        </ul>
      </aside>
    );
}

export default LeftMenu
