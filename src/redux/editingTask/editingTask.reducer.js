const INITIAL_STATE = {
  title: '',
  text: '',
}

export const editingTask = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'EDIT_TASK_TITLE':
      return {...state, title: action.payload.title};
    case 'EDIT_TASK_TEXT':
      return {...state, text: action.payload.text};
    case 'SET_EDITING_TASK_STATE':
      const {title, text} = action.payload;
      return {...state, text: text, title: title};
    default:
      return state;
  }
};