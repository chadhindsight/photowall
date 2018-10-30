//When remove action is emited it tells us which index in the post array is to be removed
export function removePost(index) {
    return {
        type: 'REMOVE_POST',
        index: index
    }
}

//NB: action creators are just functions that return action