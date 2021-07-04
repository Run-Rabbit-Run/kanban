import { omit } from "lodash";

const INITIAL_STATE = {
  byId: {
    firstTaskId: {
      id: 'firstTaskId',
      title: 'First Task',
      text: 'Something about that task',
      boardId: 'todosBoard', // inProgressBoard, finishedBoard
      isEditing: false,
    },
    secondTaskId: {
      id: 'secondTaskId',
      title: 'Second Task',
      text: 'Something about that task',
      boardId: 'todosBoard',
      isEditing: false,
    },
  },

  allIds: ['firstTaskId', 'secondTaskId'],
  draggableTaskId: '',
};

export const tasks = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SUBMIT_TASK_EDITING': {
      const {id, title, text} = action.payload;
      const {byId} = state;
      const newTask = {...byId[id], title: title, text: text, isEditing: false,};
      const newById = {...byId, [id]: newTask};
      return {...state, byId: newById};
    }
    case 'ADD_NEW_TASK': {
      const {task} = action.payload;
      const newById = {...state.byId, [task.id]: task};
      const newAllIds = [...state.allIds, task.id];
      return {...state, byId: newById, allIds: newAllIds};
    }
    case 'REMOVE_TASK': {
      const {id} = action.payload;
      const {byId, allIds} = state;
      const newById = omit(byId, id);
      const newAllIds = allIds.filter((taskId) => taskId !== id);
      return {...state, byId: newById, allIds: newAllIds};
    }
    case 'DRAG_TASK': {
      const {id} = action.payload;
      return {...state, draggableTaskId: id};
    }
    case 'DROP_TASK': {
      const {boardId, taskId} = action.payload;
      const {byId} = state;
      const newTask = {...byId[taskId], boardId: boardId};
      const newById = {...byId, [taskId]: newTask};
      return {...state, byId: newById};
    }
    case 'CHANGE_TASK_EDITING_STATUS': {
      const {id} = action.payload;
      const {byId} = state;
      const newTask = {...byId[id], isEditing: !byId[id].isEditing};
      const newById = {...byId, [id]: newTask};
      return {...state, byId: newById};
    }
    default:
      return state;
    }
  };
  