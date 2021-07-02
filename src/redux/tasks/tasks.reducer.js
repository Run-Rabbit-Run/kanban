const INITIAL_TASKS_STATE = {
  byId: {
    firstTaskId: {
      id: 'firstTaskId',
      title: 'First Task',
      text: 'Something about that task',
    },
    secondTaskId: {
      id: 'secondTaskId',
      title: 'Second Task',
      text: 'Something about that task',
    },
  },

  allIds: ['firstTaskId', 'secondTaskId'],
};

const INITIAL_BOARDS_STATE = [
  {
    id: 'todosBoard',
    title: 'Невыполненные',
    tasksId: ['firstTaskId', 'secondTaskId'],
  },
  {
    id: 'inProgressBoard',
    title: 'В процессе',
    tasksId: [],
  },
  {
    id: 'finishedBoard',
    title: 'Завершённые',
    tasksId: [],
  },
];

export const tasks = (state = INITIAL_TASKS_STATE, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

export const boards = (state = INITIAL_BOARDS_STATE, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};
