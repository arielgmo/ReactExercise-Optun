export const ADD_NEW_TODO = 'ADD_NEW_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

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

export function toggleSelectToDo(toDoName) {
  return {
    type: TOGGLE_TODO,
    payload: toDoName,
  };
}
