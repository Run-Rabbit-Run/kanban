export const editTaskTitle = (title) => ({
  type: 'EDIT_TASK_TITLE',
  payload: {
    title,
  }
});

export const editTaskText = (text) => ({
  type: 'EDIT_TASK_TEXT',
  payload: {
    text,
  }
});

export const setEditingTaskState = (title, text) => ({
  type: 'SET_EDITING_TASK_STATE',
  payload: {
    title,
    text,
  }
});