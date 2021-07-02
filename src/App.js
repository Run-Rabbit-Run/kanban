import { connect } from 'react-redux';
// import { increment, decrement } from './redux/action';
import Boards from './components/boards/boards';
import './App.scss';

// const mapStateToProps = (state) => ({
//   count: state.count,
// });

// const mapDispatchToProps = {
//   increment,
//   decrement,
// };

function App({count, increment, decrement}) {
  // const handleIncrement = () => {
  //   increment(count);
  // }
  // const handleIDecrement = () => {
  //   decrement(count);
  // }
  return (
    <div className="App">
      <Boards />
    </div>
  );
}

export default connect()(App);
