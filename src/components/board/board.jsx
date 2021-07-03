import Task from "../task/task";
import { dropTask } from "../../redux/tasks/tasks.actions";
import { connect } from "react-redux";
import './board.scss';

const mapStateToProps = (state) => {
  const props = {
    tasks: state.tasks,
  }
  return props;
}

const actionCreators = {
  dropTask,
}

const Board = ({tasks, board, dropTask}) => {
  const filteredTasks = tasks.allIds.filter((id) => board.id === tasks.byId[id].boardId);

  const handleDragDrop = () => {
    dropTask(board.id, tasks.draggableTaskId);
  }

  const handleDragOver = (e) => {
    e.preventDefault();
  }

  return (
    <div
      className='board-wrapper'
      onDragOver={handleDragOver}
      onDrop={handleDragDrop}
    >
      <div className='board'>
        <h2 className='board-title'>{board.title}</h2>
        <ul className='tasks-list'>
          {filteredTasks.map((id) => (
            <li
              key={id}
              className='tasks-item'
            >
              <Task
                task={tasks.byId[id]}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, actionCreators)(Board);
