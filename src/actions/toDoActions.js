export const ADD_NEW_TODO = 'ADD_NEW_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DO_SELECTED_TO_DOS = 'DO_SELECTED_TO_DOS';
export const UNDO_SELECTED_TO_DOS = 'UNDO_SELECTED_TO_DOS';
export const REMOVE_SELECTED_TO_DOS = 'REMOVE_SELECTED_TO_DOS';

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

export function doSelectedToDos(toDoSelectedList) {
  return {
    type: DO_SELECTED_TO_DOS,
    payload: toDoSelectedList,
  };
}

export function undoSelectedToDos(toDoSelectedList) {
  return {
    type: UNDO_SELECTED_TO_DOS,
    payload: toDoSelectedList,
  };
}

export function removeSelectedToDos(toDoSelectedList) {
  return {
    type: REMOVE_SELECTED_TO_DOS,
    payload: toDoSelectedList,
  };
}
