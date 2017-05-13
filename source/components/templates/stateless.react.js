//replace NAME with real value

import React from 'react';
import PropTypes from 'prop-types';


const NAME = ({}) => {
  const handleClick = () => {};
  return (
    <div onClick={handleClick}></div>
  );
}


//https://facebook.github.io/react/docs/typechecking-with-proptypes.html
<NAME>.propTypes = {
  value: PropTypes.string
};

export default NAME;
