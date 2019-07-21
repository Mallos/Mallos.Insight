import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Button, { ButtonGroup } from '@atlaskit/button';
import { withNavigationViewController } from '@atlaskit/navigation-next';
import Tabs, { TabItem } from '@atlaskit/tabs';
import Tooltip from '@atlaskit/tooltip';
import TextArea from '@atlaskit/textarea';
import TextField from '@atlaskit/field-text';

import ContentWrapper from '../components/page/ContentWrapper';
import PageTitle from '../components/page/PageTitle';

import DashboardView from '../views/DashboardView';

const ConsoleTab = (text) => (
  <div
    style={{
      width: '100%',
      marginTop: '10px'
    }}
  >
    <TextArea
      style={{
        height: '300px'
      }}
      value={text} 
      isReadOnly 
    />
    <TextField
      style={{
        width: '100%'
      }}
      label="Input"
    />
  </div>
);

const tabs = [
  {
    label: 'Information',
    tooltip: 'Information',
    content: ConsoleTab('Hello World Information')
  },
  {
    label: 'Warning',
    tooltip: 'Warning',
    content: ConsoleTab('Hello World Warning')
  },
  {
    label: 'Error',
    tooltip: 'Error',
    content: ConsoleTab('Hello World Error')
  },
  {
    label: 'Debug',
    tooltip: 'Debug',
    content: ConsoleTab('Hello World Debug')
  },
];

const TooltipItem = (props: TabItemComponentProvided) => (
  <Tooltip content={props.data.tooltip}>
    <TabItem {...props} />
  </Tooltip>
);

class ConsolePageBase extends Component<{
  navigationViewController: ViewController,
}> {
  componentDidMount() {
    const { navigationViewController } = this.props;
    navigationViewController.setView(DashboardView.id);
  }

  render() {
    return (
      <ContentWrapper>
        <PageTitle>Console</PageTitle>
        <div>
          <Tabs
            components={{ Item: TooltipItem }}
            tabs={tabs}
            onSelect={(_tab, index) => console.log('Selected Tab', index + 1)}
          />
        </div>
      </ContentWrapper>
    );
  }
}

const ConsolePage = withNavigationViewController(ConsolePageBase);
export default ConsolePage; 
