import { ADD_ENTRY } from "./actions";
import entry from "../models/entry";

const initialState = {
  history: [],
};

const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ENTRY:
      const newEntry = new entry(
        action.entry.id.toString(),
        action.entry.name,
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
