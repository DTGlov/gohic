import React from "react";
import { faCommentAlt, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { feedData } from "./FeedData";

function Feed() {
  return (
    <div className="grid col-span-2 mt-3">
      <div className="">
        <h1 className="font-bold">POSTS</h1>
        {feedData.map((data) => (
           <div className="mt-3 border border-gray-200 bg-white p-3 rounded-md" key={data.id}>
          <div className="flex space-x-1">
            <figure className="">
              <img src={data.profile} alt="" className="w-12 h-12 rounded-full object-cover"/>
            </figure>
            <div>
                <h1 className="text-xs">{data.name}</h1>
                <p className="text-xs mt-2">{ data.date}</p>
            </div>
          </div>
          <div className="ml-0 md:ml-10">
            <div>
              <h1 className="font-bold text-sm md:text-xl ml-3">
               {data.heading}
                </h1>
                <div className="flex space-x-2 ml-3">
                {data.tags.map((tag) => (
                   <p className="text-xs text-gray-600 mt-3" key={tag.id}>
                    #{tag.tech}
              </p>
                ))}
             </div>
            </div>
            <div className="mt-3 flex justify-between ml-3">
              <div className="flex space-x-4">
                <div className="flex space-x-2 items-center">
                  <FontAwesomeIcon icon={faHeart} />
                  <p className="text-xs">{data.reactions} reactions</p>
                </div>
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faCommentAlt} />
                  <p className="text-xs">{data.comments} comments</p>
                </div>
              </div>
              <div className="flex space-x-2 items-center">
                <p className="text-xs">{data.read} min read</p>
                <p className="bg-gray-200 p-2 text-xs rounded-md cursor-pointer hover:bg-gray-300 ease-in duration-150">Save</p>
              </div>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}

export default Feed;
