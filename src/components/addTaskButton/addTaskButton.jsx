import { statusNewTaskChange } from '../../redux/createTask/createTask.actions';
import { connect } from 'react-redux';
import './addTaskButton.scss';

const mapStateToProps = (state) => {
  const props = {
    status: state.createTask.status,
  }
  return props;
};

const actionCreators = {
  statusNewTaskChange,
};

const AddTaskButton = ({status, statusNewTaskChange}) => {
  const handleClick = () => {
    statusNewTaskChange(status);
  }
  return (
    <button
      className="add-task-button"
      onClick={handleClick}
    >Add New Task</button>
  );
};

export default connect(mapStateToProps, actionCreators)(AddTaskButton);