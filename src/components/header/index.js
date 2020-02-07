import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  contactList: {
    cursor: "pointer"
  }
});

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false
    };
  }
  componentDidMount() {
    if (window.localStorage) {
      let loginIs = localStorage.getItem("isLogin");
      this.setState({
        isLogin: loginIs
      });
    }
  }
  logout = () => {
    localStorage.clear();
    this.props.history.push("/");
  };

  render() {
    const { classes } = this.props;
    const { isLogin } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Grid container justify="space-between">
              <Grid>
                {isLogin === "true" ? (
                  <Typography
                    variant="h6"
                    color="inherit"
                    onClick={this.logout}
                  >
                    Logout
                  </Typography>
                ) : (
                  <Typography variant="h6" color="inherit">
                    Login Form
                  </Typography>
                )}
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
const mapState = ({ contactShow }) => {
  return {
    _contactShow: contactShow
  };
};
export default connect(mapState)(withStyles(styles)(withRouter(Header)));
// export default  withStyles(styles)(withRouter(Header));
