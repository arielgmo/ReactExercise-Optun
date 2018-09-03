export const ADD_NEW_TODO = 'ADD_NEW_TODO';

export function addNewTodo(toDoName) {
  return {
    type: ADD_NEW_TODO,
    payload: {
      toDoName,
      done: false,
      selected: false,
    },
  };
}
