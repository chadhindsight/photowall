import {database} from '../database/config'

export function startAddingPost(post) {
    return (dispatch) => {
        // update a firebase node with a key:value pair
        return database.ref('posts').update({[post.id]: post}).then(()=>{
            dispatch(addPost(post))
        }).catch(error => {
            console.log(error) 
        })
    } 
}
export function startLoadingPost() {
    return (dispatch) =>{
        return database.ref('posts').once('value').then(snapshot => {
            let posts = []
            snapshot.forEach((childSnapshot) => {
                posts.push(childSnapshot.val())
            })

            dispatch(loadPosts(posts))
        })
    }
}

export function startRemovingPost(index, id) {
    return (dispatch)=> {
        return database.ref(`posts/${id}`).remove().then(()=>{
            dispatch(removePost(index))
        }).catch(error => {
            console.log(error)
        })
    }
}
export function startAddingComment(comment, postId){
    return (dispatch) => {
        return database.ref(`comments/${postId}`).push(comment).then(()=> {
            dispatch(addComment(comment, postId))
        }).catch(error => {
            console.log(error)
        })
    }
}
export function startLoadingComments() {
    return dispatch => {
        return database.ref('comments').once('value').then((snapshot) =>{
            let comments = {}
            snapshot.forEach(childSnapshot =>{
                comments[childSnapshot.key] = Object.values(childSnapshot.value())
            })
            dispatch(LoadComments(comments))
        })
    }
}
export function LoadComments(comments) {
    return {
        type: 'LOAD_COMMENTS',
        comments
    }
}
//When remove action is emited it tells us which index in the post array is to be removed
export function removePost(index) {
    return {
        type: 'REMOVE_POST',
        index
    }
}

export function addPost(post) {
    // Take in a post that was submitted and use that as payload
    return {
        type: 'ADD_POST',
        post
    }
}

export function addComment(comment, postId) {
    return {
        type: 'ADD_COMMENT',
        comment,
        postId
    }
}
export function loadPosts(posts) {
    return {
        type: 'LOAD_POSTS',
        posts
    }
}
//NB: action creators are just functions that return action