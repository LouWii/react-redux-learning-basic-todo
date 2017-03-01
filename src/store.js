import { createStore, compose } from 'redux';

import rootReducer from './reducers/index';

// Default data
const defaultState = {
	todos: [{text: "Run 5 km", complete: false}, {text: "Eat vegetables", complete: true}]
}

const store = createStore(rootReducer, defaultState)

export default store;