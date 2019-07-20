import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Button, { ButtonGroup } from '@atlaskit/button';
import { withNavigationViewController } from '@atlaskit/navigation-next';

import ContentWrapper from '../components/page/ContentWrapper';
import PageTitle from '../components/page/PageTitle';

import { productIssuesView } from '../routes';

class SettingsPageBase extends Component<{
  navigationViewController: ViewController,
}> {
  componentDidMount() {
    const { navigationViewController } = this.props;
    navigationViewController.setView(productIssuesView.id);
  }

  render() {
    return (
      <ContentWrapper>
        <PageTitle>Settings Page</PageTitle>
      </ContentWrapper>
    );
  }
}

const SettingsPage = withNavigationViewController(SettingsPageBase);
export default SettingsPage; 
