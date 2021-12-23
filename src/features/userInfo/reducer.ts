import {
  GET_USER_DETAILS,
  GET_USER_SUCCEEDE,
  GET_USER_DETAILS__FAILED,
} from "./actions";
const initalState = {
  isFetching: false,
  items: {},
};
const getUserDetailsReducer = (state = initalState, action: any) => {
  console.log("Reducer is calling  No 2");
  switch (action.type) {
    case GET_USER_DETAILS:
      return {
        ...state,
        isFetching: true,
      };
    case GET_USER_SUCCEEDE:
      return {
        ...state,
        isFetching: false,
        items: action.result,
      };
    case GET_USER_DETAILS__FAILED:
      return {
        ...state,
        isFetching: false,
        //items: { totalRecords: 0, response: [] },
      };
    default: {
      return state;
    }
  }
};
export default getUserDetailsReducer;
