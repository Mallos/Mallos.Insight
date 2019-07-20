import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Flag, { FlagGroup } from '@atlaskit/flag';
import Modal from '@atlaskit/modal-dialog';
import Page from '@atlaskit/page';
import '@atlaskit/css-reset';

import {
  GlobalItem,
  LayoutManager,
  NavigationProvider,
  ThemeProvider,
  light,
  dark,
} from '@atlaskit/navigation-next';

import MallosGlobalNavigation from '../components/MallosGlobalNavigation';

type Props = {};
type State = {
  themeContext: any,
  themeMode: 'light' | 'dark'
};

export default class App extends Component<Props, State> {
  state = {
    flags: [],
    isModalOpen: false,
    themeContext: 'light',
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
    const { themeContext, themeMode } = this.state;
    this.setState({
      themeContext: themeContext,
      themeMode: themeMode === 'light' ? 'dark' : 'light',
    });
  };

  render() {
    const { themeContext, themeMode } = this.state;
    return (
      <ThemeProvider
        theme={theme => ({
          ...theme,
          context: 'container',
          mode: themeMode === 'light' ? light : dark,
        })}
      >
        <div>
          <NavigationProvider>
            <LayoutManager
              globalNavigation={MallosGlobalNavigation}
              productNavigation={() => null}
              containerNavigation={() => null}
            >
              {this.props.children}
            </LayoutManager>
          </NavigationProvider>
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
      </ThemeProvider>
    );
  }
}
