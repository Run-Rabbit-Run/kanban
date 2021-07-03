import { connect } from 'react-redux';
import CreateTask from './components/createTask/createTask';
import Boards from './components/boards/boards';
import AddTaskButton from './components/addTaskButton/addTaskButton';
import './App.scss';

function App() {
  return (
    <div className="App">
      <AddTaskButton />
      <Boards />
      <CreateTask />
    </div>
  );
}

export default connect()(App);
