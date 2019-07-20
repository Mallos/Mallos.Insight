import LinkItem from './LinkItem';

import { JiraIcon, JiraWordmark } from '@atlaskit/logo';

import DashboardIcon from '@atlaskit/icon/glyph/dashboard';
import PortfolioIcon from '@atlaskit/icon/glyph/portfolio';

export const DashboardView = {
  id: 'product/dashboard',
  type: 'product',
  getItems: () => [
    {
      type: 'HeaderSection',
      id: 'product/dashboard:header',
      items: [
        {
          type: 'Wordmark',
          wordmark: JiraWordmark,
          id: 'jira-wordmark',
        },
      ],
    },
    {
      type: 'MenuSection',
      nestedGroupKey: 'menu',
      id: 'product/dashboard:menu',
      parentId: null,
      items: [
        {
          type: 'InlineComponent',
          component: LinkItem,
          id: 'dashboard',
          before: DashboardIcon,
          text: 'Dashboard',
          to: '/',
        },
        {
          type: 'InlineComponent',
          component: LinkItem,
          id: 'behaviortree',
          before: PortfolioIcon,
          text: 'Behavior Trees',
          to: '/behaviortree',
        },
        {
          type: 'InlineComponent',
          component: LinkItem,
          id: 'dialogtrees',
          before: PortfolioIcon,
          text: 'Dialog Trees',
          to: '/dialogtree',
        },
      ],
    },
  ],
};

export default DashboardView;
