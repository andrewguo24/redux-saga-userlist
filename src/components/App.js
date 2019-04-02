import React from "react";
import "../scss/style.scss";
import UserList from "../containers/container-user-list";
import UserDetail from "../containers/container-user-detail";

const App = () => (
  <div>
    <h2>Username List</h2>
    <UserList />
    <hr />
    <h2>User Details:</h2>
    <UserDetail />
  </div>
);

export default App;
