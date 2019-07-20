import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Button, { ButtonGroup } from '@atlaskit/button';
import { withNavigationViewController } from '@atlaskit/navigation-next';

import ContentWrapper from '../components/page/ContentWrapper';
import PageTitle from '../components/page/PageTitle';

import BehaviorTreeView from '../views/BehaviorTreeView';

class BehaviorTreePageBase extends Component<{
  navigationViewController: ViewController,
}> {
  componentDidMount() {
    const { navigationViewController } = this.props;
    navigationViewController.setView(BehaviorTreeView.id);
  }

  render() {
    return (
      <ContentWrapper>
        <PageTitle>Behavior Tree</PageTitle>
        <p>
          <Link to="/">Back to Dashboards</Link>
        </p>
      </ContentWrapper>
    );
  }
}

const BehaviorTreePage = withNavigationViewController(BehaviorTreePageBase);
export default BehaviorTreePage; 
