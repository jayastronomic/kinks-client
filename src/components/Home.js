import React, { Component } from 'react'
import KinksContainer from '../containers/KinksContainer.js'
import Logout from './Logout'
import Left from './home/Left'
import Feed from './home/Feed'
import Right from './home/Right'

import { connect } from 'react-redux'
import { fetchPostsSuccess } from '../actions/postActions'

const API = 'http://localhost:3001/api/v1/posts'


class Home extends Component {

    

    componentDidMount(){
        fetch(API, {credentials: 'include'})
        .then(resp => resp.json())
        .then(obj => {
            if (obj.status === "SUCCESS") {
                this.props.fetchPostsSuccess(obj)
            }
        })
        .catch(err => console.log(err))
    }







    render(){ 
        console.log(this.props)
        return(
            
            <div className="h-screen flex">
                <Left history={this.props.history} />
                <Feed posts={this.props.posts}/>
                <Right user={this.props.username}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = {
    fetchPostsSuccess
}

export default connect(mapStateToProps, mapDispatchToProps) (Home);