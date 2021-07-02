import Board from "../board/board";
import { connect } from "react-redux";
import './boards.scss';

const mapStateToProps = (state) => {
  const props = {
    boards: state.boards,
  }
  return props;
};

const Boards = ({boards}) => {
  console.log(boards)
  return (
    <div className='boards'>
      {boards.map((board) => (
        <Board
          board={board}
        />
      ))}
    </div>
  );
}

export default connect(mapStateToProps)(Boards);