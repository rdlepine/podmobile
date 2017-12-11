import * as c from '../utils/actions.js';
import { combineReducers } from 'redux';

function dispatches(state = [], action) {
    switch(action.type) {
        case c.SET_DISPATCHES:
            return action.dispatches;
        default: 
            return state;
    }
}

function dispatch(state = {}, action) {
    switch(action.type) {
        case c.SET_DISPATCH:
            return action.dispatch;
        default:
            return state;
    }
}

const rootReducer = combineReducers( {
    dispatches,
    dispatch
}); 

export default rootReducer;