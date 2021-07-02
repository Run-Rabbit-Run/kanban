import { combineReducers } from "redux";
import {tasks, boards} from "./tasks/tasks.reducer";

export default combineReducers({
  tasks,
  boards,
})