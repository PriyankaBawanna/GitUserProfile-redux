import { put, takeLatest } from "redux-saga/effects";
import { GetRequest } from "../../Utilities/network";
import {
  GET_USER_REPO,
  getUserRepo,
  getuserRepoSuceess,
  getUserRepoFailed,
} from "./actions";
function* getUserRepoInfo(actions: any): any {
  console.log("Inside  getUserRepoInfo");
  try {
    const URL = `https://api.github.com/users/${actions.payload}/repos`;
    const apiResponse = yield GetRequest(URL);
    console.log("api response", apiResponse);
    if (!apiResponse || Object.keys(apiResponse).length === 0) {
      yield put(getUserRepoFailed([]));
      return;
    }
    yield put(getuserRepoSuceess(apiResponse));
  } catch (error) {
    console.log("passing Api Error ");
  }
}
function* watchUserRepoList() {
  yield takeLatest(GET_USER_REPO, getUserRepoInfo);
}
export default watchUserRepoList;
