import React from "react";
import Board from "../board/board";
import './boards.scss';

const INITIAL_STATE = {
  byId: {
    todosBoard: {
      id: 'todosBoard',
      title: 'ToDo',
    },
    inProgressBoard: {
      id: 'inProgressBoard',
      title: 'In progress',
    },
    finishedBoard: {
      id: 'finishedBoard',
      title: 'Finished',
    },
  },

  allIds: ['todosBoard', 'inProgressBoard', 'finishedBoard'],
};

class Boards extends React.Component {
  constructor() {
    super();
    this.state = INITIAL_STATE
  }

  render() {
    const {byId, allIds} = this.state;
    return (
      <div className='boards'>
        {allIds.map((id) => (
          <Board
            key={id}
            board={byId[id]}
          />
        ))}
      </div>
    );
  }

}

export default Boards;