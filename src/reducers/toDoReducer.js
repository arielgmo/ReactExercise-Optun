import {
  ADD_NEW_TODO,
  TOGGLE_TODO,
} from '../actions/toDoActions';

const mockedState = [
  {
    toDoName: 'Go to the supermarket',
    done: false,
    selected: false,
  },
  {
    toDoName: 'Clean the house',
    done: true,
    selected: false,
  },
  {
    toDoName: 'Make the report',
    done: false,
    selected: false,
  },
];

export default function products(state = mockedState, action) {
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
    default:
      return state;
  }
}
