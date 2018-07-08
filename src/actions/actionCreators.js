/* Setting up all action creators which will return an action object */

let nextTodoId = 0;
export const addTodo = (text) => {
  return {
    type: `ADD_TODO`,
    id: nextTodoId++,
    text,
    completed: false
  }
}

export const toggleTodo = (id) => {
  return {
    type: `TOGGLE_TODO`,
    id
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: `SET_VISIBILITY_FILTER`,
    filter
  }
}
