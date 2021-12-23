import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserList from "../userList/UserList";
import { getUserDetails, getuserDetailsSuceede } from "./actions";
function UserInformation() {
  const state = useSelector((state: any) => state.getUserDetailsReducer.items);
  const dispatch = useDispatch();
  const [userInput, setSearchInput] = useState("");
  console.log("@userInformation ", userInput);
  console.log("User Information Component is caaling ");
  console.log("user input ", userInput);
  console.log("dispatch", dispatch);
  console.log("state", state);

  return (
    <>
      <h1>user Information</h1>
      <input
        type="text"
        className="userInput"
        placeholder="enter your Repo "
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
      />

      <button
        onClick={() => {
          console.log("user input", userInput);
          dispatch(getUserDetails(userInput));
        }}
      >
        Submit
      </button>
      <p>{state.login}</p>
      <p>{state.id}</p>
      <p>{state.node_id}</p>
      <img src={state.avatar_url} />
      <UserList />
    </>
  );
}

export default UserInformation;
