import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from "react-router-dom";
import * as actions from './actions/index';
import Home from './pages/home'
import Detail from './pages/detail'

class Routes extends Component {
  render() {
    return (
      <Switch>            
        <Route exact path="/" component={Home} />
        <Route path="/detail" component={Detail} />
      </Switch>
    )
  }
}  

const mapStateToProps = state => ({ user: state.user });
export default connect(mapStateToProps, actions)(Routes);