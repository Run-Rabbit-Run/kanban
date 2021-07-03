import { connect } from "react-redux";
import { textNewTaskUpdate, titleNewTaskUpdate } from "../../redux/createTask/createTask.actions";
import { addNewTask } from "../../redux/tasks/tasks.actions";
import _ from "lodash";
import "./createTask.scss";

const mapStateToProps = (state) => {
  const {text, title, status} = state.createTask;
  const props = {
    text,
    title,
    status,
  }
  return props;
}

const actionCreators = {
  textNewTaskUpdate,
  titleNewTaskUpdate,
  addNewTask,
}

const CreateTask = ({text, title, status, textNewTaskUpdate, titleNewTaskUpdate, addNewTask}) => {
  const handleTextUpdate = (e) => {
    textNewTaskUpdate(e.target.value);
  };
  
  const handleTitleUpdate = (e) => {
    titleNewTaskUpdate(e.target.value);
  };
  
  const handleAddTask = (e) => {
    e.preventDefault();
    const newTask = {
      id: _.uniqueId(),
      title,
      text,
      boardId: 'todosBoard',
    }
    addNewTask(newTask);
  };

  return (
    status === 'editing' ? (
      <form
        className="create-task"
        onSubmit={handleAddTask}
      >
        <label
          htmlFor="title"
        >Title</label>
        <input
          className="create-task__title"
          id="title"
          type="text"
          value={title}
          onChange={handleTitleUpdate}
        />

        <label
          htmlFor="text"
        >Task desctiption</label>
        <textarea
          className="create-task__text"
          id="text"
          name="text"
          value={text}
          onChange={handleTextUpdate}
        />

        <button
          className="create-task__button"
          type="submit"
        >Add Task</button>
      </form>
    ) : null
  );
};

export default connect(mapStateToProps, actionCreators)(CreateTask);
