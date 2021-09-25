import React from 'react'

function LeftInfo({bg}) {
    return (
      <div className="">
        <div
          className={
            !bg
              ? "bg-gray-100 rounded-md p-3 mt-3"
              : "bg-white rounded-md p-3 mt-3 border border-gray-200 "
          }
        >
          <h1 className="text-sm ">
            <span className="text-blue-600">Gophic Community</span>{" "}
            <span className="font-bold text-sm leading-5">
              is a community of 60,456 amazing golang developers
            </span>
          </h1>
          <p className="text-xs sm:text-sm mt-3 leading-5">
            We're a place where coders share, stay up to date and grow their
            careers.
          </p>
          <div className="rounded-md bg-blue-600 p-2 mt-3 hover:bg-blue-700 ease-in duration-150">
            <p className="text-xs sm:text-sm text-center text-white cursor-pointer">
              Create a new account
            </p>
          </div>
          <p className="text-center text-sm mt-3 cursor-pointer text-blue-600">
            Log in
          </p>
        </div>
      </div>
    );
}

export default LeftInfo
