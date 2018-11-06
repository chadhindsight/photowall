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
//NB: action creators are just functions that return action