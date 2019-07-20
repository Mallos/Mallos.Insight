import React, { Component } from 'react';

import {
  LayoutManagerWithViewController,
  NavigationProvider,
  ViewController,
  withNavigationViewController,
} from '@atlaskit/navigation-next';

import MallosGlobalNavigation from './MallosGlobalNavigation';

import LinkItem from '../views/LinkItem';

// Import all the views
import DashboardView from '../views/DashboardView';
import BehaviorTreeView from '../views/BehaviorTreeView';
import DialogTreeView from '../views/DialogTreeView';

class MallosLayoutManager extends Component<{
  navigationViewController: ViewController,
}> {
  componentDidMount() {
    const { navigationViewController } = this.props;
    navigationViewController.addView(DashboardView);
    navigationViewController.addView(BehaviorTreeView);
    navigationViewController.addView(DialogTreeView);
  }

  render() {
    return (
      <LayoutManagerWithViewController
        customComponents={{ LinkItem }}
        globalNavigation={MallosGlobalNavigation}
        {...this.props}
      />
    );
  }
}

export const MallosLayoutManagerViewController = withNavigationViewController(MallosLayoutManager);
