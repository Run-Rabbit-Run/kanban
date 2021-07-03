const INITIAL_STATE = {
  title: '',
  text: '',
  status: 'inactive', // 'editing'
};

export const createTask = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'STATUS_NEW_TASK_CHANGE':
      const {status} = action.payload;
      const newStatus = status === 'editing' ? 'inactive' : 'editing';
      return { ...state, status: newStatus };
    case 'TEXT_NEW_TASK_UPDATE':
      const {text} = action.payload;
      return { ...state, text: text };
    case 'TITLE_NEW_TASK_UPDATE':
      const {title} = action.payload;
      return { ...state, title: title };
    case 'ADD_NEW_TASK':
      return { 
        title: '',
        text: '',
        status: 'inactive',
      };
    default:
      return state;
  }
};
