import React, { Component } from 'react';
import LinkItem from './LinkItem';

import { ItemAvatar } from '@atlaskit/navigation-next';
import { JiraIcon, JiraWordmark } from '@atlaskit/logo';

import FolderIcon from '@atlaskit/icon/glyph/folder';

export const BehaviorTreeView = {
  id: 'container/behaviortree',
  type: 'container',
  getItems: () => [
    {
      type: 'HeaderSection',
      id: 'container/behaviortree:header',
      items: [
        {
          type: 'ContainerHeader',
          before: itemState => (
            <ItemAvatar
              itemState={itemState}
              appearance="square"
              size="large"
            />
          ),
          text: 'Behavior Tree',
          subText: 'Project description',
          id: 'project-header',
        },
      ],
    },
    {
      type: 'MenuSection',
      nestedGroupKey: 'menu',
      id: 'container/behaviortree:menu',
      parentId: null,
      items: [
        {
          type: 'Item',
          id: 'back',
          before: FolderIcon,
          goTo: 'product/dashboard',
          text: 'Back',
        },
      ],
    },
  ],
};

export default BehaviorTreeView;
