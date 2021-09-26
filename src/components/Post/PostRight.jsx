import React from 'react'
import PostRightComp from './PostRightComp';

function PostRight({profile,name,color,bio,joined,location,education,work}) {
    return (
        <div className="col-span-2">
            <div className="border border-gray-300 rounded-md bg-gray-50 w-10/12 mx-auto">
                <div className={`h-8 rounded-tr-md rounded-tl-md ${color}`}></div>
                <div className="flex items-end relative bottom-5">
                    <figure>
                        <img src={profile} alt="profile" className="w-12 h-12 rounded-full object-cover" />
                    </figure>
                    <h1 className="">{ name}</h1>
                </div>
                <div className="flex justify-center">
                    <p className={` ${color} w-2/3 text-center p-2 text-white rounded-md`}>Follow</p>
                </div>
                <div className="p-4">
                    <PostRightComp title="Bio" dets={ bio}/>
                    <PostRightComp title="Location" dets={location}/>
                    <PostRightComp title="Education" dets={education}/>
                    <PostRightComp title="Work" dets={work}/>
                    <PostRightComp title="Joined" dets={joined}/>
                </div>
            </div>
            {/* <div className="mt-3 bg-red-300">
                <h1>This the second place</h1>
         </div> */}
        </div>
    )
}

export default PostRight;
