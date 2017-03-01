
export function addTodo(text) {
  return {
    type: 'TODO_ADD',
    text
  }
}

export function toggleTodo(index) {
  return {
    type: 'TODO_TOGGLE',
    index
  }
}