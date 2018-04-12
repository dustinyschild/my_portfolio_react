import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  s: PropTypes.string.isRequired
};

const Sidebar = ({ s }) => {
  return (
    <div>
      {s}
    </div>
  );
};

Sidebar.propTypes = propTypes;

export default Sidebar;
