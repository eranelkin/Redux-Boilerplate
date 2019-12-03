import { BUILD_BOARD } from './types';

export const buildBoard = (rowsAmount, colsAmount) => {
  return {
    type: BUILD_BOARD,
    payload: {
      rowsAmount,
      colsAmount
    }
  };
};
