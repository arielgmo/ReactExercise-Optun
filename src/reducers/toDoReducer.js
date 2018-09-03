import {
  ADD_NEW_TODO,
  TOGGLE_TODO,
  DO_SELECTED_TO_DOS,
  UNDO_SELECTED_TO_DOS,
  REMOVE_SELECTED_TO_DOS,
} from '../actions/toDoActions';

export default function products(state = [], action) {
  switch (action.type) {
    case ADD_NEW_TODO: {
      return [
        ...state,
        { ...action.payload },
      ];
    }
    case TOGGLE_TODO: {
      return state.map((toDo) => {
        if (toDo.toDoName === action.payload) {
          return { ...toDo, selected: !toDo.selected };
        }
        return toDo;
      });
    }
    case DO_SELECTED_TO_DOS: {
      return state.map((toDo) => {
        if (action.payload.includes(toDo.toDoName)) {
          return { ...toDo, done: true, selected: false };
        }
        return { ...toDo, selected: false };
      });
    }
    case UNDO_SELECTED_TO_DOS: {
      return state.map((toDo) => {
        if (action.payload.includes(toDo.toDoName)) {
          return { ...toDo, done: false, selected: false };
        }
        return { ...toDo, selected: false };
      });
    }
    case REMOVE_SELECTED_TO_DOS: {
      return state.filter((toDo) => {
        if (action.payload.includes(toDo.toDoName)) {
          return false;
        }
        return true;
      });
    }
    default:
      return state;
  }
}
