export const fetchPostsSuccess = (obj) => {
    return {
        type: "FETCH_POST_SUCCESS",
        posts: obj.posts
    }
}