import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Utilities/redux/store";
import UserInformation from "./features/userInfo/UserInformation";
import UserInformationREpo from "./features/userList/UserList";
//import UserInformationREpo from "./features/userList/UserList";
//import UserInfo from "./features/UserInformation";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <UserInformation />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
// <UserInformationREpo />
