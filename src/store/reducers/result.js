import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const inititalState = {
    results: []
}

const reducer = (state = inititalState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
                return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result})});
        case actionTypes.DELETE_RESULT:
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1);
            const id = action.id;
            const updatedArray =  state.results.filter(x => x.id !== id);
            return updateObject(state, {results: updatedArray});
        default:
            break;
    }
    return state;
}

export default reducer;