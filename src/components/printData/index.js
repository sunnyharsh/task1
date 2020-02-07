// import React, { Component } from 'react';
import { connect } from "react-redux";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { withRouter } from "react-router-dom";
import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/core/styles/withStyles";
import { Grid } from "@material-ui/core";
import data from "./data.json";
const styles = theme => ({
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  },
  plusIcon: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    color: "#fff",
    backgroundColor: "#1976d2"
  }
});

class PrintData extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container justify="center">
        <Grid item sm={10}>
          <Paper className={classes.root}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell align="left">Name</TableCell>
                  <TableCell align="left">Age</TableCell>
                  <TableCell align="left">Gender</TableCell>
                  <TableCell align="left">Email</TableCell>
                  <TableCell align="left">Phone</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data &&
                  data.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell align="left">{row.name}</TableCell>
                      <TableCell align="left">{row.age}</TableCell>
                      <TableCell align="left">{row.gender}</TableCell>
                      <TableCell align="left">{row.email}</TableCell>
                      <TableCell align="left">{row.mobile}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
        <Grid>
          <Fab
            aria-label="add"
            className={classes.plusIcon}
            onClick={this.addMore}
          >
            <AddIcon />
          </Fab>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(withRouter(PrintData));
