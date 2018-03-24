import './_Sidebar.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

const propTypes = {
  s: PropTypes.string.isRequired
};

const Sidebar = ({ s }) => {
  return (
    <div className='main-sidebar'>
      Hello it's sidebar
    </div>
  );
};

Sidebar.propTypes = propTypes;

export default Sidebar;
