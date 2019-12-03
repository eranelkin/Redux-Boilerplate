import { ADD_SOLDIER, REMOVE_SOLDIER, TOGGLE_SOLDIER } from '../actions/types';

export const buildBoard = (rowsAmount, colsAmount) => {
  let board = [];
  for (let i = 0; i < rowsAmount; i++) {
    board[i] = new Array(colsAmount).fill(false);
  }
  return board;
}

export const handleSoldier = (type, { board, rowNumber, colNumber }) => {
  let updatedBoard = [...board];
  if (type === ADD_SOLDIER) {
    updatedBoard[rowNumber - 1][colNumber - 1] = true;
  }
  if (type === REMOVE_SOLDIER) {
    updatedBoard[rowNumber - 1][colNumber - 1] = false;
  }
  if (type === TOGGLE_SOLDIER) {
    updatedBoard[rowNumber - 1][colNumber - 1] = !board[rowNumber - 1][colNumber - 1];
  }

  return updatedBoard;
}

