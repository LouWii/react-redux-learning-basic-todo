import { createStore } from 'redux';
import rootReducer from './reducers/index';

const storage = window.localStorage
const stateStorageKey = 'reduxState'

// Default data
const defaultState = {
	todos: [{text: "Run 5 km", complete: false}, {text: "Eat vegetables", complete: true}]
}

// Load data from localStorage if it exists, otherwise load default data
const persistedState = storage.getItem(stateStorageKey) ? JSON.parse(localStorage.getItem(stateStorageKey)) : defaultState

const store = createStore(rootReducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(stateStorageKey, serializedState)
  } catch (err) {
    // Ignore write errors.
	console.error(err)
  }
}

export default store;