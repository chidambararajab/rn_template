import axios from "axios";
import { REDUX_CONSTANTS } from "@constants";

export const exampleAction = () => async (dispatch) => {
  try {
    dispatch({ type: REDUX_CONSTANTS.EXAMPLE.LIST_REQUEST });

    const { data } = await axios.get(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    dispatch({ type: REDUX_CONSTANTS.EXAMPLE.LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: REDUX_CONSTANTS.EXAMPLE.LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
