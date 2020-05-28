import React from "react";
export const ADD_ENTRY = "ADD_ENTRY";

import { createEntry } from "../helpers/db";

export const addEntry = (
  name,
  length,
  breadth,
  height,
  volume,
  cft,
  weight
) => {
  return async (getState, dispatch) => {
    try {
      const dbResponse = await createEntry(
        name,
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
          name: name,
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
