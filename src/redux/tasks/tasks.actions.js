export const addNewTask = (task) => ({
  type: 'ADD_NEW_TASK',
  payload: {
    task,
  }
});

export const removeTask = (id) => ({
  type: 'REMOVE_TASK',
  payload: {
    id,
  }
});

export const dragTask = (id) => ({
  type: 'DRAG_TASK',
  payload: {
    id,
  }
});

export const dropTask = (boardId, taskId) => ({
  type: 'DROP_TASK',
  payload: {
    boardId,
    taskId,
  }
});

export const changeTaskEditingStatus = (id) => ({
  type: 'CHANGE_TASK_EDITING_STATUS',
  payload: {
    id,
  }
});

export const submitTaskEditing = (id, title, text) => ({
  type: 'SUBMIT_TASK_EDITING',
  payload: {
    id,
    title,
    text,
  }
});
