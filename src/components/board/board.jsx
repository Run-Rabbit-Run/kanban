import Task from "../task/task";
import { connect } from "react-redux";
import './board.scss';

const mapStateToProps = (state) => {
  const props = {
    tasks: state.tasks,
  }
  return props;
}

const Board = ({tasks, board}) => {
  return (
    <div className='board-wrapper'>
      <div className='board'>
        <h2 className='board-title'>{board.title}</h2>
        <ul className='tasks-list'>
          {board.tasksId.map((id) => (
            <li className='tasks-item'>
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

export default connect(mapStateToProps)(Board);
