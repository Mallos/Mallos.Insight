import PropTypes from 'prop-types';
import React, { Component } from 'react';

import '@atlaskit/css-reset';
import Flag, { FlagGroup } from '@atlaskit/flag';
import Modal from '@atlaskit/modal-dialog';
import Page from '@atlaskit/page';

import {
  AtlaskitThemeProvider,
  elevation as AkElevations,
  themed,
} from '@atlaskit/theme';

import { MallosLayoutManagerViewController } from './components/MallosLayoutManager';

export default class App extends Component<
{},
{
  themeMode: 'light' | 'dark'
}> {
  state = {
    flags: [],
    isModalOpen: false,
    themeMode: 'light'
  };

  static contextTypes = {
    navOpenState: PropTypes.object,
    router: PropTypes.object,
  };

  static propTypes = {
    navOpenState: PropTypes.object,
    onNavResize: PropTypes.func,
  };

  static childContextTypes = {
    showModal: PropTypes.func,
    addFlag: PropTypes.func,
  }

  getChildContext() {
    return {
      showModal: this.showModal,
      addFlag: this.addFlag,
    };
  }

  showModal = () => {
    this.setState({ isModalOpen: true });
  }

  hideModal = () => {
    this.setState({ isModalOpen: false });
  }

  addFlag = () => {
    this.setState({ flags: [{ id: Date.now() }].concat(this.state.flags) });
  }

  onFlagDismissed = (dismissedFlagId) => {
    this.setState({
      flags: this.state.flags.filter(flag => flag.id !== dismissedFlagId),
    })
  }

  switchTheme = () => {
    const { themeMode } = this.state;
    this.setState({
      themeMode: themeMode === 'light' ? 'dark' : 'light',
    });
  };

  render() {
    const { themeMode } = this.state;
    return (
      <AtlaskitThemeProvider mode={themeMode}>
        <div>
          <MallosLayoutManagerViewController
            {...this.props}
          />
          <div>
            <FlagGroup onDismissed={this.onFlagDismissed}>
              {
                this.state.flags.map(flag => (
                  <Flag
                    id={flag.id}
                    key={flag.id}
                    title="Flag Title"
                    description="Flag description"
                  />
                ))
              }
            </FlagGroup>
            {
              this.state.isModalOpen && (
                <Modal
                  heading="Candy bar"
                  actions={[{ text: 'Exit candy bar', onClick: this.hideModal }]}
                  onClose={this.hideModal}
                >
                  <p style={{ textAlign: 'center' }}>
                    <img src="http://i.giphy.com/yidUztgRB2w2gtDwL6.gif" alt="Moar cupcakes" />
                  </p>
                </Modal>
              )
            }
          </div>
        </div>
      </AtlaskitThemeProvider>
    );
  }
}
