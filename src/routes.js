import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from "react-router-dom";
import * as actions from './actions/index';


class Routes extends Component {
  render() {
    return (
      <Switch>            
        {/* <Route path="/" component={Home} /> */}
      </Switch>
    )
  }
}  

const mapStateToProps = state => ({ user: state.user });
export default connect(mapStateToProps, actions)(Routes);