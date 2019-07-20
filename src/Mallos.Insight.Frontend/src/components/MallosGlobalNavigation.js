import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router';
import {
  GlobalNav,
  ContainerHeader,
  Item, light
} from '@atlaskit/navigation-next';
import GlobalNavigation from '@atlaskit/global-navigation';
import Drawer from '@atlaskit/drawer';

import DashboardIcon from '@atlaskit/icon/glyph/dashboard';
import GearIcon from '@atlaskit/icon/glyph/settings';
import SearchIcon from '@atlaskit/icon/glyph/search';
import CreateIcon from '@atlaskit/icon/glyph/add';
import AtlassianIcon from '@atlaskit/icon/glyph/atlassian';
import ArrowleftIcon from '@atlaskit/icon/glyph/arrow-left';

import CreateDrawer from '../components/drawers/CreateDrawer';
import SearchDrawer from '../components/drawers/SearchDrawer';
import HelpDropdownMenu from '../components/help/HelpDropdownMenu';
import ProfileDropdownMenu from '../components/profile/ProfileDropdownMenu';

export default class MallosGlobalNavigation extends React.Component {
  state = {
    navLinks: [
      ['/', 'Home', DashboardIcon],
      ['/settings', 'Settings', GearIcon],
    ]
  };

  static contextTypes = {
    navOpenState: PropTypes.object,
    router: PropTypes.object,
  };

  openDrawer = (openDrawer) => {
    this.setState({ openDrawer });
  };

  shouldComponentUpdate(nextProps, nextContext) {
    return true;
  };

  render() {
    const backIcon = <ArrowleftIcon label="Back icon" size="medium" />;
    const globalPrimaryIcon = <AtlassianIcon label="Atlassian icon" size="xlarge" />;

    return (
      <GlobalNavigation
        isOpen={this.context.navOpenState.isOpen}
        width={this.context.navOpenState.width}
        onResize={this.props.onNavResize}
        
        /* Product */
        productIcon={AtlassianIcon}
        productTooltip="Mallos.Insight"
        productHref="#"
        onProductClick={() => null}

        /* Search */
        searchTooltip="Search"
        searchDrawerWidth="narrow"
        onSearchDrawerOpen={() => null}
        onSearchDrawerClose={() => null}
        searchDrawerContents={() => <div>Search</div>}

        /* Create */
        createTooltip="Create"
        createDrawerWidth="narrow"
        isCreateDrawerOpen={false}
        onCreateDrawerOpen={() => null}
        onCreateDrawerClose={() => null}
        createDrawerContents={() => <CreateDrawer onItemClicked={(sender, item) => console.log("Item clicked! ", item)} />}

        /* Profile */
        profileTooltip="Eric Tuvesson"
        profileItems={ProfileDropdownMenu}
        profileIconUrl=""

        /* Help */
        helpItems={HelpDropdownMenu}
      >
        {
          this.state.navLinks.map(link => {
            const [url, title, Icon] = link;
            return (
              <Link key={url} to={url}>
                <Item
                  icon={<Icon label={title} size="medium" />}
                  text={title}
                  isSelected={this.context.router.isActive(url, true)}
                />
              </Link>
            );
          }, this)
        }
      </GlobalNavigation>
    );
  }
}
