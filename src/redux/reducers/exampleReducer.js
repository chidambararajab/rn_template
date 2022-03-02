import { REDUX_CONSTANTS } from "@src/constants";

const INITIAL_STATE = { quote: "", loading: false, error: "" };

export const exampleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REDUX_CONSTANTS.EXAMPLE.LIST_REQUEST:
      return { loading: true, quote: [] };
    case REDUX_CONSTANTS.EXAMPLE.LIST_SUCCESS:
      return { loading: false, quote: action.payload[0].quote };
    case REDUX_CONSTANTS.EXAMPLE.LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
