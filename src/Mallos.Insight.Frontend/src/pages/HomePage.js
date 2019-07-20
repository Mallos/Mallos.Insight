import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Button, { ButtonGroup } from '@atlaskit/button';

import ContentWrapper from '../components/page/ContentWrapper';
import PageTitle from '../components/page/PageTitle';

export default class HomePage extends Component {
  static contextTypes = {
    showModal: PropTypes.func,
    addFlag: PropTypes.func,
    onConfirm: PropTypes.func,
    onCancel: PropTypes.func,
    onClose: PropTypes.func,
  };

  render() {
    return (
      <ContentWrapper>
        <PageTitle>Home</PageTitle>
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