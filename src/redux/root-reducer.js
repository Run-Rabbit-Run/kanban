import { combineReducers } from "redux";
import { tasks } from "./tasks/tasks.reducer";
import { createTask } from "./createTask/createTask.reducer";

export default combineReducers({
  tasks,
  createTask,
})