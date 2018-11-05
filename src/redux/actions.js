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

export function addComment(comment) {
    return {
        type: 'ADD_COMMENT',
        comment
    }
}
//NB: action creators are just functions that return action