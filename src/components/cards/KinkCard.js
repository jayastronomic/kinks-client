import React from 'react'


const KinkCard = (props) => {
    return(
        <div className=" hover:bg-opacity-75 transition duration-300  bg-red-200 flex justify-center border border-white w-full">
            <div className="flex-col space-y-4 p-10">
                <div className="flex justify-center items-center">
                        <img className="border border-white rounded-2xl" src={props.img_url} />
                </div>
                <div className="pt-8 justify-center items-center">
                    {props.description}
                </div>
            </div>
        </div>
    )
    
}


export default KinkCard;
