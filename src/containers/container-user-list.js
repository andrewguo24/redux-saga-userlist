import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../actions";

class UserList extends React.Component {
  componentDidMount() {
    this.props.dispatch(actionCreators.requestUsers());
  }

  render() {
    const { users, dispatch } = this.props;
    return (
      <ul>
        {users &&
          users.map(user => (
            <li
              key={user.id}
              onClick={() => dispatch(actionCreators.selectUser(user))}
            >
              {user.first} {user.last}
            </li>
          ))}
      </ul>
    );
  }
}

// read state data from store and pass it to the container as props
const mapStateToProps = ({ users }) => users;

// hook an action creator to an user event
const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(actionCreators),
  dispatch
});

// connect the props and actions to the container class UserList
export default connect(
  mapStateToProps, //connect the props which get from mapStateToProps
  mapDispatchToProps //connect the action which get from mapDispatchToProps
)(UserList);
