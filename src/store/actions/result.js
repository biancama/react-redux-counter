import * as actionTypes from './actionTypes';

export const saveResult = (result) => {
    const upatedResult = result * 2;
    
    return {
        type: actionTypes.STORE_RESULT,
        result: upatedResult
    }
}


export const store = (result) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            const oldCounter = getState().ctr.counter;
            console.log(oldCounter);
            dispatch(saveResult(result));
        }, 2000);
    }
    
    
};

export const del = (id) => {
    return {
        type: actionTypes.DELETE_RESULT,
        id
    }
};
