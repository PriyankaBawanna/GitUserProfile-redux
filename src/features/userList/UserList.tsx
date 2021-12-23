import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserRepo } from "./actions";

function UserInformationREpo() {
  const state = useSelector(
    (state: any) => state.getUserRepoDetailsReducer.items
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserRepo(state));
    console.log("state on user repo", state);
  }, []);

  console.log("dispatch user Repo", dispatch);
  console.log("state user Repo", state);
  //console.log("props from user", props.userInput);

  return (
    <>
      <h1> User List</h1>
    </>
  );
}
export default UserInformationREpo;
