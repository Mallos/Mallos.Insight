import React, { Component } from 'react';
import LinkItem from './LinkItem';

import { ItemAvatar } from '@atlaskit/navigation-next';
import { JiraIcon, JiraWordmark } from '@atlaskit/logo';

import FolderIcon from '@atlaskit/icon/glyph/folder';

export const DialogTreeView = {
  id: 'container/dialogtree',
  type: 'container',
  getItems: () => [
    {
      type: 'HeaderSection',
      id: 'container/dialogtree:header',
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
          text: 'Dialog Tree',
          subText: 'Project description',
          id: 'dialogtree-header',
        },
      ],
    },
    {
      type: 'MenuSection',
      nestedGroupKey: 'menu',
      id: 'container/dialogtree:menu',
      parentId: null,
      items: [
        {
          type: 'Item',
          id: 'dialogtrees',
          before: FolderIcon,
          goTo: 'product/dashboard',
          text: 'Back',
        },
      ],
    },
  ],
};

export default DialogTreeView;
