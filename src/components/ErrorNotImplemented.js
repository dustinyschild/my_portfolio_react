import './_ErrorNotImplemented.scss';
import React from 'react';
import PropTypes from 'prop-types';

const ErrorNotImplemented = () => {
  return (
    <div className='not-implemented'>
      Oops, Under Construction! If you would like to see a more complete portfolio of my work, please visit my non-reactified portfolio page at:
      {' '}
      <a
        className='portfolio-link'
        href='https://dustin-portfolio.herokuapp.com/'
      >
        My portfolio (non React)
      </a>
    </div>
  );
};

export default ErrorNotImplemented;
