import React, { Component } from "react";
import LoginForm from "../forms/index.loginForm";
import { connect } from "react-redux";
import { loginData } from "../../store/actions/index.action";
import { withRouter } from "react-router-dom";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false
    };
  }
  formSubmit = values => {
    this.props.$loginData(values);
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps._loginData) {
      this.setState(
        {
          isLogin:
            nextProps._loginData[0].status === "failed"
              ? true
              : nextProps._loginData[0].status === "success"
              ? false
              : false
        },
        () => {
          if (nextProps._loginData[0].status === "success") {
            if (window.localStorage) {
              localStorage.setItem("isLogin", true);
            }
            this.props.history.push("/print");
          }
        }
      );
    }
  }
  render() {
    const { isLogin } = this.state;

    return (
      <React.Fragment>
        <LoginForm
          initialValues={{
            email: "",
            pass: ""
          }}
          onSubmit={this.formSubmit}
          isLogin={isLogin}
        />
      </React.Fragment>
    );
  }
}
const mapState = ({ loginData }) => {
  return {
    _loginData: loginData
  };
};
const mapDispatch = dispatchEvent => ({
  $loginData: values => dispatchEvent(loginData(values))
});
export default connect(mapState, mapDispatch)(withRouter(Login));
