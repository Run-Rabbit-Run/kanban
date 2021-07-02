import './task.scss';

const Task = ({task}) => {
  return (
    <div className='task'>
      <h3 className='title'>{task.title}</h3>
      <p className='description'>{task.text}</p>
    </div>
  );
}

export default Task;