import React from 'react'

function PostRightComp({title,dets}) {
    return (
                <div className="mt-2">
            <h1 className="text-gray-500">{ title}</h1>
                        <p className="text-sm">{dets}</p>
                    </div>
    )
}

export default PostRightComp
