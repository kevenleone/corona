import React from 'react';
import PropTypes from 'prop-types';

export default function Text({ data }) {
  return (
    <div className="time">
      <p>{data}</p>
    </div>
  );
}

Text.propTypes = {
  data: PropTypes.string,
};

Text.defaultProps = {
  data: '',
};
