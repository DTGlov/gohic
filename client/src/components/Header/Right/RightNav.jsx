import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

function RightNav() {
    return (
      <div className="flex items-center space-x-3 mr-8">
        <FontAwesomeIcon
          icon={faSearch}
          className="fa-lg text-gray-700 cursor-pointer sm:hidden"
        />
        <div className="bg-blue-600  rounded-md p-3 cursor-pointer hover:bg-blue-700 ease-in duration-150">
          <p className="text-white text-xs">Create account</p>
        </div>
      </div>
    );
}

export default RightNav
