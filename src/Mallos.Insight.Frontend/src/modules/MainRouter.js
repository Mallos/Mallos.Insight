import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

import { NavigationProvider } from '@atlaskit/navigation-next';

import App from './App';

import BehaviorTreePage from '../pages/BehaviorTreePage';
import DialogTreePage from '../pages/DialogTreePage';
import DashboardPage from '../pages/DashboardPage';

export default class MainRouter extends Component {
  constructor() {
    super();
    this.state = {
      navOpenState: {
        isOpen: true,
        width: 304,
      }
    }
  }

  getChildContext () {
    return {
      navOpenState: this.state.navOpenState,
    };
  }

  onNavResize = (navOpenState) => {
    this.setState({
      navOpenState,
    });
  }

  render() {
    return (
      <Router>
        <NavigationProvider>
          <App onNavResize={this.onNavResize}>
            <Switch>
              <Route path="/behaviortree/my-tree" component={BehaviorTreePage} />
              <Route path="/behaviortree" component={BehaviorTreePage} />
              <Route path="/dialogtree" component={DialogTreePage} />
              <Route path="/" component={DashboardPage} />
            </Switch>
          </App>
        </NavigationProvider>
      </Router>
    );
  }
}

MainRouter.childContextTypes = {
  navOpenState: PropTypes.object,
}
