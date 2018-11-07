import _posts from '../data/posts';
import {combineReducers} from 'redux';

 function comments(state ={}, action){
     switch(action.type) {
        //[action.post] is not an array, but [action.comment] is an array
        case 'ADD_COMMENT': 
        
        if(!state[action.postId]){
            return { ...state, [action.postId]: [action.comment] }
        }
        else{
            return {...state, [action.postId]: [...state[action.postId], action.comment]}
        }
        default: return state
     }
    return state;
}

function posts(state = _posts, action) {
    switch(action.type) {
        //Remove post at a specified index and return the array. Spread operator is used below
        case 'REMOVE_POST': return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
        case 'ADD_POST': return [...state, action.post]
        case 'LOAD_POSTS': return action.posts
        default: return state
    }
}

const rootReducer = combineReducers({posts, comments})

export default rootReducer;
// NB: when you emit an action it goes to every reducer, but it's only updated by the corresponding reducer.