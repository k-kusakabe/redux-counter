import { initialState } from "./initialState";
import {
  INCREMENT,
  DECREMENT,
  RESET,
  INCREMENT_BY_VALUE,
  SET_DATA,
} from "./types";

//create the logic that manipulates the state
export function reducer(state = initialState, action) {
  switch (action.type) {
    // case INCREMENT: {
    //   const copy = { ...state };
    //   copy.count += 1;
    //   return copy;
    // }

    // another way of writing for above
    case INCREMENT: {
      return { ...state, count: state.count + 1 };
    }

    case INCREMENT_BY_VALUE: {
      const copy = { ...state };
      copy.count += action.payload;
      return copy;
    }

    case DECREMENT: {
      if (state.count === 0) return;
      const copy = { ...state };
      copy.count -= 1;
      return copy;
    }

    case RESET:
      const copy = { ...state };
      copy.count = 0;
      return copy;

    case SET_DATA: {
      const copy = { ...state };
    }

    default:
      console.log("Reducer started or INVALID reducer type, probably a typo");
      return state;
  }
}
