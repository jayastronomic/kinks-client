import React from 'react'

const Logout = () => {
    return(
        <div className="shadow-lg border border-white border-solid rounded-3xl mt-24 mx-10">
            <div className=" flex justify-start items-center space-x-2 px-6 py-2 h-auto border-b-2 border-red-200">
                <i className="fas fa-user-circle fa-3x"></i>
                <div className="text-lg">@Username</div>
            </div>
            <div className="flex justify-start items-center px-6 py-2 h-auto " >
                <div>Log out @Username</div>
            </div>
        </div>
    )
}

export default Logout;