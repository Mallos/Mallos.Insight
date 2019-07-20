import React, { Component } from 'react';

import ContentWrapper from '../components/page/ContentWrapper';
import PageTitle from '../components/page/PageTitle';

export default class HomePage extends Component {
  render() {
    return (
      <ContentWrapper>
        <PageTitle>Settings</PageTitle>
        <ButtonGroup>
          <Button
            appearance="primary"
            onClick={this.context.showModal}
            onClose={() => { }}
          >Settings page</Button>
          <Button onClick={this.context.addFlag}>click to view Atlaskit flag</Button>
        </ButtonGroup>
      </ContentWrapper>
    );
  }
}
