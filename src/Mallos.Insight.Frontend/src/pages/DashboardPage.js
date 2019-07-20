import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Button, { ButtonGroup } from '@atlaskit/button';
import { withNavigationViewController } from '@atlaskit/navigation-next';

import ContentWrapper from '../components/page/ContentWrapper';
import PageTitle from '../components/page/PageTitle';

import DashboardView from '../views/DashboardView';

class DashboardPageBase extends Component<{
  navigationViewController: ViewController,
}> {
  static contextTypes = {
    showModal: PropTypes.func,
    addFlag: PropTypes.func,
    onConfirm: PropTypes.func,
    onCancel: PropTypes.func,
    onClose: PropTypes.func,
  };

  componentDidMount() {
    const { navigationViewController } = this.props;
    navigationViewController.setView(DashboardView.id);
  }

  render() {
    return (
      <ContentWrapper>
        <PageTitle>Dashboard</PageTitle>
        <ButtonGroup>
          <Button
            appearance="primary"
            onClick={this.context.showModal}
            onClose={() => { }}
          >Click to view Atlaskit modal</Button>
          <Button onClick={this.context.addFlag}>click to view Atlaskit flag</Button>
        </ButtonGroup>
      </ContentWrapper>
    );
  }
}

const DashboardPage = withNavigationViewController(DashboardPageBase);
export default DashboardPage; 
