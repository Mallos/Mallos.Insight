import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

import { NavigationProvider } from '@atlaskit/navigation-next';

import App from './App';
import HomePage from '../pages/HomePage';
import SettingsPage from '../pages/SettingsPage';
import ProjectBacklogPage from '../pages/ProjectBacklogPage';

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
              <Route path="/projects/my-project" component={ProjectBacklogPage} />
              <Route path="/issues" component={SettingsPage} />
              <Route path="/" component={HomePage} />
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
