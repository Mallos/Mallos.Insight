import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Button, { ButtonGroup } from '@atlaskit/button';
import { withNavigationViewController } from '@atlaskit/navigation-next';
import TextArea from '@atlaskit/textarea';
import Select from '@atlaskit/select';

import ContentWrapper from '../components/page/ContentWrapper';
import PageTitle from '../components/page/PageTitle';
import TextField from '@atlaskit/field-text';

import EndpointSelect from '../components/explorer/EndpointSelect';

import DashboardView from '../views/DashboardView';

require('codemirror/lib/codemirror.css');
require('codemirror/theme/neat.css');
require('codemirror/mode/javascript/javascript.js');

import { Controlled as CodeMirror } from 'react-codemirror2';

import axios from 'axios';

const initialRequestBody = `{\n}\n`;

class ExplorerPageBase extends Component<{
  navigationViewController: ViewController,
},
{
  requestBody: String,
  responseUrl: String,
  responseBody: String,
  responseError: String,
  sending: Boolean,
}> {
  state = {
    requestBody: initialRequestBody,
    responseUrl: '',
    responseBody: '',
    responseError: '',
    sending: false,
  }

  componentDidMount() {
    const { navigationViewController } = this.props;
    navigationViewController.setView(DashboardView.id);
  }

  sendRequest() {
    this.setState({
      sending: true,
      responseError: ''
    });
    
    const { responseUrl, requestBody } = this.state;

    axios
      .post(`/api/${responseUrl}`, requestBody)
      .then(response => {
        this.setState({
          sending: false,
          responseBody: JSON.stringify(response.data, null, 2)
        });
      })
      .catch(error => {
        this.setState({
          sending: false,
          responseBody: '',
          responseError: 'Error: ' + error.message
        });
      });
  }

  render() {
    return (
      <ContentWrapper>
        <PageTitle>API Explorer</PageTitle>
        <div>
          <h4 style={{ padding: '8px 0' }}>Request</h4>
          <EndpointSelect
            onChanged={value => this.setState({ responseUrl: value })}
          />

          <div style={{ margin: '8px 0', border: '6px solid #f4f5f7', borderRadius: '5px' }}>
            <CodeMirror
              style={{ height: '250px' }}
              value={this.state.requestBody}
              options={{
                mode: 'javascript',
                lineNumbers: true
              }}
              onBeforeChange={(editor, data, value) => {
                this.setState({ requestBody: value });
              }}
            />
          </div>
          <ButtonGroup appearance="default">
            <Button
              isLoading={this.state.sending}
              onClick={() => this.sendRequest()}
            >Send</Button>
          </ButtonGroup>

          <h4 style={{ padding: '8px 0' }}>Response <span style={{ color: 'red', fontSize: '75%', paddingLeft: '16px' }}>{this.state.responseError}</span></h4>
          <div style={{ width: '100%', border: '6px solid #f4f5f7', borderRadius: '5px' }}>
            <CodeMirror
              style={{ height: '250px' }}
              value={this.state.responseBody}
              options={{
                mode: 'javascript',
                lineNumbers: true
              }}
              onBeforeChange={(editor, data, value) => {
                this.setState({ responseBody: value });
              }}
            />
          </div>
        </div>
      </ContentWrapper>
    );
  }
}

const ExplorerPage = withNavigationViewController(ExplorerPageBase);
export default ExplorerPage; 
