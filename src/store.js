import { createStore, compose } from 'redux';

import rootReducer from './reducers/index';

// Default data
const defaultState = {
	todos: [{text: "Run 5 km", complete: false}, {text: "Eat vegetables", complete: true}]
}

const store = createStore(rootReducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;