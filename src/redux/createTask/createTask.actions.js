export const statusNewTaskChange = (status) => ({
  type: 'STATUS_NEW_TASK_CHANGE',
  payload: {
    status,
  }
});

export const textNewTaskUpdate = (text) => ({
  type: 'TEXT_NEW_TASK_UPDATE',
  payload: {
    text,
  }
});

export const titleNewTaskUpdate = (title) => ({
  type: 'TITLE_NEW_TASK_UPDATE',
  payload: {
    title,
  }
});
