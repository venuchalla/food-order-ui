import { Fragment } from 'react';

import MainNavigation from './MainNavigation';

const MainLayout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default MainLayout;
