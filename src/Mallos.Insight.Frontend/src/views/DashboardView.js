import LinkItem from './LinkItem';

import { JiraIcon, JiraWordmark } from '@atlaskit/logo';

import DashboardIcon from '@atlaskit/icon/glyph/dashboard';
import DepartmentIcon from '@atlaskit/icon/glyph/department';
import RoadmapIcon from '@atlaskit/icon/glyph/roadmap';
import EditorCodeIcon from '@atlaskit/icon/glyph/editor/code';
import CodeIcon from '@atlaskit/icon/glyph/code';

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
          type: 'Separator',
        },
        {
          type: 'InlineComponent',
          component: LinkItem,
          id: 'behaviortree',
          before: DepartmentIcon,
          text: 'Behavior Trees',
          to: '/behaviortree',
        },
        {
          type: 'InlineComponent',
          component: LinkItem,
          id: 'dialogtrees',
          before: RoadmapIcon,
          text: 'Dialog Trees',
          to: '/dialogtree',
        },
        {
          type: 'Separator',
        },
        {
          type: 'InlineComponent',
          component: LinkItem,
          id: 'apiexplorer',
          before: EditorCodeIcon,
          text: 'API Explorer',
          to: '/explorer',
        },
        {
          type: 'InlineComponent',
          component: LinkItem,
          id: 'console',
          before: CodeIcon,
          text: 'Console',
          to: '/console',
        },
      ],
    },
  ],
};

export default DashboardView;
