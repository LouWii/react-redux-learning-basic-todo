
function todos(state = [], action) {
  switch(action.type) {
    case 'TODO_TOGGLE':
      const idx = action.index
      // What we're doing here :
      // returning a new array contaning the same data as before
      // except for the toggled todo that we copy and modify```
      return [
        ...state.slice(0, idx),
        {...state[idx], complete: !state[idx].complete},
        ...state.slice(idx + 1)
      ]
    case 'TODO_ADD':
      return [
        ...state,
        {text: action.text, complete: false}
      ]
    default:
      return state
  }
}

export default todos;