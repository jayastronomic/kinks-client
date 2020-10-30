import React from 'react';
import Left from '../components/home/Left'
import UserFeed from '../components/UserFeed'
import Right from '../components/home/Right'




const Profile = (props) => {
    return(
        <div className="flex">
            <Left history={props.history}/>
            <UserFeed />
            <Right />
        </div>
        
    )
}

export default Profile;