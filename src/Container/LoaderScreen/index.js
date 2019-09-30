import React from "react";
import { isLoggedIn } from "./../../Service/AuthService";
import routeAction from "./../../store/actions/routeAction";
import { connect } from "react-redux";
import ReactLoading from "react-loading";

class Loading extends React.Component {
  componentDidMount() {
    isLoggedIn()
      .then(res => {
        if (res.attributes.sub) {
          this.props.authed(true);
          let user = res.attributes;
          this.props.user(user.sub);
          if (user.profile === "student") {
            this.props.history.push(`/student/main`);
          } else if (user.profile === "company") {
            this.props.history.push(`/company/main`);
          }
        } else {
          this.props.history.push("/login");
        }
      })
      .catch(err => {
        this.props.history.push("/login");
        console.log(err);
      });
  }

  render() {
    return (
      <div
        style={{
          margin: "0 auto",
          width: "20%",
          position: "absolute",
          top: "25%",
          left: "25%",
          right: "25%"
        }}
      >
        <ReactLoading
          type={"bubbles"}
          color={"#e91e63"}
          height={"20%"}
          width={"100%"}
        />
      </div>
    );
  }
}

const dispatchToProp = dispatch => {
  return {
    authed: payload => {
      dispatch(routeAction.confirm_route(payload));
    },
    user: obj => {
      dispatch(routeAction.user(obj));
    }
  };
};

export default connect(
  null,
  dispatchToProp
)(Loading);
