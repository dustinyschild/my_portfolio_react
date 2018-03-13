import './_MainNav.scss';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NOT_IMPLEMENTED, ABOUT_ME_ROUTE } from '../constants/routes';

const MainNav = ()  => {
  return (
    <div className='main-nav'>
      <div className='main-nav__tab'>
        <Link to={NOT_IMPLEMENTED}>{/* Change route */}
          About Me
        </Link>
      </div>
      <div className='main-nav__tab'>
        <Link to={NOT_IMPLEMENTED}>{/* Change route */}
          My Work
        </Link>
      </div>
      <div className='main-nav__tab'>
        <Link to={NOT_IMPLEMENTED}>{/* Change route */}
          My Home Projects
        </Link>
      </div>
    </div>
  );
};

export default MainNav;
