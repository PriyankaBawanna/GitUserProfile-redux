import { combineReducers } from "redux";
import getUserDetailsReducer from "../../features/userInfo/reducer";
import getUserRepoDetailsReducer from "../../features/userList/reducer";


export default combineReducers({
  getUserDetailsReducer,
  getUserRepoDetailsReducer,
});

