import axios from "axios";
import {
  LIST_SUCCESS,
  LIST_REQUEST,
  LIST_FAIL,
} from "../../constants/reduxConstants/exampleConstant";

export const exampleAction = () => async (dispatch) => {
  try {
    dispatch({ type: LIST_REQUEST });

    const { data } = await axios.get(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    dispatch({ type: LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
