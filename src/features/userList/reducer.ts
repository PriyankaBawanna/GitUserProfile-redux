import {
  GET_USER_REPO,
  GET_USER_REPO_SUCCEEDE,
  GET_USER_REPO__FAILED,
} from "./actions";
const initalState = {
  isFetching: false,
  items: [],
};
const getUserRepoDetailsReducer = (state = initalState, action: any) => {
  console.log("Inside userRepo  reducer");
  switch (action.type) {
    case GET_USER_REPO:
      return {
        ...state,
        isFetching: true,
      };
    case GET_USER_REPO_SUCCEEDE:
      return {
        ...state,
        isFetching: false,
        items: action.result,
      };
    case GET_USER_REPO__FAILED:
      return {
        ...state,
        isFetching: false,
        items: { totalRecords: 0, response: [] },
      };
    default: {
      return state;
    }
  }
};
export default getUserRepoDetailsReducer;
