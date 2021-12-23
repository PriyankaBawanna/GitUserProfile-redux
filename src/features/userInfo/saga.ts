import { put } from "redux-saga/effects";
import { takeLatest } from "redux-saga/effects";
import { GetRequest } from "../../Utilities/network";
import { getuserDetailsSuceede } from "./actions";
import {
  GET_USER_DETAILS,
  GET_USER_SUCCEEDE,
  getUserDetailsFailed,
} from "./actions";
function* getUserDetails(actions: any): any {
  try {
    console.log("Saga Is Calling no 3");
    //  const { userInput } = actions["params"];
    const URL = `https://api.github.com/users/${actions.payload}`;

    console.log("--@Saga ", actions.payload);
    //  console.log("USer Input ", userInput);
    const apiResponse = yield GetRequest(URL);
    console.log("---------api response", apiResponse);

    if (!apiResponse || Object.keys(apiResponse).length === 0) {
      yield put(getUserDetailsFailed(apiResponse));
      return;
    }
    yield put(getuserDetailsSuceede(apiResponse));
    return;
  } catch (err) {
    alert("Error");
  }
}

function* watchUserRepo() {
  yield takeLatest(GET_USER_DETAILS, getUserDetails);
}

export default watchUserRepo;
