export const ADD_ENTRY = "ADD_ENTRY";
export const SET_HISTORY = "LOAD_HISTORY";

import { createEntry, loadHistory } from "../helpers/db";

export const setHistory = () => {
  return async (dispatch, getState) => {
    try {
      const history = await loadHistory();
      console.log(history);
      dispatch({ type: SET_HISTORY, history: history.rows._array });
    } catch (err) {
      console.log(err);
    }
  };
};

export const addEntry = (length, breadth, height, volume, cft, weight) => {
  return async (getState, dispatch) => {
    try {
      const dbResponse = await createEntry(
        length,
        breadth,
        height,
        volume,
        cft,
        weight
      );
      console.log(dbResponse);
      dispatch({
        type: ADD_ENTRY,
        entry: {
          id: dbResponse.insertId,
          length: length,
          breadth: breadth,
          height: height,
          volume: volume,
          cft: fetch,
          weight: weight,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
};
