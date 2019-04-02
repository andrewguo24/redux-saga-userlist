import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// import { selectUser } from "../actions/index";
import * as actionCreators from "../actions";

class UserList extends React.Component {
  componentDidMount() {
    this.props.dispatch(actionCreators.requestUsers());
  }

  render() {
    const { users, selectUser } = this.props;
    return (
      <ul>
        {users &&
          users.map(user => (
            <li key={user.id} onClick={() => selectUser(user)}>
              {user.first} {user.last}
            </li>
          ))}
      </ul>
    );
  }
}

// read state data from store and pass it to the container as props
const mapStateToProps = state => {
  console.log("Users", state.users);
  return {
    users: state.users.users
  };
};

// hook an action creator to an user event
// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ selectUser, actionCreators }, dispatch);
// };

const matchDispatchToProps = dispatch => ({
  ...bindActionCreators(actionCreators),
  dispatch
});

// connect the props and actions to the container class UserList
export default connect(
  mapStateToProps, //connect the props which get from mapStateToProps
  matchDispatchToProps //connect the action which get from mapDispatchToProps
)(UserList);
