import React from 'react'
import { useRef } from 'react'

const UserFeed = () => {


    return(
        <div className="w-1/2 overflow-auto h-auto">
            <div className="bg-red-200 flex justify-around items-center ">

                <div className="flex flex-col"> 
                        <i className="fas fa-user-circle fa-7x text-gray-400"></i>
                </div>

                <div className="justify-self-start">
                    <div className="text-2xl">Username</div>
                </div>

            </div>
            <div className="p-2 bg-red-200 flex justify-end">
                <button className="py-2 px-4 hover:shadow focus:outline-none border border-red-500 text-red-500 font-bold rounded-full bg-red-200 transition hover:bg-red-300 duration-200">Edit profile</button>
            </div>
            <div className="flex">
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non libero elit. Pellentesque posuere a nunc ac varius. Morbi interdum vestibulum neque, id viverra elit suscipit sit amet. Donec ut tellus malesuada, vulputate nulla nec, laoreet ex. 
                    Praesent eu magna facilisis arcu dignissim vulputate. Donec ut ipsum quis erat ullamcorper scelerisque. Proin dapibus nunc quis turpis porta dictum. Suspendisse nec egestas felis, sit amet consectetur felis. Nunc at dui ac dui faucibus luctus dictum vitae leo. Duis sit amet vestibulum tortor. 
                    
                </div>
            </div>
            <div>

            </div>
     </div>
    )

}


export default UserFeed;