export const GET_USER_REPO = "GET_USER_Repo";
export const GET_USER_REPO_SUCCEEDE = "GET_USER_SUCCEEDE";
export const GET_USER_REPO__FAILED = "GET_USER_FAILED";

export const getUserRepo = (params: any) => {
  console.log("Inside getuser repo action");
  return { type: GET_USER_REPO, payload: params };
};
export const getuserRepoSuceess = (result: any) => {
  return { type: GET_USER_REPO_SUCCEEDE, result };
};
export const getUserRepoFailed = (error: any) => {
  return { type: GET_USER_REPO__FAILED, error };
};
