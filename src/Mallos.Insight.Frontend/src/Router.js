import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

import { NavigationProvider } from '@atlaskit/navigation-next';

import App from './App';

// Import all the pages
import BehaviorTreePage from './pages/BehaviorTreePage';
import ConsolePage from './pages/ConsolePage';
import DashboardPage from './pages/DashboardPage';
import DialogTreePage from './pages/DialogTreePage';
import ExplorerPage from './pages/ExplorerPage';

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
              <Route path="/console" component={ConsolePage} />
              <Route path="/explorer" component={ExplorerPage} />
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
