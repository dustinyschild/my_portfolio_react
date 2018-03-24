import './_MainNav.scss';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';

const isActiveTab = (path, tabRoute) => {
  return path.includes(tabRoute) ? 'active' : '';
};

const MainNav = ({ location })  => {
  return (
    <div className='main-nav'>
      <Link to={routes.ABOUT_ME_ROUTE}>{/* Change route */}
        <div className={`main-nav__tab ${isActiveTab(location.pathname, routes.ABOUT_ME_ROUTE)}`}>
          About Me
        </div>
      </Link>
      <Link to={routes.MY_WORK}>{/* Change route */}
        <div className={`main-nav__tab ${isActiveTab(location.pathname, routes.MY_WORK)}`}>
          My Work
        </div>
      </Link>
      <Link to={routes.MY_HOME_PROJECTS}>{/* Change route */}
        <div className={`main-nav__tab ${isActiveTab(location.pathname, routes.MY_HOME_PROJECTS)}`}>
          My Home Projects
        </div>
      </Link>
    </div>
  );
};

export default MainNav;
