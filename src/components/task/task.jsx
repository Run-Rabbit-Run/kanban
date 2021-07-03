import { connect } from "react-redux";
import { removeTask } from "../../redux/tasks/tasks.actions";
import { dragTask } from "../../redux/tasks/tasks.actions";
import { FaRegTrashAlt } from "react-icons/fa";
import './task.scss';

const actionCreators = {
  removeTask,
  dragTask,
}

const Task = ({task, removeTask, dragTask}) => {
  const handleRemove = () => {
    removeTask(task.id);
  };

  const handleDragStart = () => {
    dragTask(task.id);
  }

  return (
    <div
      className='task'
      draggable
      onDragStart={handleDragStart}
    >
      <div className='task__title-wrapper'>
        <h3 className='task__title'>{task.title}</h3>
        <button
          className='task__delete-button'
          onClick={handleRemove}
        >
          <FaRegTrashAlt />
        </button>
      </div>
      <p className='task__description'>{task.text}</p>
    </div>
  );
}

export default connect(null, actionCreators)(Task);