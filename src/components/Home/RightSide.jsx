import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import img from "../../assets/rightimg.png";
import { menuData } from '../Header/Right/menuData';

function RightSide() {
    return (
      <div className="hidden md:block md:col-span-1 md:mt-3">
        <div className="bg-gray-50 p-4 border border-gray-200 rounded-md">
          <figure className=" overflow-hidden rounded-md">
            <img src={img} alt="" className="" />
          </figure>
          <p className="mt-3 text-sm">
            {" "}
            <span className="text-blue-600">GOphic</span> is a community
            dedicated to discussing and discovering the open source community
            software that powers DEV.
          </p>
          <div className="flex space-x-1 items-center mt-2">
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-blue-400 fa-xs"
            />
            <p className="text-sm">Join</p>
          </div>
        </div>
        <div className="mt-3 bg-gray-50 rounded-md">
          <div className="p-3 flex items-center justify-between border-b-2 border-gray-100">
            <h1>Listing</h1>
            <p className="text-xs text-blue-600">See all</p>
          </div>
          {menuData.map((data) => (
            <div key={data.id} className="group p-3 border-b-2 border-gray-100 text-sm hover:bg-white cursor-pointer">
              <h1 className="group-hover:text-blue-800">
               {data.title}
              </h1>
              <p className="text-xs mt-2 text-gray-600">{ data.category}</p>
            </div>
          ))}
          <div className="p-3 text-center text-xs">
            <p>Create a Listing</p>
          </div>
        </div>
      </div>
    );
}

export default RightSide
