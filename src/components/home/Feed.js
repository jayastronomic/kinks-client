import React from 'react'
import KinksContainer from '../../containers/KinksContainer'
import arr from '../../data'

const Feed = () => {
    return(
        <div className="feed overflow-auto  min-w-1/2 w-1/2 h-auto">
            <KinksContainer kinks={arr}/>
        </div>
    )
}

export default Feed;