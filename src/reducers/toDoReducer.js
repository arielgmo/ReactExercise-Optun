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
    selected: true,
  },
];

export default function products(state = mockedState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
