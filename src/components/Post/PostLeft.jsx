import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faDownload, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

function PostLeft({likes}) {
    return (
        <div className="col-span-1 ">
            <div className="flex flex-col space-y-5 items-end mt-10 mr-3">
                <div className="flex flex-col items-center">
                    <FontAwesomeIcon icon={faHeart} className="fa-lg" />
                    <p>{likes}</p>
                </div>
                <div className="flex flex-col items-center">
                    <FontAwesomeIcon icon={faDownload} className="fa-lg"/>
                    <p>3</p>
                </div>
                <div className="flex flex-col items-center">
                    <FontAwesomeIcon icon={faBookmark} className="fa-lg"/>
                    <p>0</p>
                </div>
            </div>
        </div>
    )
}

export default PostLeft
