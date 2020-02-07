import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../components/login";
import PrintData from "../components/printData";
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from "react-router-dom";
const styles = theme => ({
  topContainer: {
    marginTop: "20px"
  }
});
class Routing extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    if (window.localStorage) {
      let loginIs = localStorage.getItem("isLogin");
      if (loginIs === "true") {
        this.props.history.push("/print");
      } else {
        this.props.history.push("/");
      }
    }
  }
  render() {
    let loginIs;
    if (window.localStorage) {
      loginIs = localStorage.getItem("isLogin");
      //   console.log(loginIs);
    }
    const { classes } = this.props;
    return (
      <React.Fragment>
        <div className={classes.topContainer}>
          <Switch>
            {loginIs === "true" ? (
              <Route path="/print">
                <PrintData />
              </Route>
            ) : (
              <Route exact path="/">
                <Login />
              </Route>
            )}
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}
export default withStyles(styles)(withRouter(Routing));
