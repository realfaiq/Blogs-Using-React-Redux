import React from "react";
import { connect } from "react-redux";

class UserHeader extends React.Component {
  render() {
    //Shifted in mapStateToProps
    // const user = this.props.users.find((user) => user.id === this.props.userId);

    //Destructuring the user from mapState to Props
    const { user } = this.props;

    if (!user) {
      return null;
    }

    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((user) => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
