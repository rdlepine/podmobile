import * as c from '../utils/actions.js';
import * as api from '../utils/dispatchApi.js';


export function setDispatches(dispatches) {
    return {
        type: c.SET_DISPATCHES,
        decks
    }
}

export function fetchDispatches() {
     return (dispatch) => {
         api.getDispatches().then( (dispatches) => {
                 dispatch(setDispatches(dispatches));
             }).catch((err) => {
                 console.log("ERR 1", err);
             });
        }
}