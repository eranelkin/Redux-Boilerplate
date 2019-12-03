import { BUILD_BOARD, ADD_SOLDIER, REMOVE_SOLDIER, TOGGLE_SOLDIER } from '../actions/types';
import { buildBoard, handleSoldier } from '../utils/boardUtil';

const initialState = { board: [] };
const boardReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case BUILD_BOARD:
      return {
        ...state,
        board: buildBoard(payload.rowsAmount, payload.colsAmount)
      }

    case ADD_SOLDIER:
    case REMOVE_SOLDIER:
    case TOGGLE_SOLDIER: {
      const { board } = state;
      const { rowNumber, colNumber } = payload;

      return {
        ...state,
        board: handleSoldier(type, { board, rowNumber, colNumber })
      }
    }

    default:
      return { ...state }
  }
}

export default boardReducer;