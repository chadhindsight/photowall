import posts from '../data/posts';
const postReducer = function posts(state = posts, action) {

    switch(action.type) {
        //Remove post at a specified index and return the array
        case 'REMOVE_POST': return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
        
        default: return state
    }
}

export default postReducer;