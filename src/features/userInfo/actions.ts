//In action we define what to do
export const GET_USER_DETAILS = "GET_USER_DETAILS";
export const GET_USER_SUCCEEDE = "GET_USER_SUCCEEDE";
export const GET_USER_DETAILS__FAILED = "GET_USER_FAILED";
console.log("Action is Calling NO  1");
export const getUserDetails = (params: any) => {
  return { type: GET_USER_DETAILS, payload: params };
};
export const getuserDetailsSuceede = (result: any) => {
  return { type: GET_USER_SUCCEEDE, result };
};
export const getUserDetailsFailed = (error: any) => {
  return { type: GET_USER_DETAILS__FAILED, error };
};
