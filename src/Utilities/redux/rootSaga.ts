import { all, fork } from "redux-saga/effects";
import watchUserRepo from "../../features/userInfo/saga";
import watchUserRepoList from "../../features/userList/saga";

function* rootSaga() {
  yield all([fork(watchUserRepo)]);
  yield all([fork(watchUserRepoList)]);
}
export default rootSaga;
