import './_ErrorNotImplemented.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorNotImplemented extends Component {
  render() {
    const { s } = this.props;

    return (
      <div className='not-implemented'>
        Oops! Under Construction!
      </div>
    );
  }
}

export default ErrorNotImplemented;
