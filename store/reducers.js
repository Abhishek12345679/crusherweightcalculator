import { ADD_ENTRY, SET_HISTORY } from "./actions";
import entry from "../models/entry";

const initialState = {
  history: [],
};

const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HISTORY:
      return {
        ...state,
        history: action.history.map(
          (e) =>
            new entry(
              e.id.toString(),
              e.length,
              e.breadth,
              e.height,
              e.volume,
              e.cft,
              e.weight
            )
        ),
      };
    case ADD_ENTRY:
      const newEntry = new entry(
        action.entry.id.toString(),
        action.entry.length,
        action.entry.breadth,
        action.entry.height,
        action.entry.volume,
        action.entry.cft,
        action.entry.weight
      );
      return {
        ...state,
        history: state.history.concat(newEntry),
      };
    default:
      return initialState;
  }
};

export default historyReducer;
