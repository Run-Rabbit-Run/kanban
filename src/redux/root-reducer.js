import { combineReducers } from "redux";
import { tasks } from "./tasks/tasks.reducer";
import { createTask } from "./createTask/createTask.reducer";
import { editingTask } from "./editingTask/editingTask.reducer";

export default combineReducers({
  tasks,
  createTask,
  editingTask,
})