import React from "react";
import { connect } from "react-redux";

const UserDetail = ({ user }) =>
  !user ? (
    <div>Select an user ....</div>
  ) : (
    <div>
      <img src={user.thumbnail} alt="" />
      <h2>
        {user.first} {user.last}
      </h2>
      <h3>Age: {user.age}</h3>
      <h3>Description: {user.description}</h3>
    </div>
  );

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
  return {
    user: state.activeUser
  };
}

export default connect(mapStateToProps)(UserDetail);
