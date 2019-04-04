import React from 'react';
import PropTypes from 'prop-types';

function Icon({ text = 'Hello World' }) {
  return (
      <div>
        <span>I'm a react icon.</span>
        {text}
      </div>
  );
}

Icon.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Icon;
