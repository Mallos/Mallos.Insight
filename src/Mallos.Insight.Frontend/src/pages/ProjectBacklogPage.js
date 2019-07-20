import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Button, { ButtonGroup } from '@atlaskit/button';
import { withNavigationViewController } from '@atlaskit/navigation-next';

import ContentWrapper from '../components/page/ContentWrapper';
import PageTitle from '../components/page/PageTitle';

import { projectHomeView } from '../routes';

class ProjectBacklogPageBase extends Component<{
  navigationViewController: ViewController,
}> {
  componentDidMount() {
    const { navigationViewController } = this.props;
    navigationViewController.setView(projectHomeView.id);
  }

  render() {
    return (
      <ContentWrapper>
        <PageTitle>My Project</PageTitle>
        <p>
          <Link to="/">Back to Dashboards</Link>
        </p>
      </ContentWrapper>
    );
  }
}

const ProjectBacklogPage = withNavigationViewController(ProjectBacklogPageBase);
export default ProjectBacklogPage; 
