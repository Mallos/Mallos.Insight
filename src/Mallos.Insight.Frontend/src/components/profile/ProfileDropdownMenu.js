import React from 'react';
import { DropdownItemGroup, DropdownItem } from '@atlaskit/dropdown-menu';

export default () => (
  <DropdownItemGroup>
    <DropdownItem>View profile</DropdownItem>
    <DropdownItem>Manage Atlassian account</DropdownItem>
    <DropdownItem>Bitbucket settings</DropdownItem>
    <DropdownItem>Integrations</DropdownItem>
    <DropdownItem>Bitbucket labs</DropdownItem>
    <DropdownItem>Log out</DropdownItem>
  </DropdownItemGroup>
);
