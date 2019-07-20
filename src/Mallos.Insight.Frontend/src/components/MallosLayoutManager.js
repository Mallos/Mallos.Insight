import React, { Component } from 'react';

import {
  LayoutManagerWithViewController,
  NavigationProvider,
  ViewController,
  withNavigationViewController,
} from '@atlaskit/navigation-next';

import MallosGlobalNavigation from './MallosGlobalNavigation';
import LinkItem, { productHomeView, productIssuesView } from '../routes';

class MallosLayoutManager extends Component<{
  navigationViewController: ViewController,
}> {
  componentDidMount() {
    const { navigationViewController } = this.props;
    navigationViewController.addView(productHomeView);
    navigationViewController.addView(productIssuesView);
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
