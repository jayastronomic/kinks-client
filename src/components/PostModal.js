import React, { Component } from 'react'

export default class PostModal extends Component {




    render(){
        console.log(this.props)
        if(!this.props.show){
            return null
        } else {
            return(
                <form>
                    <div  className="bg-black bg-opacity-75 absolute inset-0 flex  justify-center">

                        <div className="p-10 flex flex-col w-6/12 ">
                            <div className="h-10 bg-red-400 w-full rounded-t-lg border-b-2 border-red-500">
                                <button className="focus:outline-none h-full pl-2 pb-2 text-red-600 text-3xl" onClick={this.props.toggleModal}>×</button>
                            </div>
                            <div className="pl-10 pt-2 pr-4 bg-red-200">
                                <textarea className="focus:outline-none bg-red-200 w-full h-48 resize-none border-b border-red-400 text-2xl text-red-600" placeholder="What's your kink?"/>
                            </div>
                            <div className="flex justify-between pl-10 pr-6 pb-2 bg-red-200 rounded-b-lg" >
                                <div><button className="far fa-image fa-2x focus:outline-none"></button></div>
                            
                                <div><input type="submit" value="Post" className="cursor-pointer transition hover:opacity-75 duration-300  py-2 px-6 text-white bg-red-500 rounded-full font-bold focus:outline-none"/></div>
                            </div>
                        </div>
                    
                    
                    </div>
                </form>
            )   
        }
    }
}
