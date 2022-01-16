import {
  LIST_SUCCESS,
  LIST_REQUEST,
  LIST_FAIL,
} from "../../constants/reduxConstants/exampleConstant";

const INITIAL_STATE = { quote: "", loading: false, error: "" };

export const exampleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LIST_REQUEST:
      return { loading: true, quote: [] };
    case LIST_SUCCESS:
      return { loading: false, quote: action.payload[0].quote };
    case LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
