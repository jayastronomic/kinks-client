import React from 'react'
import KinksContainer from '../../containers/KinksContainer'
import arr from '../../data'

const Feed = (props) => {
    return(
        <div className="feed overflow-auto  min-w-1/2 w-1/2 h-auto">
            <KinksContainer kinks={props.posts}/>
        </div>
    )
}

export default Feed;