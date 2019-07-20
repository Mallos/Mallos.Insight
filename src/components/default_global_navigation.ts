import React from 'react';
import GlobalNavigation from '@atlaskit/global-navigation';

export const DefaultGlobalNavigation = () => (
  <GlobalNavigation
    productIcon={MallosIcon}
    productHref="#"
    onProductClick={() => console.log('product clicked')}
    onSearchClick={() => console.log('search clicked')}
    onHelpClick={() => console.log('help clicked')}
    helpItems={() => <div />}
    loginHref="#login"
    createDrawerContents={CreateDropdown}
    helpItems={HelpDropdown}
    profileItems={ProfileDropdown}
    profileIconUrl="https://api.adorable.io/avatars/285/abott@adorable.png"
  />
);
