import React from "react";
import { connect } from "react-redux";
import { removeTask, dragTask, changeTaskEditingStatus, submitTaskEditing } from "../../redux/tasks/tasks.actions";
import { editTaskTitle, editTaskText, setEditingTaskState } from "../../redux/editingTask/editingTask.actions";
import { FaRegTrashAlt } from "react-icons/fa";
import './task.scss';

const mapStateToProps = (state) => {
  const props = {
    editingTitle: state.editingTask.title,
    editingText: state.editingTask.text,
  }
  return props;
}

const actionCreators = {
  removeTask,
  dragTask,
  changeTaskEditingStatus,
  editTaskTitle,
  editTaskText,
  setEditingTaskState,
  submitTaskEditing,
}

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.taskDOM = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('click', this.onClickOuterModal);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onClickOuterModal);
  }

  onClickOuterModal = (event) => {
    const modal = this.taskDOM.current;
    const {isEditing, id} = this.props.task
    if (!modal.contains(event.target) && isEditing) {
      console.log(this.props.task.id)
      this.props.changeTaskEditingStatus(id);
    }
  };

  handleRemove = () => {
    const {id} = this.props.task;
    this.props.removeTask(id);
  };

  handleDragStart = () => {
    const {id} = this.props.task;
    this.props.dragTask(id);
  }
  
  handleEditTaskTitle = (e) => {
    this.props.editTaskTitle(e.target.value);
  }
  
  handleEditTaskText = (e) => {
    this.props.editTaskText(e.target.value);
  }
  
  handleDoubleClick = () => {
    const {id, title, text} = this.props.task;
    this.props.setEditingTaskState(title, text);
    this.props.changeTaskEditingStatus(id);
  }
  
  handleSubmitEditing = (e) => {
    e.preventDefault();
    const {id} = this.props.task;
    const title = this.props.editingTitle;
    const text = this.props.editingText;
    this.props.submitTaskEditing(id, title, text);
  }

  render() {
    return (
      <>
        {this.props.task.isEditing ?
          <form
            className='task'
            onDragStart={this.handleDragStart}
            onSubmit={this.handleSubmitEditing}
            ref={this.taskDOM}
          >
            <div className='task__title-wrapper'>
              <input
                className='task__editing-title'
                value={this.props.editingTitle}
                onChange={this.handleEditTaskTitle}
              />
            </div>
            <div className='task__editing-wrapper'>
              <textarea
                className='task__editing-description'
                value={this.props.editingText}
                onChange={this.handleEditTaskText}
              />
              <button
                type='submit'
              >Ok</button>
            </div>
          </form>
           :
          <div
            className='task'
            draggable={!this.props.task.isEditing}
            onDragStart={this.handleDragStart}
            ref={this.taskDOM}
          >
            <div className='task__title-wrapper'>
              <h3
                className='task__title'
                onDoubleClick={this.handleDoubleClick}
              >{this.props.task.title}</h3>
              <button
                className='task__delete-button'
                onClick={this.handleRemove}
              >
                <FaRegTrashAlt />
              </button>
            </div>
            <p
              className='task__description'
              onDoubleClick={this.handleDoubleClick}
            >{this.props.task.text}</p>
          </div>
        }
      </>
      
    );
  }
}

export default connect(mapStateToProps, actionCreators)(Task);