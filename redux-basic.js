const redux = require('redux');
const createStore = redux.createStore;

const inititalState = {
    counter: 0
};
// Reducer

const rootReducer = (state = inititalState, action) => {
    switch (action.type) {
        case 'INC_COUNTER':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'ADD_COUNTER':
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    return state;
};
// Store

const store = createStore(rootReducer);
console.log(store.getState());

// Subscriptions
store.subscribe(() => {
    console.log('[subsciption]', store.getState());
});


// Dispatching an action 
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());

