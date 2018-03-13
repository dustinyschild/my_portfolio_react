import './_MainNav.scss';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ABOUT_ME_ROUTE } from '../constants/routes';

const MainNav = ()  => {
  return (
    <div className='main-nav'>
      <Link to={ABOUT_ME_ROUTE}>
        About Me
      </Link>
    </div>
  );
};

export default MainNav;
