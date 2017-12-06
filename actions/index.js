import * as c from '../utils/actions.js';
import * as api from '../utils/dispatchApi.js';

export function setDispatches(dispatches) {
    console.log("dispatches", dispatches);
    return {
        type: c.SET_DISPATCHES,
        dispatches
    }
}

export function setDispatch(dispatch) {
    console.log("dnaaaaaaaau", dispatch)
    return {
        type: c.SET_DISPATCH,
        dispatch
    }
}

export function fetchDispatches() {
    
     return (dispatch) => {
         
         api.getDispatches().then( (dispatches) => {
                dispatch(setDispatches(dispatches.data));
             }).catch( (err) => {
                console.log("ERR 1", err);
             });
        }
}