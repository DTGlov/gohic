import React from 'react'
function Middle({ heading, profile, name, tags,date, read, description, image })
{
    return (
        <div className="col-span-3">
            <div className="border rounded-md overflow-hidden">
                <figure>
                    <img src={image} alt="" />
                </figure>
                <div className="p-5">
                    <h1 className="text-3xl font-bold">{heading}</h1>
                    <div className="flex space-x-2">
                    {tags && tags.map((tag) => (
                        <p className="text-xs text-gray-600 mt-3" key={tag.id}>
                            #{tag.tech}
                        </p>))}
                    </div>
                    <div className="flex space-x-2 text-xs items-center">
                         <figure>
                        <img src={profile} alt="profile" className="w-12 h-12 rounded-full object-cover" />
                        </figure>
                        <p>{name}</p>
                        <p>{date}</p>
                        <p>&#8226; {read } mins read</p>
                    </div>
                  
                    <div className="mt-3">
                        <p className='text-sm'>{ description}</p>
                    </div>
                </div>
          
           </div>
         
        </div>
    )
}

export default Middle
